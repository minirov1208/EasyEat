from django.urls import path,include
from . import views

app_name = 'homepages'

urlpatterns = [
    path('', views.index, name='index'),
]
