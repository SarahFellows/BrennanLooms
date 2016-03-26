from django.shortcuts import render
# from django.http.response import HttpResponse 

# Create your views here.

def brennanlooms_app(request):
    return render(request, 'brennanlooms_app/index.html')




def about_page(request):
    print("about_page working?")

    #build content(context) object to grab database 

    return render(request, 'brennanlooms_app/about.html')