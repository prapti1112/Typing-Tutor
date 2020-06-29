from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('lesson', views.lesson, name='Lessons'),
    path('overview', views.overview, name='Overview'),
    path('tanscribe', views.tanscribe, name='Transcribe'),
]
