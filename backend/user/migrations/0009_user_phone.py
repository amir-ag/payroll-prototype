# Generated by Django 3.0 on 2020-02-11 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0008_auto_20200131_1250'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phone',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='phone'),
        ),
    ]
