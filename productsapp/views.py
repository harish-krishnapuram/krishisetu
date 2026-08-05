from django.shortcuts import render

# Create your views here
from rest_framework import generics
from rest_framework.permissions import (
    IsAuthenticated,
    IsAuthenticatedOrReadOnly
)
from django.db.models import Q

from .models import Product, Category
from .serializers import (
    ProductSerializer,
    CategorySerializer
)
from .permissions import (
    IsFarmer,
    IsOwnerFarmer
)
from accounts.models import FarmerProfile
from accounts.serializers import FarmerProfileSerializer

class ProductListCreateView(generics.ListCreateAPIView):

    serializer_class = ProductSerializer

    def get_queryset(self):

        queryset = Product.objects.all()

        category = self.request.query_params.get("category")
        search = self.request.query_params.get("search")
        organic = self.request.query_params.get("is_organic")
        farmer = self.request.query_params.get("farmer")

        if category:
            queryset = queryset.filter(category__id=category)

        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) |
                Q(description__icontains=search)
            )

        if organic:
            queryset = queryset.filter(
                is_organic=organic.lower() == "true"
            )

        if farmer:
            queryset = queryset.filter(farmer__id=farmer)

        return queryset.order_by("-created_at")

    def get_permissions(self):

        if self.request.method == "POST":
            return [IsAuthenticated(), IsFarmer()]

        return [IsAuthenticatedOrReadOnly()]

    def perform_create(self, serializer):

        serializer.save(farmer=self.request.user)



class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_permissions(self):

        if self.request.method in ["PUT", "PATCH", "DELETE"]:
            return [IsAuthenticated(), IsOwnerFarmer()]

        return [IsAuthenticatedOrReadOnly()]


class CategoryListView(generics.ListAPIView):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer    



class FarmerListView(generics.ListAPIView):

    serializer_class = FarmerProfileSerializer

    def get_queryset(self):

        return FarmerProfile.objects.filter(
            is_verified=True
        ).order_by("-rating")
