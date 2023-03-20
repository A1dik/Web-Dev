from django.urls import path
from . import views

unlpatterns = [
    path('', views.index)
]
