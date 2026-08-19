from django.db import models

# Create your models here.

from accounts.models import User
from productsapp.models import Product


class CartItem(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='cart_items'
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )

    quantity = models.IntegerField(
        default=1
    )

    selected_unit = models.CharField(
        max_length=20,
        default='kg'
    )

    def __str__(self):
        return f"{self.user.username} - {self.product.name}"


class WishlistItem(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='wishlist_items'
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.user.username} - {self.product.name}"
