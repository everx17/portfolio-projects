from celery import shared_task
from .models import *
from PIL import Image as img
import io
from django.core.files.uploadedfile import SimpleUploadedFile

@shared_task
def make_thumbnail(record_pk): # api.py passes pk in perform_create
    record = Image.objects.get(pk=record_pk)

    image = img.open('images/'+str(record.image))
    x_scale_factor = image.size[0]/100 # x size in 100s
    # scale it to 100 by (y / (how many times 100 was x))
    thumbnail = image.resize((100, int(image.size[1]/x_scale_factor)))

    byteArr = io.BytesIO() # generate a byte array
    thumbnail.save(byteArr, format='jpeg') # store thumb into byte array
    file = SimpleUploadedFile("thumb_"+str(record.image), byteArr.getvalue())
    record.thumbnail = file # update thumbnail field in database
    record.save() # save db row

@shared_task
def make_tile(record_pk): # api.py passes pk in perform_create
    record = Image.objects.get(pk=record_pk)

    image = img.open('images/'+str(record.image))
    width, height = image.size
    if (width > height): # handle landscape image, crop L+R
        cutoff = int((width-height) / 2)
        cropimg = image.crop((cutoff, 0, width-cutoff, height))
    elif (width < height): # handle portrait format, crop T+B
        cutoff = int((height-width) / 2)
        cropimg = image.crop((0, cutoff, width, height-cutoff))
    else:
        cropimg = image

    thumbnail = cropimg.resize((100, 100))

    byteArr = io.BytesIO() # generate a byte array
    thumbnail.save(byteArr, format='jpeg') # store thumb into byte array
    file = SimpleUploadedFile("thumb_"+str(record.image), byteArr.getvalue())
    record.thumbnail = file # update thumbnail field in database
    record.save() # save db row
