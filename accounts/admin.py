

# Register your models here
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, FarmerProfile


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = (
        'username',
        'email',
        'role',
        'phone',
        'is_staff',
    )

    list_filter = (
        'role',
        'is_staff',
        'is_superuser',
    )

    search_fields = (
        'username',
        'email',
        'phone',
    )


@admin.register(FarmerProfile)
class FarmerProfileAdmin(admin.ModelAdmin):
    list_display = (
        'farm_name',
        'user',
        'district',
        'state',
        'rating',
        'is_verified',
    )

    search_fields = (
        'farm_name',
        'district',
    )

    list_filter = (
        'state',
        'is_verified',
    )