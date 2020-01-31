from django.urls import path

from salary.views import GetMySalary, RetrieveUpdateDestroySalary

urlpatterns = [
    path('', GetMySalary.as_view(), name="my-salary"),
    path('<int:id>/', RetrieveUpdateDestroySalary.as_view(), name='update-salary'),
]