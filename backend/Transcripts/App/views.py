from rest_framework.decorators import api_view
from rest_framework.response import Response
# from .models import ImageUpload
from .serializers import ImageUploadSerializer
# from PIL import Image, UnidentifiedImageError
# import io
# import uuid
# import subprocess
# import os
# from django.core.files.base import ContentFile
from django.conf import settings

# @api_view(['POST'])
# def upload_image(request):
#     file = request.FILES.get('image')

#     if not file:
#         return Response({'error': 'No file provided'}, status=400)

#     file_type = file.content_type
#     original_kb = file.size / 1024

#     # =====================================
#     # 🖼 IMAGE HANDLING
#     # =====================================
#     if file_type.startswith('image/'):
#         try:
#             img = Image.open(file)

#             if img.mode in ("RGBA", "P"):
#                 img = img.convert("RGB")

#             # Resize (performance boost)
#             img.thumbnail((1200, 1200))

#             # ✅ If <= 1MB → skip compression
#             if original_kb <= 1024:
#                 serializer = ImageUploadSerializer(data={'image': file})

#                 if serializer.is_valid():
#                     instance = serializer.save()

#                     return Response({
#                         "type": "image",
#                         "message": "Uploaded without compression",
#                         "original_kb": round(original_kb, 2),
#                         "compressed": False,
#                         "url": instance.image.url
#                     }, status=201)

#                 return Response(serializer.errors, status=400)

#             # 🔥 Compress (binary search)
#             target_kb = 100
#             min_q, max_q = 10, 95
#             best_output = None

#             while min_q <= max_q:
#                 mid = (min_q + max_q) // 2

#                 temp = io.BytesIO()
#                 img.save(temp, format='WEBP', quality=mid, optimize=True)

#                 size_kb = temp.tell() / 1024

#                 if size_kb <= target_kb:
#                     best_output = temp
#                     min_q = mid + 1
#                 else:
#                     max_q = mid - 1

#             if best_output is None:
#                 best_output = temp

#             best_output.seek(0)

#             filename = f"{uuid.uuid4()}.webp"
#             compressed_file = ContentFile(best_output.read(), name=filename)

#             serializer = ImageUploadSerializer(data={'image': compressed_file})

#             if serializer.is_valid():
#                 instance = serializer.save()

#                 compressed_kb = best_output.tell() / 1024

#                 return Response({
#                     "type": "image",
#                     "message": "Compressed & uploaded",
#                     "original_kb": round(original_kb, 2),
#                     "compressed_kb": round(compressed_kb, 2),
#                     "reduction_percent": round(
#                         ((original_kb - compressed_kb) / original_kb) * 100, 2
#                     ),
#                     "url": instance.image.url
#                 }, status=201)

#             return Response(serializer.errors, status=400)

#         except UnidentifiedImageError:
#             return Response({'error': 'Invalid image'}, status=400)

#     # =====================================
#     # 📄 PDF HANDLING
#     # =====================================
#     elif file_type == "application/pdf":

#         input_path = f"temp_{uuid.uuid4()}.pdf"
#         output_path = f"compressed_{uuid.uuid4()}.pdf"

#         # Save temp PDF
#         with open(input_path, 'wb+') as f:
#             for chunk in file.chunks():
#                 f.write(chunk)

#         try:
#             subprocess.run([
#                 "gs",
#                 "-sDEVICE=pdfwrite",
#                 "-dCompatibilityLevel=1.4",
#                 "-dPDFSETTINGS=/ebook",
#                 "-dNOPAUSE",
#                 "-dQUIET",
#                 "-dBATCH",
#                 f"-sOutputFile={output_path}",
#                 input_path
#             ], check=True)

#             compressed_kb = os.path.getsize(output_path) / 1024

#             with open(output_path, 'rb') as f:
#                 compressed_file = ContentFile(f.read(), name=f"{uuid.uuid4()}.pdf")

#             serializer = ImageUploadSerializer(data={'image': compressed_file})

