from rest_framework import serializers

from ..models import C2BPayments


class C2BPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = C2BPayments
        fields = (
            "id",
            "TransactionType",
            "TransID",
            "TransTime",
            "TransAmount",
            "BusinessShortCode",
            "BillRefNumber",
            "InvoiceNumber",
            "OrgAccountBalance",
            "ThirdPartyTransID",
            "MSISDN",
            "FirstName",
            "MiddleName",
            "LastName",
        )
