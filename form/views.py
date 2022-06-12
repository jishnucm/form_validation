from django.shortcuts import render

def signin(request):
    return render(request,'signin.html')
def login(request):
    return render(request,'login.html')

def home(request):
    return render(request,'home.html')    