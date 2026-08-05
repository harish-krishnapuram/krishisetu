from django.urls import path
from .views import (
    CartItemListCreateView,
    WishlistListCreateView,
    CartItemDeleteView,
    WishlistDeleteView,
)

urlpatterns = [
    path('', CartItemListCreateView.as_view(), name='cart'),
    path('wishlist/', WishlistListCreateView.as_view(), name='wishlist'),
    path('<int:pk>/delete/', CartItemDeleteView.as_view(), name='cart-delete'),
    path('wishlist/<int:pk>/delete/', WishlistDeleteView.as_view(), name='wishlist-delete'),
]