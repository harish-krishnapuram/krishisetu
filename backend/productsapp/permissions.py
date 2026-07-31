from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsFarmerOrReadOnly(BasePermission):
    """
    Allows read-only access to everyone.
    Allows write access only to authenticated farmers or admins.
    """

    def has_permission(self, request, view):
        # Allow GET, HEAD and OPTIONS requests for everyone
        if request.method in SAFE_METHODS:
            return True

        # Allow only authenticated farmers or admins
        return (
            request.user.is_authenticated
            and (
                request.user.role == "farmer"
                or request.user.is_superuser
            )
        )


class IsOwnerOrAdmin(BasePermission):
    """
    Object-level permission.

    Read:
        Everyone.

    Update/Delete:
        Product owner or admin only.
    """

    def has_object_permission(self, request, view, obj):
        # Allow read operations
        if request.method in SAFE_METHODS:
            return True

        # Admin has full access
        if request.user.is_superuser:
            return True

        # Product owner has access
        return obj.farmer == request.user


class IsAdminOnly(BasePermission):
    """
    Allows read access to everyone.
    Allows write access only to admins.
    Useful for Category management.
    """

    def has_permission(self, request, view):
        # Public can view categories
        if request.method in SAFE_METHODS:
            return True

        # Only admin can create/update/delete categories
        return (
            request.user.is_authenticated
            and request.user.is_superuser
        )