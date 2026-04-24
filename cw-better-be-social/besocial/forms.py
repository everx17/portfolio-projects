from django import forms
from django.forms import ModelForm
from .models import *
from django.contrib.auth.models import User


class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = User # from the auth app
        fields = ('username', 'email', 'password')


class UserProfileForm(forms.ModelForm):
    class Meta:
        model = AppUser # extension of auth app user
        fields = ('location',)


class UserAvatarForm(forms.ModelForm):
    class Meta:
        model = AppUser # extension of auth app user
        fields = ('avatar',)


class StatusPostForm(forms.ModelForm):
    class Meta:
        model = StatusPost
        fields = ('post_content',)

