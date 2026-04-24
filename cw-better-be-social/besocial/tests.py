import json
from django.test import TestCase
from django.urls import reverse
from django.urls import reverse_lazy

from rest_framework.test import APIRequestFactory
from rest_framework.test import APITestCase

from .model_factories import *
from .serializers import *


class UserListSerialiserTest(APITestCase):
    authuser = None
    user1 = None
    userserializer = None

    def setUp(self):
        authuser = UserFactory.create()
        self.user1 = AppUserFactory.create(pk=1, user=authuser,
                                           location=None, avatar="anon.jpg")
        self.userserializer = UserSerializer(instance=self.user1)

    def tearDown(self):
        AppUser.objects.all().delete()
        User.objects.all().delete()
        AppUserFactory.reset_sequence(0)
        UserFactory.reset_sequence(0)

    def test_userSerilaiserHasCorrectFields(self):
        data = self.userserializer.data
        self.assertEqual(set(data.keys()), set(['user', 'location', 'avatar']))

    def test_userSerilaiserUserIDIsHasCorrectData(self):
        data = self.userserializer.data
        self.assertEqual(data['user'], 1)
        self.assertEqual(data['location'], None)
        self.assertEqual(data['avatar'], "/images/anon.jpg")

class UserTest(APITestCase):

    first_user_url = ''
    last_user_url = ''
    high_user_url = ''
    invalid_user_url = ''

    def setUp(self):
        for i in range(0,1000):
            authuser = UserFactory.create()
            AppUserFactory.create(user=authuser)
        self.first_user_url = reverse('user_api', kwargs={'pk': 1})
        self.last_user_url = reverse('user_api', kwargs={'pk': 1000})
        self.high_user_url = reverse('user_api', kwargs={'pk': 1001})
        self.invalid_user_url = "/api/user/testuser/"

    def tearDown(self):
        AppUser.objects.all().delete()
        User.objects.all().delete()
        AppUserFactory.reset_sequence(0)
        UserFactory.reset_sequence(0)

    def test_userDetailReturnsSuccess(self):
        response = self.client.get(self.first_user_url, format='json')
        self.assertEqual(response.status_code, 200)
        response.render()
        data = json.loads(response.content)
        self.assertTrue('location' in data)

    def test_userDetailFindsLastUser(self):
        response = self.client.get(self.last_user_url, format='json')
        self.assertEqual(response.status_code, 200)
        response.render()
        data = json.loads(response.content)
        self.assertTrue('avatar' in data)

    def test_userDetailReturnFailOnTooHighPk(self):
        response = self.client.get(self.high_user_url, format='json')
        self.assertEqual(response.status_code, 404)

    def test_userDetailReturnFailOnStringPk(self):
        response = self.client.get(self.invalid_user_url, format='json')
        self.assertEqual(response.status_code, 404)


class StatusPostTest(APITestCase):

    first_post_url = ''
    last_post_url = ''
    high_post_url = ''
    invalid_post_url = ''

    def setUp(self):
        for i in range(0,1000):
            authuser = UserFactory.create()
            StatusPostFactory.create(user=authuser)
        self.first_post_url = reverse('posts_api', kwargs={'pk': 1})
        self.last_post_url = reverse('posts_api', kwargs={'pk': 1000})
        self.high_post_url = reverse('posts_api', kwargs={'pk': 1001})
        self.invalid_post_url = "/api/posts/testuser/"

    def tearDown(self):
        User.objects.all().delete()
        StatusPost.objects.all().delete()
        UserFactory.reset_sequence(0)
        StatusPostFactory.reset_sequence(0)

    def test_postListReturnsSuccess(self):
        response = self.client.get(self.first_post_url, format='json')
        self.assertEqual(response.status_code, 200)
        response.render()
        data = json.loads(response.content)
        self.assertEqual(len(data), 1)
        self.assertTrue('timestamp' in data[0])

    def test_postListFindsLastPost(self):
        response = self.client.get(self.last_post_url, format='json')
        self.assertEqual(response.status_code, 200)
        response.render()
        data = json.loads(response.content)
        self.assertEqual(len(data), 1)
        self.assertTrue('post_content' in data[0])

    def test_postListReturnNoneOnTooHighPk(self):
        response = self.client.get(self.high_post_url, format='json')
        response.render()
        data = json.loads(response.content)
        self.assertEqual(len(data), 0)

    def test_postListReturnFailOnStringPk(self):
        response = self.client.get(self.invalid_post_url, format='json')
        self.assertEqual(response.status_code, 404)


class ImageTest(APITestCase):

    first_image_url = ''
    last_image_url = ''
    high_image_url = ''
    invalid_image_url = ''

    def setUp(self):
        for i in range(0,1000):
            authuser = UserFactory.create()
            ImageFactory.create(user=authuser)
        self.first_image_url = reverse('images_api', kwargs={'pk': 1})
        self.last_image_url = reverse('images_api', kwargs={'pk': 1000})
        self.high_image_url = reverse('images_api', kwargs={'pk': 1001})
        self.invalid_image_url = "/api/images/testuser/"

    def tearDown(self):
        User.objects.all().delete()
        Image.objects.all().delete()
        UserFactory.reset_sequence(0)
        ImageFactory.reset_sequence(0)

    def test_imageListReturnsSuccess(self):
        response = self.client.get(self.first_image_url, format='json')
        self.assertEqual(response.status_code, 200)
        response.render()
        data = json.loads(response.content)
        self.assertEqual(len(data), 1)
        self.assertTrue('image' in data[0])

    def test_imageListFindsLastImage(self):
        response = self.client.get(self.last_image_url, format='json')
        self.assertEqual(response.status_code, 200)
        response.render()
        data = json.loads(response.content)
        self.assertEqual(len(data), 1)
        self.assertTrue('thumbnail' in data[0])

    def test_imageListReturnNoneOnTooHighPk(self):
        response = self.client.get(self.high_image_url, format='json')
        response.render()
        data = json.loads(response.content)
        self.assertEqual(len(data), 0)

    def test_imageListReturnFailOnStringPk(self):
        response = self.client.get(self.invalid_image_url, format='json')
        self.assertEqual(response.status_code, 404)

