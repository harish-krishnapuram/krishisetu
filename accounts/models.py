from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

##----------------USER PROFILE----------------
class User(AbstractUser):

    ROLE_CHOICES = (
        ('buyer', 'Consumer / Buyer'),
        ('farmer', 'Farmer / Kisan Producer'),
        ('admin', 'Super Admin Governance'),
    )

    role = models.CharField(
        max_length=10,
        choices=ROLE_CHOICES,
        default='buyer'
    )

    phone = models.CharField(
        max_length=20,
        blank=True
    )

    avatar = models.ImageField(
        upload_to='avatars/',
        null=True,
        blank=True
    )

    address = models.TextField(
        blank=True
    )

    def __str__(self):
        return self.username

#-----------FARMER PROFILE-----------------------------------
class FarmerProfile(models.Model):

    STATE_CHOICES = (
        ('Maharashtra', 'Maharashtra'),
        ('Punjab', 'Punjab'),
        ('Karnataka', 'Karnataka'),
        ('Haryana', 'Haryana'),
        ('Gujarat', 'Gujarat'),
        ('Other', 'Other'),
    )

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='farmer_profile'
    )

    farm_name = models.CharField(max_length=200)

    location = models.CharField(max_length=200)

    district = models.CharField(max_length=100)

    state = models.CharField(
        max_length=100,
        choices=STATE_CHOICES,
        default='Maharashtra'
    )

    experience_years = models.IntegerField(default=5)

    specialties = models.JSONField(default=list)

    is_verified = models.BooleanField(default=True)

    total_sales_quintals = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )

    rating = models.DecimalField(
        max_digits=3,
        decimal_places=2,
        default=4.90
    )

    reviews_count = models.IntegerField(default=0)

    def __str__(self):
        return self.farm_name    
