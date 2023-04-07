from django.shortcuts import render
from .models import Question, Choice


def homepage(request):
    return render(request, 'index.html')



