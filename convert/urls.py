from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name= "index"),
    path("convert/unit.html", views.unit, name= "unit"),
    path("convert/files.html", views.file_converter, name= "file_converter"),
]