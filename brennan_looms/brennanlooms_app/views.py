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

    #this needs to be refactored later, the 0 on the get.all is not ideal 
    # this creates a variable that puts all the objects in the About model into one variable
    temp = AboutPage.objects.all()[0]
    return render(request, 'brennanlooms_app/about.html', {"about": temp})

def looms_page(request):
    """ build a context object to grab info from looms_page model from database """

    #create a variable to put all the product objects into. Product is the model from models.py
    looms = Product.objects.all()

    # #create a empty list to store the list of loom images in
    # images = []

    # #create a loop that loops through all the images and appends them to the empty list 
    # for loom in looms: 
    #     images.append(loom.images.all)
    # print(images)

    return render(request, 'brennanlooms_app/looms.html', {"looms": looms})


def links_page(request):
    """ build a context object to grab info from links_page model from database """

    #create a variable to put all the link objects into 
    links = WebPageLink.objects.all()
    return render(request, 'brennanlooms_app/links.html', {"links": links})

def contact_page(request):
    """ Build a context object to grab info from contacts model from database """

    #create a variable to put the contact info object into 
    contact = CompanyInfo.objects.all()[0]
    #render the page
    return render(request, 'brennanlooms_app/contact.html', {"contact": contact})

def cart_page(request):
    """ Build a context object to grab HTML info for cart page"""

    # products is the id number that is generated in the javascript
    # Eval says "take this input and interpret into whatever it looks like" i.e. if it is a list, string, etc.
    id_list = eval(request.GET.get("products")) 
    
    # if id list is empty, then return the error warning
    if not id_list: 
        return HttpResponse("Your cart is empty. Please return to the Loom page and choose a loom you wish to purchase.")
    else: 
        #.sort will sort the list so all looms will group together (due to number ID's)
        id_list.sort()
        # create an empty list to append each item to 
        product_list = []
        #make a for loop that takes every items in the sorted id_list 
        for item in id_list:
            #gets the object that has a primary key from the model - object.get is a built in for python that does magical things.
            product = Product.objects.get(pk=item)
            product_list.append(product)
        #renders the cart page
        return render(request, 'brennanlooms_app/cart.html', {"products": product_list})

def pdf_page(request): 
    """ Build a context object to grab info for Looms Design page """

    pdfs = Pdfs.objects.all()

    # create a variable to put all the pdfs object into 

    return render(request, 'brennanlooms_app/pdfs.html', {"pdfs": pdfs})



