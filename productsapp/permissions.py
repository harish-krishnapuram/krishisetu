from rest_framework.permissions import BasePermission


class IsFarmer(BasePermission):
    """
    Allows access only to users with the farmer role.
    """

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated and
            request.user.role == "farmer"
        )


class IsAdmin(BasePermission):
    """
    Allows access only to admin users.
    """

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated and
            request.user.role == "admin"
        )


class IsOwnerFarmer(BasePermission):
    """
    Allows only the farmer who owns the product
    or an admin to edit/delete it.
    """

    def has_object_permission(self, request, view, obj):

        if request.user.role == "admin":
            return True

        return obj.farmer == request.user