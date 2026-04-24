from django.urls import include, path
from . import views
from . import api
from django.contrib.auth.decorators import login_required

# instead of specifying login_required url for each url separately,
# LOGIN_URL is set in settings.py
urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('user/<str:username>/', views.user, name='user'),
    path('update_user/', views.update_user, name='update_user'),
    path('update_profile/', views.update_profile, name='update_profile'),
    path('follow/<str:username>/', views.follow, name='follow'),
    path('unfollow/<str:username>/', views.unfollow, name='unfollow'),
    path('create_post/', views.create_post, name='newpost'),
    path('chat/', views.chat, name='chat'),
    path('chat/<str:room_name>/', views.room, name='room'),
    path("search/", views.results, name="results"),
    path("uploading/", views.wait_upload, name="wait_upload"),
    path('api/users/', api.UserList.as_view(), name='users_api'),
    path('api/profiles/', api.ProfileList.as_view(), name='profile_api'),
    path('api/user/<int:pk>/', api.UserDetail.as_view(), name='user_api'),
    path('api/image/', login_required(api.ImageDetail.as_view()), name="image_api"),
    path('api/images/<int:pk>/', api.ImageList.as_view(), name="images_api"),
    path('api/posts/<int:pk>/', api.PostList.as_view(), name="posts_api"),
]
