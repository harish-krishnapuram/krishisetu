from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models


class UserRole(models.TextChoices):
    FARMER = "FARMER", "Farmer"
    BUYER = "BUYER", "Buyer"


class User(AbstractUser):
    """
    Custom User Model
    """

    email = models.EmailField(unique=True)

    role = models.CharField(
        max_length=20,
        choices=UserRole.choices,
        default=UserRole.BUYER,
    )

    phone_number = models.CharField(
        max_length=15,
        unique=True,
    )

    is_verified = models.BooleanField(default=False)

    profile_image = models.ImageField(
        upload_to="profile_images/",
        blank=True,
        null=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = [
        "username",
        "phone_number",
    ]

    class Meta:
        db_table = "users"
        ordering = ["-created_at"]

    def __str__(self):
        return self.email