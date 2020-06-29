from django.db import models
from django.contrib.auth.models import User


class CurrentStat(models.Model):
    letter = models.CharField(max_length=1, primary_key=True)
    speed = models.DecimalField(max_digits=4, decimal_places=2)
    correct = models.IntegerField()
    wrong = models.IntegerField()
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.letter


class OverallStat(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    speed = models.DecimalField(max_digits=4, decimal_places=2)
    accuracy = models.DecimalField(max_digits=4, decimal_places=2)
    duration = models.IntegerField()
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return str(self.date)
