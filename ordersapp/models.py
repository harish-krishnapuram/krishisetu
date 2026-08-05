from django.db import models

# Create your models here.
from accounts.models import User
from productsapp.models import Product


class Order(models.Model):

    PAYMENT_METHOD_CHOICES = (
        ('UPI (Google Pay)', 'UPI (Google Pay)'),
        ('Credit Card', 'Credit Card'),
        ('Cash on Delivery', 'Cash on Delivery'),
    )

    PAYMENT_STATUS_CHOICES = (
        ('Paid', 'Paid'),
        ('Pending', 'Pending'),
        ('Failed', 'Failed'),
    )

    ORDER_STATUS_CHOICES = (
        ('Placed', 'Order Placed'),
        ('Harvested', 'Harvested & Packed'),
        ('Dispatched', 'Dispatched from Farm'),
        ('In Transit', 'Out for Delivery'),
        ('Delivered', 'Delivered'),
        ('Cancelled', 'Cancelled'),
    )

    order_number = models.CharField(
        max_length=50,
        unique=True
    )

    buyer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='orders'
    )

    farmer_name = models.CharField(
        max_length=100
    )

    delivery_address = models.TextField()

    customer_phone = models.CharField(
        max_length=20
    )

    subtotal = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    discount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )

    delivery_fee = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )

    total_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    payment_method = models.CharField(
        max_length=50,
        choices=PAYMENT_METHOD_CHOICES,
        default='UPI (Google Pay)'
    )

    payment_status = models.CharField(
        max_length=20,
        choices=PAYMENT_STATUS_CHOICES,
        default='Paid'
    )

    order_status = models.CharField(
        max_length=30,
        choices=ORDER_STATUS_CHOICES,
        default='In Transit'
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.order_number


class OrderItem(models.Model):

    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name='items'
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.SET_NULL,
        null=True
    )

    product_name = models.CharField(
        max_length=200
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    quantity = models.IntegerField(
        default=1
    )

    unit = models.CharField(
        max_length=20,
        default='kg'
    )

    def __str__(self):
        return self.product_name


class OrderTrackingStep(models.Model):

    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name='tracking_steps'
    )

    status_label = models.CharField(
        max_length=100
    )

    timestamp_info = models.CharField(
        max_length=100
    )

    is_completed = models.BooleanField(
        default=False
    )

    def __str__(self):
        return f"{self.order.order_number} - {self.status_label}"
