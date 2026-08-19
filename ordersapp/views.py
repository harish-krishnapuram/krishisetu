from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Order, OrderTrackingStep
from .serializers import (
    OrderSerializer,
    OrderTrackingStepSerializer
)


class OrderListCreateView(generics.ListCreateAPIView):

    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        user = self.request.user

        # Buyer sees only their own orders
        if user.role == "buyer":
            return Order.objects.filter(
                buyer=user
            ).order_by("-created_at")

        # Farmer/Admin (temporary)
        return Order.objects.all().order_by("-created_at")


class OrderTrackingView(generics.RetrieveAPIView):

    serializer_class = OrderTrackingStepSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):

        tracking_steps = OrderTrackingStep.objects.filter(
            order_id=pk
        ).order_by("id")

        serializer = OrderTrackingStepSerializer(
            tracking_steps,
            many=True
        )

        return Response(serializer.data)    