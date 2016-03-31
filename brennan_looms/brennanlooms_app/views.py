from django.shortcuts import render
from django.http.response import HttpResponse 
from django.http import JsonResponse 

# import Json 

from .models import *

# Create your views here.

def brennanlooms_app(request):
    #renders the home page 
    return render(request, 'brennanlooms_app/index.html')


def about_page(request):
    """ build context object to grab info Company-Info model from database """
    # print("about_page working?")

    #this needs to be refactored later, the 0 on the get.all is not ideal 
    # this creates a variable that puts all the objects into one variable
    temp = AboutPage.objects.all()[0]
    
    # print(temp)
    # print(temp.about_archie)

    return render(request, 'brennanlooms_app/about.html', {"about": temp})

def looms_page(request):
    """ build a context object to grab info from looms_page model from database """

    #create a variable to put all the product objects into. Product is the model from models.py
    looms = Product.objects.all()

    #create a empty list to store the list of loom images in
    images = []

    #create a loop that loops through all the images and appends them to the empty list 
    for loom in looms: 
        images.append(loom.images.all)
    print(images)

    return render(request, 'brennanlooms_app/looms.html', {"looms": looms, "images": images})


def links_page(request):
    """ build a conext object to grab info from links_page model from database """

    #create a variable to put all the link objects into 
    links = WebPageLink.objects.all()
    return render(request, 'brennanlooms_app/links.html', {"links": links})

def contact_page(request):
    """ Build a conext object to grab info from contacts model from database """

    #create a variable to put the contact info object into 
    contact = CompanyInfo.objects.all()[0]
    #render the page
    return render(request, 'brennanlooms_app/contact.html', {"contact": contact})

def cart_page(request):
     """ Build a conext object to grab HTML info for cart page"""

     #renders the cart page
     return render(request, 'brennanlooms_app/cart.html')




