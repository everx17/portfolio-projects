from django.db import models
from django.contrib.auth.models import User

# create own AppUser class, mapping to auth app user
# -> extendable by user picture path etc.
class AppUser(models.Model):
    user = models.OneToOneField(User, related_name="auth_user", on_delete=models.CASCADE)
    location = models.CharField(max_length=256, null=True, blank=True)
    avatar = models.ImageField(default='avatars/anon.jpg', upload_to='avatars/', null=True)

    def __unicode__(self):
        # user = field we just created above, username = from auth
        return self.user.username


class StatusPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    post_content = models.CharField(max_length=1024)

    def __str__(self):
        return self.post_content


class Image(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=256, unique=True, db_index=True)
    image = models.ImageField(blank=False)
    # when creating new image, thumbnail is initially blank, allow null
    thumbnail = models.ImageField(null=True)

    def __str__(self):
        return self.name


class FollowingsLink(models.Model):
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name='following_user')
    followed = models.ForeignKey(User, on_delete=models.CASCADE, related_name='followed_user')

