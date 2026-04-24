from django.contrib import admin
from .models import *


class AppUserAdmin(admin.ModelAdmin):
    list_display = ('user', 'location', 'avatar')


class FollowingsAdmin(admin.ModelAdmin):
    list_display = ('follower', 'followed')


class StatusPostAdmin(admin.ModelAdmin):
    list_display = ('user', 'timestamp', 'post_content')


class ImageAdmin(admin.ModelAdmin):
    list_display = ('user', 'timestamp', 'name', 'image', 'thumbnail')


admin.site.register(AppUser, AppUserAdmin)
admin.site.register(FollowingsLink, FollowingsAdmin)
admin.site.register(StatusPost, StatusPostAdmin)
admin.site.register(Image, ImageAdmin)
