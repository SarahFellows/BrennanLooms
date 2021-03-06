from django.conf.urls import url 
from .views import * 

urlpatterns = [

    #no need to say views.port_home because of the 'import *' above
    url(r'^$', brennanlooms_app, name='brennanlooms_app'), 
    url(r'^about/$', about_page, name='about_page'), 
    url(r'^looms/$', looms_page, name='looms_page'), 
    url(r'^links/$', links_page, name='links_page'), 
    url(r'^contact/$', contact_page, name='contact_page'), 
    url(r'^pdfs/$', pdf_page, name='pdf_page'),
    #this one had no $ after cart because the url needs the product id with it 
    url(r'^cart', cart_page, name='cart_page'),
    
]