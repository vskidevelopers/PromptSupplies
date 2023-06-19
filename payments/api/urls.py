from django.contrib import admin
from django.urls import path

from .views import C2BValidationAPIView, C2BConfirmationAPIView

urlpatterns = [
    path("c2b-validation/", C2BValidationAPIView.as_view(), name="c2b-validation"),
    path(
        "c2b-confirmation/", C2BConfirmationAPIView.as_view(), name="c2b-confirmation"
    ),
]
