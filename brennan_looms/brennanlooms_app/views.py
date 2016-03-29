from django.shortcuts import render
from django.http.response import HttpResponse 
from django.http import JsonResponse 

# import Json 

from .models import *

# Create your views here.

def brennanlooms_app(request):
    return render(request, 'brennanlooms_app/index.html')


def about_page(request):
    """ build context object to grab info Company-Info model from database """
    # print("about_page working?")

    #this needs to be refactored later, the 0 on the get.all is not ideal 
    # this creates a variable that puts all the objects into one object 
    temp = AboutPage.objects.all()[0]
    
    # print(temp)
    # print(temp.about_archie)

    return render(request, 'brennanlooms_app/about.html', {"about": temp})

def looms_page(request):
    """ build a context object to grab info from looms_page model from database """

    looms = Product.objects.all()
    print(looms)
    print(len(looms))

    return render(request, 'brennanlooms_app/looms.html', {"looms": looms})


def links_page(request):
    """ build a conext object to grab info from links_page model from database """

    links = WebPageLink.objects.all()
    return render(request, 'brennanlooms_app/links.html', {"links": links})

def contact_page(request):
    """ Build a conext object to grab info from contacts model from database """

    contact = CompanyInfo.objects.all()[0]
    return render(request, 'brennanlooms_app/contact.html', {"contact": contact})







