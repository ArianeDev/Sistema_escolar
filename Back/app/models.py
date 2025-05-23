from django.db import models
from django.contrib.auth.models import AbstractUser

PERIODO = [
    ('M', 'Manhã'),
    ('T', 'Tarde'),
    ('N', 'Noite')
]

TIPO_USUARIO = [
    ('P', 'Professor'),
    ('G', 'Gestor')
]

class Usuario(AbstractUser):
    ni = models.CharField(max_length=15, unique=True)
    telefone = models.CharField(max_length=14)
    dt_nascimento = models.DateField(blank=True, null=True)
    dt_contratacao = models.DateField(blank=True, null=True)
    tipo_usuario = models.CharField(max_length=20, choices=TIPO_USUARIO)

    # Evitar conflito com o Django
    groups = models.ManyToManyField(
        "auth.Group", related_name="usuario_groups"
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission", related_name="usuario_permissions"
    )

class Disciplina(models.Model):
    nome = models.CharField(max_length=100)
    curso = models.CharField(max_length=100)
    carga_horaria = models.PositiveIntegerField()
    decricao = models.CharField(max_length=255)
    professor_responsavel = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class Ambiente(models.Model):
    dt_inicio = models.DateField()
    dt_termino = models.DateField()
    periodo = models.CharField(max_length=10, choices=PERIODO)
    sala_reservada = models.CharField(max_length=50)
    professor_responsavel = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    disciplina = models.ForeignKey(Disciplina, on_delete=models.CASCADE)