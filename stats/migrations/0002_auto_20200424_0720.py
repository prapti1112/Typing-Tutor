# Generated by Django 3.0.4 on 2020-04-24 01:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stats', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='CurrentStats',
            new_name='CurrentStat',
        ),
        migrations.RenameModel(
            old_name='OverallStats',
            new_name='OverallStat',
        ),
    ]
