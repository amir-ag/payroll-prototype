# Generated by Django 3.0 on 2020-02-05 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('record', '0002_auto_20200131_1250'),
    ]

    operations = [
        migrations.AddField(
            model_name='record',
            name='pdfstorage',
            field=models.FileField(blank=True, null=True, upload_to='pdfreports/', verbose_name='pdfstorage'),
        ),
    ]