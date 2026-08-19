from rest_framework import serializers
from .models import CartItem, WishlistItem
from productsapp.serializers import ProductSerializer


class CartItemSerializer(serializers.ModelSerializer):

    product = ProductSerializer(read_only=True)

    class Meta:
        model = CartItem
        fields = [
            "id",
            "user",
            "product",
            "quantity",
            "selected_unit",
        ]

        read_only_fields = [
            "user",
        ]


class WishlistItemSerializer(serializers.ModelSerializer):

    product = ProductSerializer(read_only=True)

    class Meta:
        model = WishlistItem
        fields = [
            "id",
            "user",
            "product",
        ]

        read_only_fields = [
            "user",
        ]