# Generated by Django 4.1.7 on 2023-03-31 04:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(default='Food', max_length=255),
            preserve_default=False,
        ),
    ]