# Generated by Django 3.0 on 2020-01-30 13:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Salary',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gross_month', models.FloatField(verbose_name='gross month')),
                ('ahv_amount', models.FloatField(verbose_name='AHV amount')),
                ('alv_amount', models.FloatField(verbose_name='ALV amount')),
                ('pension', models.FloatField(verbose_name='pension')),
                ('net', models.FloatField(verbose_name='net')),
                ('position', models.CharField(max_length=200, verbose_name='position')),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='date created')),
                ('date_modified', models.DateTimeField(auto_now=True, verbose_name='date modified')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='salary', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
        ),
    ]
