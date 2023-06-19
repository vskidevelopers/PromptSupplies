from rest_framework.generics import CreateAPIView

from rest_framework.permissions import AllowAny
from ..models import C2BPayments
from .serializers import C2BPaymentSerializer


class C2BValidationAPIView(CreateAPIView):
    queryset = C2BPayments.objects.all()
    serializer_class = C2BPaymentSerializer
    permission_classes = [AllowAny]

    # def create(self, request):
    #     print(request.data, "this is request.data in Validation")

    #     from rest_framework.response import Response
    #     my_headers = self.get_success_headers(request.data)

    #     return Response({
    #         "ResultCode": 1,
    #         "ResponseDesc":"Failed!"
    #     },
    #     headers=my_headers)


class C2BConfirmationAPIView(CreateAPIView):
    queryset = C2BPayments.objects.all()
    serializer_class = C2BPaymentSerializer
    permission_classes = [AllowAny]

    # def create(self, request):
    #     print(request.data, "this is request.data in Confirmation")

    #     """
    #     {'TransactionType': 'Pay Bill',
    #     'TransID': 'NCQ61H8BK4',
    #      'TransTime': '20190326210441',
    #       'TransAmount': '2.00',
    #       'BusinessShortCode': '601445',
    #        'BillRefNumber': '12345678',
    #        'InvoiceNumber': '',
    #        'OrgAccountBalance': '18.00',
    #        'ThirdPartyTransID': '',
    #        'MSISDN': '254708374149',
    #        'FirstName': 'John',
    #        'MiddleName': 'J.',
    #        'LastName': 'Doe'
    #        }
    #        this is request.data in Confirmation
    #        """

    #     from rest_framework.response import Response

    #     return Response({"ResultDesc": 0})
