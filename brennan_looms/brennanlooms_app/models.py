from django.db import models
from django.conf import settings

# this is for the phone number in CompanyInfo
from django.core.validators import RegexValidator

#this is to create a basic client user for the website
from django.contrib.auth.models import AbstractBaseUser 

# Create your models here.

class LoomUser(models.Model):
    """ For the client of the website - the user"""
    # We may end up deleting this, for the client changed his mind on the user aspect of it. 

    name = models.TextField(max_length=100)
    shipping_address = models.TextField(max_length=500)
    security_quest = models.TextField(max_length=1000)

    # this references the user field 
    user = models.OneToOneField(settings.AUTH_USER_MODEL)


class Order(models.Model):
    """ Orders that come from the website """
    # We still need to make the final orders communicate with the order model in the database to populate on the backside correctly.

    # Order Status Const 
    IN_PROCESS = 1
    SHIPPING = 1
    ORDER_FULFILLED = 1 

    Status = (
        (IN_PROCESS, 'Order is in process'), 
        (SHIPPING, 'Order has been shipped'), 
        (ORDER_FULFILLED, 'Order has been fulfilled')
        )

    # This is the foreign key reference 
    loom_user_id = models.ForeignKey(LoomUser)

    #make the order status const tie in:
    order_status = models.IntegerField(choices=Status, default=IN_PROCESS)

    cost_total = models.DecimalField(max_digits=6, decimal_places=2)
    tracking_info = models.CharField(max_length=200)
    shipping_costs = models.DecimalField(max_digits=6, decimal_places=2)

    # This is where you reference the relational table. You only need to do it once, here, not again in Products.
    products = models.ManyToManyField("Product") 

class Product(models.Model):
    """ This is the model that builds the details of each loom"""

    product_name = models.CharField(max_length=300, default="The Loom")
    loom_description = models.TextField(max_length=1000)
    loom_dimension = models.TextField(max_length=1000)
    loom_cost = models.CharField(max_length=50)
    shipping = models.CharField(max_length=50) 

    #override the string function for the admin portal so it displays the product name instead 
    def __str__(self):
      return self.product_name

class CompanyInfo(models.Model):
    """ This is where all the details are for company contact """

    company_name = models.TextField(max_length=1000)
    contact_name = models.TextField(max_length=100)
    contact_address = models.TextField(max_length=200, default="3507 NE 7th Ave, Portland, Oregon, 97212")
    contact_email = models.EmailField(max_length=254)
    phone_number = models.CharField(blank=True, max_length=15, default="503-893-5290")

    #overside the string function for the admin portal so it displays the company name instead.
    def __str__(self):
      return self.company_name

class AboutPage(models.Model):
    """ This is where all the information about the company is stored."""

    about_archie = models.TextField(max_length=1000)
    archie_quote = models.TextField(max_length=1000)
    about_jesse = models.TextField(max_length=1000)
    family_photo = models.ImageField(upload_to='images', blank=True)


class WebPageLink(models.Model):
    """ This is where the resoucres and links information is stored to be displayed on website. """

    link_image = models.ImageField(upload_to='images', blank=True)
    link_text = models.TextField(max_length=1000)
    link_field = models.URLField(max_length=50)
    link_info = models.TextField(max_length=200, blank=True)

    # Overrite the string object so it shows which links/resources it is referencing on the admin site 
    def __str__(self):
      return self.link_text

class Image(models.Model):
    """ This is the model for all the images on the website besides the logo and home images """

    photo = models.ImageField(upload_to='images')
    photo_name = models.TextField(max_length=200)
    product_id = models.ForeignKey(Product, related_name="images")
    photo_description = models.TextField(max_length=1000)
    # this sets the images to be false. I will need to make the primary true and the rest will register as false.
    primary_img = models.BooleanField(default=False)

    def __str__(self):
      return self.photo_name
