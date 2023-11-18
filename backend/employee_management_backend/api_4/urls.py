from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('employee_api',views.EmployeeViewSet,
basename='employee')

urlpatterns = [
    path('',include(router.urls)),
]

 