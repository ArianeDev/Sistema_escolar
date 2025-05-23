from django.urls import path
from .views import (
    LoginView, 
    Professores_GET_POST, Professor_GET_PUT_PATCH_DELETE,
    Disciplina_GET_POST, Disciplina_GET_PUT_PATCH_DELETE,
    Ambiente_GET_POST, Ambiente_GET_PUT_PATCH_DELETE)

urlpatterns = [
    path('login/', view=LoginView.as_view()),
    path('professor/', view=Professores_GET_POST.as_view()),
    path('professor/<int:pk>', view=Professor_GET_PUT_PATCH_DELETE.as_view()),
    path('disciplina/', view=Disciplina_GET_POST.as_view()),
    path('disciplina/<int:pk>', view=Disciplina_GET_PUT_PATCH_DELETE.as_view()),
    path('ambiente/', view=Ambiente_GET_POST.as_view()),
    path('ambiente/<int:pk>', view=Ambiente_GET_PUT_PATCH_DELETE.as_view()),
]