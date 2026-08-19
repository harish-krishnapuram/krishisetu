from django.db import models

# Create your models here.
from accounts.models import User


class Category(models.Model):

    name = models.CharField(max_length=100)

    slug = models.SlugField(unique=True)

    icon = models.CharField(
        max_length=50,
        default='bi-egg-fried'
    )

    image = models.ImageField(
        upload_to='categories/'
    )

    badge = models.CharField(
        max_length=50,
        blank=True
    )

    description = models.TextField(
        blank=True
    )

    item_count = models.IntegerField(
        default=0
    )

    def __str__(self):
        return self.name


class Product(models.Model):

    UNIT_CHOICES = (
        ('kg', 'Per Kg'),
        ('dozen', 'Per Dozen'),
        ('bottle', 'Per Bottle'),
        ('liter', 'Per Liter'),
        ('quintal', 'Per Quintal'),
    )

    farmer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='products'
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='products'
    )

    name = models.CharField(
        max_length=200
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    original_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True
    )

    discount_percentage = models.IntegerField(
        default=0
    )

    unit = models.CharField(
        max_length=20,
        choices=UNIT_CHOICES,
        default='kg'
    )

    unit_options = models.JSONField(
        default=list
    )

    stock = models.IntegerField(
        default=100
    )

    is_organic = models.BooleanField(
        default=True
    )

    is_direct_from_farmer = models.BooleanField(
        default=True
    )

    is_featured = models.BooleanField(
        default=False
    )

    is_today_deal = models.BooleanField(
        default=False
    )

    deal_timer_hours = models.IntegerField(
        default=12,
        null=True,
        blank=True
    )

    harvest_date = models.CharField(
        max_length=100,
        default='Today (Morning 5:30 AM)'
    )

    image = models.ImageField(
        upload_to='products/'
    )

    gallery = models.JSONField(
        default=list
    )

    description = models.TextField()

    specifications = models.JSONField(
        default=dict
    )

    rating = models.DecimalField(
        max_digits=3,
        decimal_places=2,
        default=5.00
    )

    rating_count = models.IntegerField(
        default=1
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name


class ProductReview(models.Model):

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name='reviews'
    )

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='product_reviews'
    )

    rating = models.IntegerField(
        default=5
    )

    comment = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.user.username} - {self.product.name}"