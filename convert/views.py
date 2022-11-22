# type: ignore
from django.shortcuts import render, reverse
from django.http import HttpResponse

# Create your views here.


def index(request):
    return render(request, "convert/index.html")

def page(request, slug):
    return render(request, "convert/{}.html".format(slug) , {
        "slug": slug
        })
