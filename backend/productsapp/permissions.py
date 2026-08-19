from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsFarmerOrReadOnly(BasePermission):
    """
    Read:
        Everyone

    Write:
        Authenticated Farmers or Admin
    """

    def has_permission(self, request, view):

        # Anyone can view
        if request.method in SAFE_METHODS:
            return True

        # Farmer/Admin only
        return (
            request.user.is_authenticated
            and (
                request.user.role == "farmer"
                or request.user.is_superuser
            )
        )


class IsOwnerOrAdmin(BasePermission):
    """
    Update/Delete:
        Product Owner or Admin
    """

    def has_permission(self, request, view):
        return request.user.is_authenticated

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        if request.user.is_superuser:
            return True

        return obj.farmer == request.user


class IsAdminOnly(BasePermission):
    """
    Categories

    Read:
        Everyone

    Write:
        Admin only
    """

    def has_permission(self, request, view):

        if request.method in SAFE_METHODS:
            return True

        return (
            request.user.is_authenticated
            and request.user.is_superuser
        )