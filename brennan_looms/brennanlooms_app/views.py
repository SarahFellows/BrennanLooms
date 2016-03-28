from django.shortcuts import render
from django.http.response import HttpResponse 
from django.http import JsonResponse 

# import Json 

from .models import *

# Create your views here.

def brennanlooms_app(request):
    return render(request, 'brennanlooms_app/index.html')


def about_page(request):
    """ build context object to grab database """
    # print("about_page working?")

    #this needs to be refactored later, the 0 on the get.all is not ideal 
    # this creates a variable that puts all the 
    temp = AboutPage.objects.all()[0]
    
    # print(temp)
    # print(temp.about_archie)

    return render(request, 'brennanlooms_app/about.html', {"about": temp})