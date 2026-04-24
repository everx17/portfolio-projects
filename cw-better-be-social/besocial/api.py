from django.http import JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import *
from .serializers import *
from .tasks import *

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import mixins


class ImageDetail(mixins.CreateModelMixin,  generics.GenericAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def perform_create(self, serializer):
        record = serializer.save()
        record.user = self.request.user
        record.save()
        make_tile.delay(record.pk)

    def create(self, request, *args, **kwargs):
        response = super(ImageDetail, self).create(request, *args, **kwargs)
        return HttpResponseRedirect(redirect_to='/uploading/')

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ImageList(generics.ListAPIView):
    serializer_class = ImageListSerializer

    def get_queryset(self):
        user_id = self.kwargs['pk']
        return Image.objects.filter(user=user_id)


class PostList(generics.ListAPIView):
    serializer_class = PostListSerializer

    def get_queryset(self):
        user_id = self.kwargs['pk']
        return StatusPost.objects.filter(user=user_id)


class UserDetail(mixins.RetrieveModelMixin,
                 generics.GenericAPIView):
    queryset = AppUser.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = AuthUserListSerializer

class ProfileList(generics.ListAPIView):
    queryset = AppUser.objects.all()
    serializer_class = UserListSerializer
