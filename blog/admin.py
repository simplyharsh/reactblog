from django.contrib import admin

# Register your models here.


from .models import BlogCategory, Blog

admin.site.register(BlogCategory)
admin.site.register(Blog)
