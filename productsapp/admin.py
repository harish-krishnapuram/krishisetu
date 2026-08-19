from django.contrib import admin
from .models import Category, Product, ProductReview


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'item_count',
        'badge',
    )

    prepopulated_fields = {
        'slug': ('name',)
    }


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'farmer',
        'category',
        'price',
        'stock',
        'is_featured',
        'is_today_deal',
    )

    list_filter = (
        'category',
        'is_organic',
        'is_featured',
    )

    search_fields = (
        'name',
        'description',
    )


@admin.register(ProductReview)
class ProductReviewAdmin(admin.ModelAdmin):
    list_display = (
        'product',
        'user',
        'rating',
        'created_at',
    )