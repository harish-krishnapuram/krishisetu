from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import filters, viewsets
from rest_framework.permissions import AllowAny

from .models import Category, Product
from .serializers import (
    CategorySerializer,
    ProductSerializer,
)

from .permissions import (
    IsAdminOnly,
    IsFarmerOrReadOnly,
    IsOwnerOrAdmin,
)


class CategoryViewSet(viewsets.ModelViewSet):
    """
    Category CRUD
    """

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminOnly]


class ProductViewSet(viewsets.ModelViewSet):
    """
    Product CRUD APIs
    """

    serializer_class = ProductSerializer

    queryset = Product.objects.select_related(
        "farmer",
        "category",
    ).all()

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

    # ----------------------------
    # Permissions
    # ----------------------------

    def get_permissions(self):

        # Public APIs
        if self.action in ["list", "retrieve"]:
            return [AllowAny()]

        # Create Product
        if self.action == "create":
            return [IsFarmerOrReadOnly()]

        # Update/Delete Product
        return [IsOwnerOrAdmin()]

    # ----------------------------
    # Queryset
    # ----------------------------

    def get_queryset(self):

        queryset = super().get_queryset()

        user = self.request.user

        # Anonymous users can only see available products
        if not user.is_authenticated:
            return queryset.filter(
                is_available=True
            )

        # Admin can access everything
        if user.is_superuser:
            return queryset

        # Farmer updating/deleting
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

    # ----------------------------
    # Create Product
    # ----------------------------

    def perform_create(self, serializer):
        serializer.save(
            farmer=self.request.user
        )

    # ----------------------------
    # Update Product
    # ----------------------------

    def perform_update(self, serializer):
        serializer.save()