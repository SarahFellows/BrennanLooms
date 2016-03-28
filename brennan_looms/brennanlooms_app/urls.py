from django.conf.urls import url 
from .views import * 

urlpatterns = [

    #no need to say views.port_home because of the 'import *' above
    url(r'^$', brennanlooms_app, name='brennanlooms_app'), 
    url(r'^about$', about_page, name='about_page'), 
]