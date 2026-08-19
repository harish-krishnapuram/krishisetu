from rest_framework import serializers
from .models import Order, OrderItem, OrderTrackingStep


class OrderTrackingStepSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderTrackingStep
        fields = "__all__"


class OrderItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderItem
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):

    items = OrderItemSerializer(
        many=True,
        read_only=True
    )

    tracking_steps = OrderTrackingStepSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Order

        fields = [
            "id",
            "order_number",
            "buyer",
            "farmer_name",
            "delivery_address",
            "customer_phone",
            "subtotal",
            "discount",
            "delivery_fee",
            "total_amount",
            "payment_method",
            "payment_status",
            "order_status",
            "created_at",
            "items",
            "tracking_steps",
        ]

        read_only_fields = [
            "order_number",
            "created_at",
        ]