from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Employee(models.Model):
    name = models.CharField(max_length=50)
    profile = models.CharField(max_length=50)
