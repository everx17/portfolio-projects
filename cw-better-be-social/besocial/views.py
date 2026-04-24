from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from .models import *
from .forms import *
from django.views.generic import ListView
from django.views.generic import DetailView
from django.views.generic.edit import CreateView
from django.views.generic.edit import DeleteView
from django.views.generic.edit import UpdateView
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

def user_logout(request):
    logout(request)
    return HttpResponseRedirect('/')


def user_login(request):
    users = User.objects.all().order_by('username')
    if request.method == 'POST': # user sent filled form

        username = request.POST['username']
        password = request.POST['password']

        # try to get user object from auth with these credentials
        user = authenticate(username=username, password=password)

        if user:
            if user.is_active: # credentials ok and account active
                login(request, user) # sign in to the auth app
                return HttpResponseRedirect('/user/'+user.username)
            else:
                return HttpResponse("Your account is disabled.")
        else:
            return HttpResponse("Invalid login details supplied.")
    else:
        return render(request, 'besocial/login.html', {'users': users})


def register(request):
    users = User.objects.all().order_by('username')

    registered = False

    if request.method == 'POST':
        # create new instance with the data from the POST request
        user_form = UserForm(data=request.POST)
        profile_form = UserProfileForm(data=request.POST)

        # validate
        if user_form.is_valid() and profile_form.is_valid():
            user = user_form.save() # auth: save user from form data
            user.set_password(user.password) # auth: set password
            user.save() # save auth user (updates password we just set?)
            profile = profile_form.save(commit=False) # read profile, don't save yet
            profile.user = user # set foreign key relation

            # if location was provided, add it to the row
            if 'location' in user_form.cleaned_data:
                profile.location = request.DATA['location']

            # finally, save the profile row and set registered flag
            profile.save()
            registered = True
        else:
            print(user_form.errors, profile_form.errors)
    else: # not POST, i.e. GET or something unexpected -> init forms
        user_form = UserForm()
        profile_form = UserProfileForm()

    # return the template with the forms etc as templating vars
    return render(request, 'besocial/register.html',
                  {'user_form': user_form,
                    'profile_form': profile_form,
                    'registered': registered,
                    'users': users}) # for nav bar

def index(request):
    users = User.objects.all().order_by('username')
    context = {'users': users}
    if request.user.is_authenticated:
        app_user = AppUser.objects.get(user=request.user)
        context['app_user'] = app_user
        return redirect('/user/'+request.user.username)
        
    return render(request, 'besocial/index.html', context)

def user(request, username):
    # GET only (no forms have /user/ as action for POST req)
    target_user = User.objects.get(username=username)
    viewed_user = AppUser.objects.get(user=target_user)
    users = User.objects.all().order_by('username')
    posts = StatusPost.objects.filter(user=target_user).order_by('-timestamp')
    images = Image.objects.filter(user=target_user).order_by('-timestamp')
    followers = FollowingsLink.objects.filter(followed=target_user)
    followeds = FollowingsLink.objects.filter(follower=target_user)
    context = {'target_user': target_user,
            'users': users,
            'posts': posts,
            'images': images,
            'followers': followers,
            'followeds': followeds,
            'viewed_user': viewed_user
    }
    if username == request.user.username:
        # viewing own profile, allow posting, following etc.
        user_form = UserForm()
        profile_form = UserProfileForm()
        avatar_form = UserAvatarForm()
        newpost_form = StatusPostForm()
        context['user_form'] = user_form
        context['profile_form'] = profile_form
        context['avatar_form'] = avatar_form
        context['newpost_form'] = newpost_form
    else:
        # someone else's profile, show Follow OR Unfollow button
        if request.user.is_authenticated:
            # is requesting user among target user's followers
            if followers.filter(follower=request.user).count() > 0:
                following = 1
                context['following'] = following

    if request.user.is_authenticated:
        app_user = AppUser.objects.get(user=request.user)
        context['app_user'] = app_user
    return render(request, 'besocial/user.html', context)
        
@login_required
def wait_upload(request):
    # no need to query the list of all users, it's not used in this view
    # need current user to display avatar, though
    if request.user.is_authenticated:
        app_user = AppUser.objects.get(user=request.user)
    return render(request, 'besocial/uploading.html', {'app_user': app_user})

@login_required
def update_user(request):
    if request.method == 'POST':
        user_form = UserForm(data=request.POST,instance=request.user)

        if user_form.is_valid():
            user = user_form.save()
            user.set_password(user.password)
            user.save()

    url = reverse('index')
    return redirect(url)

@login_required
def update_profile(request):
    if request.method == 'POST':
        profile_form = UserProfileForm(data=request.POST,instance=request.user)
        avatar_form = UserAvatarForm(request.POST,request.FILES,instance=request.user)

        if profile_form.is_valid() and avatar_form.is_valid():
            profile_form.save()
            avatar_form.save()

            app_user = AppUser.objects.get(user=request.user)

            if 'location' in profile_form.cleaned_data:
                app_user.location = profile_form.cleaned_data['location']
            if 'avatar' in avatar_form.cleaned_data:
                app_user.avatar = avatar_form.cleaned_data['avatar']
            
            app_user.save()

    url = reverse('index')
    return redirect(url)

@login_required
def chat(request):
    if request.user.is_authenticated:
        app_user = AppUser.objects.get(user=request.user) # for avatar

    return render(request, 'besocial/chat.html', {'app_user': app_user})

@login_required
def room(request, room_name):
    context = {'room_name': room_name}
    if request.user.is_authenticated:
        app_user = AppUser.objects.get(user=request.user)
        context['app_user'] = app_user # for avatar
        context['user_name'] = request.user.username # for chat log

    return render(request, 'besocial/room.html', context)


def results(request):

    query = request.GET['q']

    results = User.objects.filter(username__icontains=query)

    context = {'count': results.count(),
        'searchterm': query,
        'results': results}

    return render(request,'besocial/results.html', context)


# Notice: this uses the LOGIN_URL defined in settings.py to redirect
@login_required
def follow(request, username):
    if request.user.username != username: # can't follow yourself
        if request.method == 'POST':
            follower = User.objects.get(username=request.user.username)
            followed = User.objects.get(username=username)
            
            new_link = FollowingsLink(follower=follower, followed=followed)
            new_link.save()
    # after following, return to the followed's profile
    return HttpResponseRedirect('/user/'+username)


@login_required
def unfollow(request, username):
    if request.method == 'POST':
        follower = User.objects.get(username=request.user.username)
        followed = User.objects.get(username=username)
        
        FollowingsLink.objects.get(follower=follower, followed=followed).delete()
    # after unfollowing, return to current user's own profile
    url = reverse('index')
    return redirect(url)


@login_required
def create_post(request):
    if request.method == 'POST':
        post_form = StatusPostForm(request.POST)
        if post_form.is_valid():
            post_content = post_form.cleaned_data['post_content']

            new_post = StatusPost(user=request.user, post_content=post_content)
            new_post.save()
            
    url = reverse('index')
    return redirect(url)

