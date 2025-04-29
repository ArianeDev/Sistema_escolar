from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import permissions

from .serializer import LoginSerializer, UsuarioSerialier, DisciplinaSerializer, AmbienteSerializer
from .models import Usuario, Disciplina, Ambiente
from .permission import IsGestor, IsProfessor

class LoginView(TokenObtainPairView):
    serializer_class = LoginSerializer

# Professores

class Professores_GET_POST(ListCreateAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = UsuarioSerialier
    permission_classes = [IsGestor]

class Professor_GET_PUT_PATCH_DELETE(RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerialier
    permission_classes = [IsGestor]

# Disciplina

class Disciplina_GET_POST(ListCreateAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.IsAuthenticated()]
        
        return [IsGestor()]
    
class Disciplina_GET_PUT_PATCH_DELETE(RetrieveUpdateDestroyAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsGestor]
    lookup_field = 'pk'

# Ambiente

class Ambiente_GET_POST(ListCreateAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.IsAuthenticated()]
        
        return [IsGestor()]
    
class Ambiente_GET_PUT_PATCH_DELETE(RetrieveUpdateDestroyAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    permission_classes = [IsGestor]
    lookup_field = 'pk'