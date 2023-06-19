from django.contrib import admin

# Register your models here.
from .models import C2BPayments


class C2BPaymentsAdmin(admin.ModelAdmin):
    list_display = ("MSISDN", "TransAmount", "TransID", "TransTime")


admin.site.register(C2BPayments, C2BPaymentsAdmin)
