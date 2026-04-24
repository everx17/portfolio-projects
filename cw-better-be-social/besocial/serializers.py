from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['name', 'image']


class ImageListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['user', 'timestamp', 'name', 'image', 'thumbnail']


class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatusPost
        fields = ['user', 'timestamp', 'post_content']


class AuthUserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = ['user', 'location', 'avatar']


class UserSerializer(serializers.ModelSerializer):
    auth_user = AuthUserListSerializer(many=True, read_only=True)

    class Meta:
        model = AppUser
        fields = ['auth_user', 'user', 'location', 'avatar']
