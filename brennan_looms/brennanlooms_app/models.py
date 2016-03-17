from django.db import models
from django.conf import settings

# Create your models here.

class LoomUsers(models.Model):

    name = models.TextField(max_length=200)
    shipping_address = models.TextField(max_length=500)
    security_quest = models.TextField(max_length=1000)

    # this references the user field 
    user = models.OnetoOneField(settings.AUTH_USER_MODEL)


class Order(models.Model):

    loom_user_id = models.ForeignKey(LoomUsers)
    shipping_address = models.TextField(max_length=70)
    order_status = models.TextField(max_length=100)
    cost_total = models.IntegerField(default)
    tracking_info = models.CharField(max_length=200)
    shipping_costs = models.IntegerField(max_length=50)

    # This is where you reference the relational table. You only need to do it once, here, not again in Products.
    loom_userID = models.ManyToManyField(Product) 

class Product(models.Model):

    loom_description = models.TextField(max_length=1000)
    loom_dimension = models.TextField(max_length=1000)
    loom_cost = models.PositiveIntegerField(default)
    shipping = models.IntegerField(max_length=50) 

class Company_info(models.Model):

    about_me = models.TextField(max_length=1000)
    company_info = models.TextField(max_length=1000)
    contact_name = models.TextField(max_length =100)
    contact_email = models.EmailField(max_length=254)
    contact_phone = models.SmallIntegerField(default)

class Image(models.Model):

    src = models.ImageField




