from django.db import models
 
class Student(models.Model):
    fname=models.CharField(max_length=25) 
    sname=models.CharField(max_length=25)
    email=models.EmailField()
    phone=models.TextField()  
    password1=models.TextField()
    password2=models.TextField() 