#             if serializer.is_valid():
#                 instance = serializer.save()

#                 return Response({
#                     "type": "pdf",
#                     "message": "PDF compressed & uploaded",
#                     "original_kb": round(original_kb, 2),
#                     "compressed_kb": round(compressed_kb, 2),
#                     "reduction_percent": round(
#                         ((original_kb - compressed_kb) / original_kb) * 100, 2
#                     ),
#                     "url": instance.image.url
#                 }, status=201)

#             return Response(serializer.errors, status=400)

#         finally:
#             if os.path.exists(input_path):
#                 os.remove(input_path)
#             if os.path.exists(output_path):
#                 os.remove(output_path)

#     # =====================================
#     # ❌ INVALID FILE
#     # =====================================
#     else:
#         return Response({'error': 'Only images and PDFs allowed'}, status=400)



from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer

@api_view(["POST"])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()
        return Response({
            "message": "Registered successfully",
        }, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Users,Admin


@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    # 🔹 1. Check Admin
    admin = Admin.objects.filter(email=email).first()
    if admin:
        if password == admin.password:
            return Response({
                "message": "Admin Login successful",
                "type": "admin",
                "data": {
                    "email": admin.email
                }
            }, status=200)
        else:
            return Response({"error": "Invalid password"}, status=401)
    # 🔹 2. Check Normal User
    user = Users.objects.filter(email=email).first()
    if user:
        if password == user.password:
            return Response({
                "message": "User Login successful",
            }, status=200)
        else:
            return Response({"error": "Invalid password"}, status=401)
    return Response({"error": "User not found"}, status=404)



from django.http import JsonResponse

import json
import json
import razorpay
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def create_order(request):
    if request.method == "POST":
        data = json.loads(request.body)

        amount = int(data.get("amount")) * 100  # paise

        client = razorpay.Client(
            auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
        )

        order = client.order.create({
            "amount": amount,
            "currency": "INR",
            "payment_capture": 1,

            # ✅ ADD THESE
            "receipt": "order_rcptid_11",
            "notes": {
                "user": "test_user",
                "service": "document_verification"
            }
        })

        return JsonResponse({
            "order_id": order["id"],
            "amount": order["amount"]
        })
@csrf_exempt
def verify_payment(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            razorpay_order_id = data.get("razorpay_order_id")
            razorpay_payment_id = data.get("razorpay_payment_id")
            razorpay_signature = data.get("razorpay_signature")

            # ❗ IMPORTANT: validate input
            if not razorpay_order_id or not razorpay_payment_id or not razorpay_signature:
                return JsonResponse(
                    {"status": "failure", "error": "Missing payment fields"},
                    status=400
                )

            client = razorpay.Client(
                auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
            )

            params_dict = {
                "razorpay_order_id": razorpay_order_id,
                "razorpay_payment_id": razorpay_payment_id,
                "razorpay_signature": razorpay_signature,
            }

            # ✅ VERIFY SIGNATURE
            client.utility.verify_payment_signature(params_dict)

            # ✅ SUCCESS (SAVE TO DB HERE)
            print("✅ Payment Verified:", params_dict)

            return JsonResponse({"status": "success"})

        except razorpay.errors.SignatureVerificationError:
            return JsonResponse(
                {"status": "failure", "error": "Signature mismatch"},
                status=400
            )

        except Exception as e:
            return JsonResponse(
                {"status": "failure", "error": str(e)},
                status=500
            )


from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core.mail import send_mail
import json

@csrf_exempt
def contact_api(request):
    if request.method == "POST":
        data = json.loads(request.body)

        name = data.get("name")
        email = data.get("email")
        subject = data.get("subject")
        message = data.get("message")

        full_message = f"""
New Contact Form Message:

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
"""

        send_mail(
            subject=f"Contact Form: {subject}",
            message=full_message,
            from_email=email,
            recipient_list=["admin@100transcripts.com"],
            fail_silently=False,
        )

        return JsonResponse({"message": "Email sent successfully"})

    return JsonResponse({"error": "Invalid request"}, status=400)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import College
from .serializers import CollegeSerializer


@api_view(['POST'])
def add_college(request):
    serializer = CollegeSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import College
from .serializers import CollegeSerializer


@api_view(['GET'])
def get_colleges(request):
    colleges = College.objects.all().order_by('-id')
    serializer = CollegeSerializer(colleges, many=True)
    return Response(serializer.data)



import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Application, Degree, Document
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Application, Degree, Document
import json


@api_view(['POST'])
def submit_application(request):
    try:
        data = request.POST

        # ✅ Basic validation (avoid NULL crash)
        required_fields = ["fullName", "email", "phone", "altPhone", "requirement"]
        for field in required_fields:
            if not data.get(field):
                return Response({"error": f"{field} is required"}, status=400)

        # ✅ Create Application safely
        app = Application.objects.create(
            fullName=data.get("fullName", "").strip(),
            email=data.get("email", "").strip(),
            phone=data.get("phone", "").strip(),
            altPhone=data.get("altPhone", "").strip(),
            requirement=data.get("requirement", "").strip(),
            referenceNumber=data.get("referenceNumber", "").strip() or None,
            termsAccepted=str(data.get("termsAccepted")).lower() == "true",
            specialCondition=str(data.get("specialCondition")).lower() == "true",
        )

        # ✅ Degrees (OPTIONAL + SAFE)
        degrees = []
        degrees_raw = data.get("degrees")

        if degrees_raw:
            try:
                degrees = json.loads(degrees_raw)
            except json.JSONDecodeError:
                degrees = []

        for d in degrees:
            # skip empty degree rows
            if not (d.get("university") or d.get("college")):
                continue

            Degree.objects.create(
                application=app,
                type=d.get("type") or None,
                university=d.get("university") or "",
                course=d.get("course") or None,
                college=d.get("college") or "",
            )

        # ✅ Documents (OPTIONAL)
        for key, file in request.FILES.items():
            Document.objects.create(
                application=app,
                doc_type=key,
                name=file.name,
                file=file
            )

        return Response({
            "message": "Submitted Successfully",
            "application_id": app.id
        }, status=201)

    except Exception as e:
        print("❌ ERROR:", str(e))  # important for debugging
        return Response({"error": str(e)}, status=500)
    
@api_view(['GET'])
def get_applications(request):
    apps = Application.objects.all().order_by('-id')

    data = []
    for app in apps:
        data.append({
            "id": f"REQ-{app.id:03}",
            "name": app.fullName,
            "email": app.email,
            "phone": app.phone,
            "status": "Pending",  # you can make dynamic later
            "documents": "Uploaded",
            "payment": "Paid",
            "university": app.degrees.first().university if app.degrees.exists() else "N/A",
            "type": app.requirement,
            "date": app.created_at.strftime("%Y-%m-%d"),
            "district": "N/A",
            "documentsList": [
                {"name": doc.name, "status": "Uploaded", "url": doc.file.url}
                for doc in app.documents.all()
            ]
        })

    return Response(data)

from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def send_notification(request):
    try:
        email = request.data.get("email")
        subject = request.data.get("subject")
        message = request.data.get("message")

        if not email or not subject or not message:
            return Response({"error": "All fields required"}, status=400)

        # ✅ SEND EMAIL
        send_mail(
            subject,
            message,
            "yourgmail@gmail.com",  # sender
            [email],                # receiver
            fail_silently=False,
        )

        return Response({"message": "Email sent successfully ✅"})

    except Exception as e:
        print("ERROR:", str(e))
        return Response({"error": str(e)}, status=500)
    
from rest_framework.response import Response
from .models import Application

def update_status(request, id):
    data = json.loads(request.body)

    try:
        app = Application.objects.get(id=id)  # ❌ only if id is string field
    except Application.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)

    app.status = data.get("status")
    app.save()

    return JsonResponse({"message": "Updated"})