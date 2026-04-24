import factory
from random import randint
from random import choice

from django.test import TestCase
from django.conf import settings
from django.core.files import File

from .models import *


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    username = factory.Sequence(lambda n: 'testuser%d' % n)
    password = "testuser"
    is_active = True


class AppUserFactory(factory.django.DjangoModelFactory):
    user = 1
    location = "Earth"
    avatar = factory.Sequence(lambda n: 'image%d.jpg' % n)

    class Meta:
        model = AppUser


class StatusPostFactory(factory.django.DjangoModelFactory):
    user = 1
    post_content = "Better post"

    class Meta:
        model = StatusPost


class ImageFactory(factory.django.DjangoModelFactory):
    user = 1
    name = factory.Sequence(lambda n: 'image%d.jpg' % n)
    image = "image.jpg"
    thumbnail = "thumb_image.jpg"

    class Meta:
        model = Image

