from django.db import models

class ImageUpload(models.Model):
    image = models.ImageField(upload_to='compressed/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.image.name

from django.db import models

class Users(models.Model):
   
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=10)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.email
    
class Admin(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.TextField()
     
    def __str__(self):
        return self.email
from django.db import models

class College(models.Model):
    REG_TYPE_CHOICES = [
        ('Private', 'Private'),
        ('Government', 'Government'),
        ('Autonomous', 'Autonomous'),
        ('University', 'University'),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=255)
    district = models.CharField(max_length=255)
    pincode = models.CharField(max_length=10)
    regType = models.CharField(max_length=20, choices=REG_TYPE_CHOICES)
    

    def __str__(self):
        return self.name


from django.db import models

class Application(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Verified', 'Verified'),
        ('Rejected', 'Rejected'),
    ]
    fullName = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    altPhone = models.CharField(max_length=15)
    requirement = models.CharField(max_length=50)
    referenceNumber = models.CharField(max_length=100, blank=True, null=True)

    termsAccepted = models.BooleanField(default=False)
    specialCondition = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='Pending'
    )

    def __str__(self):
        return self.fullName


class Degree(models.Model):
    application = models.ForeignKey(Application, on_delete=models.CASCADE, related_name="degrees")
    type = models.CharField(max_length=100, blank=True, null=True)
    university = models.CharField(max_length=255)
    course = models.CharField(max_length=255, blank=True, null=True)
    college = models.CharField(max_length=255)

    def __str__(self):
        return self.university


class Document(models.Model):
    application = models.ForeignKey(Application, on_delete=models.CASCADE, related_name="documents")
    doc_type = models.CharField(max_length=100)  # cmm / degree / internship
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to="documents/")

    def __str__(self):
        return self.name