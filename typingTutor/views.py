from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def practice(request):
    return render(request, 'practice.html')


def about(request):
    return render(request, 'about.html')


def contact(request):
    return render(request, 'contact.html')


def statistics(request):
    return render(request, 'statistics.html')


def profile(request):
    return render(request, 'profile.html')


def loginSignUp(request):
    return render(request, 'loginSignUp.html')


# def keyboard(request):
#    return render(request, 'keyboard.html')
