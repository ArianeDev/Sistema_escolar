from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario, Disciplina, Ambiente

class UsuarioAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        ('Novos campos', {'fields': ('ni', 'telefone', 'dt_nascimento', 'dt_contratacao', 'tipo_usuario', )}),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('ni', 'telefone', 'dt_nascimento', 'dt_contratacao', 'tipo_usuario', )}),
    )

admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Disciplina)
admin.site.register(Ambiente)