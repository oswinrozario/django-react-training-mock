from django.urls import path,include
from django.contrib import admin
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView, TokenVerifyView

router = DefaultRouter()

router.register('employee_api',views.EmployeeViewSet,
basename='employee')

urlpatterns = [
    path('',include(router.urls)),
    path('get-token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('refresh-token/',TokenRefreshView.as_view(),name='token_refresh'),
    path('verify-token/',TokenVerifyView.as_view(),name='token_verify'),
]

 