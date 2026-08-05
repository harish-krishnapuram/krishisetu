from django.shortcuts import render

# Create your views here.
from django.db.models import Sum, Count
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from ordersapp.models import Order
from productsapp.models import Product
from accounts.models import User


class DashboardAnalyticsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        total_revenue = (
            Order.objects.aggregate(
                total=Sum("total_amount")
            )["total"] or 0
        )

        total_orders = Order.objects.count()

        total_products = Product.objects.count()

        total_farmers = User.objects.filter(
            role="farmer"
        ).count()

        return Response({

            "total_revenue": total_revenue,

            "total_orders": total_orders,

            "total_products": total_products,

            "total_farmers": total_farmers

        })
