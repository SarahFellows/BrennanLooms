from django.db import models
from django.conf import settings

# this is for the phone number in CompanyInfo
from django.core.validators import RegexValidator

# Create your models here.

class LoomUser(models.Model):
    """ For the client of the website - the user"""

    name = models.TextField(max_length=100)
    shipping_address = models.TextField(max_length=500)
    security_quest = models.TextField(max_length=1000)

    # this references the user field 
    user = models.OneToOneField(settings.AUTH_USER_MODEL)


class Order(models.Model):
    """ Orders that come from the website """

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

    shipping_address = models.TextField(max_length=70)
    cost_total = models.IntegerField()
    tracking_info = models.CharField(max_length=200)
    shipping_costs = models.IntegerField()

    # This is where you reference the relational table. You only need to do it once, here, not again in Products.
    products = models.ManyToManyField("Product") 

class Product(models.Model):

    product_name = models.CharField(max_length=300, default="The Loom")
    loom_description = models.TextField(max_length=1000)
    loom_dimension = models.TextField(max_length=1000)
    loom_cost = models.CharField(max_length=50)
    shipping = models.CharField(max_length=50) 

class CompanyInfo(models.Model):

    about_me = models.TextField(max_length=1000)
    company_info = models.TextField(max_length=1000)
    contact_name = models.TextField(max_length =100)
    contact_email = models.EmailField(max_length=254)
    #contact_phone = models.CharField(max_length=12)

    # This is the online solution 
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], blank=True, max_length=12, default="541-915-2523") # validators should be a list

class Image(models.Model):

    photo = models.ImageField(upload_to='loom_pics')
    product_id = models.ForeignKey(Product)
    photo_description = models.TextField(max_length=1000)
    # this sets the images to be false. I will need to make the primary true and the rest will register as false.
    primary_img = models.BooleanField(default=False)



