from django.shortcuts import render, reverse
from django.http import HttpResponse

# Create your views here.


def index(request):
    return render(request, "convert/index.html")