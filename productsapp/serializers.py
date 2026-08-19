from rest_framework import serializers
from .models import Category, Product, ProductReview
from accounts.models import User


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"


class ProductReviewSerializer(serializers.ModelSerializer):

    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = ProductReview
        fields = [
            "id",
            "user",
            "rating",
            "comment",
            "created_at",
        ]


class ProductSerializer(serializers.ModelSerializer):

    category_name = serializers.CharField(
        source="category.name",
        read_only=True
    )

    farmer_name = serializers.CharField(
        source="farmer.username",
        read_only=True
    )

    reviews = ProductReviewSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Product

        fields = [
            "id",
            "farmer",
            "farmer_name",
            "category",
            "category_name",
            "name",
            "price",
            "original_price",
            "discount_percentage",
            "unit",
            "unit_options",
            "stock",
            "is_organic",
            "is_direct_from_farmer",
            "is_featured",
            "is_today_deal",
            "deal_timer_hours",
            "harvest_date",
            "image",
            "gallery",
            "description",
            "specifications",
            "rating",
            "rating_count",
            "created_at",
            "reviews",
        ]

        read_only_fields = [
            "rating",
            "rating_count",
            "created_at",
        ]