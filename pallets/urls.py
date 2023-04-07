from django.urls import path

from . import views

app_name = "pallets"

urlpatterns = [
    path('', views.homepage, name='homepage')
]