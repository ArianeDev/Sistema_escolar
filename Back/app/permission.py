from rest_framework.permissions import BasePermission

# class IsGestor(BasePermission):
#     def has_permission(self, request, view):
#         return request.user.is_authenticated and request.user.tipo_usuario == 'G'
    
class IsGestor(BasePermission):
    def has_permission(self, request, view):
        user = request.user
        print(f"User: {user} - Authenticated? {user.is_authenticated} - tipo_usuario: {getattr(user, 'tipo_usuario', None)}")
        return user.is_authenticated and getattr(user, 'tipo_usuario', None) == 'G'

    
class IsProfessor(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.tipo_usuario == 'P'