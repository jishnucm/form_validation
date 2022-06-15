from django.shortcuts import render,redirect
from . models import Student

def signin(request):
    if request.method=='POST':
        fname=request.POST['fname']
        sname=request.POST['sname'] 
        email=request.POST['email']
        phone=request.POST['phone'] 
        password1=request.POST['password1']  
        password2=request.POST['password2'] 
        object2=Student(fname=fname,sname=sname,email=email,phone=phone,password1=password1,password2=password2)
        object2.save() 
        return redirect('login')

    return render(request,'signin.html')


def login(request):
    msg=''
    if request.method=='POST':
        username=request.POST['email']
        password=request.POST['password']
        try:
            data=Student.objects.get(email=username,password1=password)
            return redirect('home')
        except:
            msg='incorrect username or password'
                
    return render(request,'login.html',{'msg':msg})

def home(request):
    return render(request,'home.html')    