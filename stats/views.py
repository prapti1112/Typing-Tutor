from django.shortcuts import render
from django.contrib.auth.models import User


def index(request):
    u = User.objects.all()
    currentUser = User.objects.get(username='Prapti')
    currentStats = currentUser.currentstat_set.all()
    overallStats = currentUser.overallstat_set.all()
    context = {
        "user": currentUser,
        "currentStats": currentStats,
        "overallStats": overallStats,
        "FirstOverall": overallStats.first()
    }
    return render(request, './stats/Statistics.html', context)
