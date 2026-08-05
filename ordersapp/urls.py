from django.urls import path
from.views import OrderListCreateView, OrderTrackingView 

urlpatterns = [
   path('', OrderListCreateView.as_view(), name='orders'),
   path('<int:pk>/track/', OrderTrackingView.as_view(), name='order-track'),
]