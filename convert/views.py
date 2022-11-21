from django.shortcuts import render, reverse
from django.http import HttpResponse

# Create your views here.


def index(request):
    return render(request, "convert/index.html")

def unit(request):
    return render(request, "convert/unit.html")

def file_converter(request):
    return render(request, "convert/files.html")