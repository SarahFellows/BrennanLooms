from django.db import models
from django.conf import settings

# Create your models here.

class LoomUser(models.Model):
    """ For the client of the website - the user"""

    name = models.TextField(max_length=200)
    shipping_address = models.TextField(max_length=500)
    security_quest = models.TextField(max_length=1000)

    # this references the user field 
    user = models.OneToOneField(settings.AUTH_USER_MODEL)


class Order(models.Model):

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
    loom_user_id = models.ForeignKey(LoomUsers)

    #make the order status const tie in:
    order_status = models.IntegerField(choices=Status, default=IN_PROCESS)

    shipping_address = models.TextField(max_length=70)
    cost_total = models.IntegerField()
    tracking_info = models.CharField(max_length=200)
    shipping_costs = models.IntegerField()

    # This is where you reference the relational table. You only need to do it once, here, not again in Products.
    products = models.ManyToManyField("Product") 

class Product(models.Model):

    loom_description = models.TextField(max_length=1000)
    loom_dimension = models.TextField(max_length=1000)
    loom_cost = models.PositiveIntegerField()
    shipping = models.IntegerField() 

class CompanyInfo(models.Model):

    about_me = models.TextField(max_length=1000)
    company_info = models.TextField(max_length=1000)
    contact_name = models.TextField(max_length =100)
    contact_email = models.EmailField(max_length=254)
    contact_phone = models.SmallIntegerField()

# class Image(models.Model):

#     src = models.ImageField




