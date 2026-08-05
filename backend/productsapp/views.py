from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from .permissions import (
    IsFarmerOrReadOnly,
    IsOwnerOrAdmin,
)


class CategoryViewSet(viewsets.ModelViewSet):
    """
    Category CRUD Operations

    GET     -> Anyone
    POST    -> Farmer/Admin
    PUT     -> Farmer/Admin
    PATCH   -> Farmer/Admin
    DELETE  -> Farmer/Admin
    """

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsFarmerOrReadOnly]


class ProductViewSet(viewsets.ModelViewSet):
    """
    Product CRUD Operations
    """

    serializer_class = ProductSerializer

    queryset = Product.objects.select_related(
        "farmer",
        "category"
    ).all()

    # -----------------------------
    # Search, Filter & Ordering
    # -----------------------------
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]

    filterset_fields = [
        "category",
        "is_available",
    ]

    search_fields = [
        "name",
        "description",
    ]

    ordering_fields = [
        "price",
        "stock",
        "created_at",
    ]

    ordering = [
        "-created_at",
    ]

    # -----------------------------
    # Permissions
    # -----------------------------
    def get_permissions(self):

        # Public APIs
        if self.action in ["list", "retrieve"]:
            return []

        # Only Farmers/Admin can create
        if self.action == "create":
            return [IsFarmerOrReadOnly()]

        # Only Owner Farmer/Admin can Update/Delete
        return [IsOwnerOrAdmin()]

    # -----------------------------
    # Save Logged-in Farmer
    # -----------------------------
    def perform_create(self, serializer):
        serializer.save(
            farmer=self.request.user
        )

    # -----------------------------
    # Update Product
    # -----------------------------
    def perform_update(self, serializer):
        serializer.save()

    # -----------------------------
    # QuerySet Restrictions
    # -----------------------------
    def get_queryset(self):

        queryset = super().get_queryset()

        user = self.request.user

        # Anonymous users
        if not user.is_authenticated:
            return queryset.filter(
                is_available=True
            )

        # Admin can access everything
        if user.is_superuser:
            return queryset

        # Farmer can edit only their own products
        if (
            user.role == "farmer"
            and self.action in [
                "update",
                "partial_update",
                "destroy",
            ]
        ):
            return queryset.filter(
                farmer=user
            )

        return queryset