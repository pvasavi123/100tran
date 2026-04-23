from django.urls import path
from . import views

urlpatterns = [
    # path('upload/', upload_image),
    path('register/', views.register_user),
    path('verify/', views.login_user),
    path("create-order/", views.create_order),
    path("verifys/", views.verify_payment),
    path("contact/", views.contact_api),
    path("add_college/", views.add_college),
    path("colleges/", views.get_colleges),
    path("submit/", views.submit_application),

path("applications/", views.get_applications),
path("send-notification/", views.send_notification),
path('update-status/<str:id>/', views.update_status),

    
    
    
]