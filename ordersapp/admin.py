from django.contrib import admin
from .models import Order, OrderItem, OrderTrackingStep


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0


class OrderTrackingInline(admin.TabularInline):
    model = OrderTrackingStep
    extra = 0


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'order_number',
        'buyer',
        'total_amount',
        'payment_status',
        'order_status',
        'created_at',
    )

    inlines = [
        OrderItemInline,
        OrderTrackingInline,
    ]


admin.site.register(OrderItem)
admin.site.register(OrderTrackingStep)