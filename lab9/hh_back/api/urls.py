from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.all_companies),  # компании
    path('companies/<int:id>/', views.one_company),  # одна компания
    path('companies/<int:id>/vacancies/', views.vacancies_by_company),  # в компании
    path('vacancies/', views.all_vacancies),  # все получить
    path('vacancies/<int:id>/', views.one_vacancy),  # одна получить
    path('vacancies/top_ten/', views.top_ten)  # список 10
]