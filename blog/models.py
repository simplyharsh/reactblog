from __future__ import unicode_literals

import os

from django.db import models
from tagging.fields import TagField
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify

from django.conf import settings
HERO_DIR = os.path.join(settings.UPLOADS_DIR, 'bloghero')
IMAGE_DIR = os.path.join(settings.UPLOADS_DIR, 'blogimage')

class BlogCategory(models.Model):

    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True, help_text="Will be generated for you, if you leave this blank.", blank=True)
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = "Blog Category"
        verbose_name_plural = "Blog Categories"


    def __unicode__(self):
        return self.title

    @models.permalink
    def get_absolute_url(self):
        return ('category',
                (),
                {'slug' :self.slug})

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(BlogCategory, self).save(*args, **kwargs)


class Blog(models.Model):
    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True, blank=True, help_text="Will be generated for you, if you leave this blank.")
    author = models.ForeignKey(User)
    publication_date = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(BlogCategory)
    bloghero = models.ImageField(upload_to=HERO_DIR)
    blogimage = models.ImageField(upload_to=IMAGE_DIR, null=True, blank=True)
    body = models.TextField()
    tags = TagField()

    class Meta:
        ordering = ['-publication_date', ]

    def __unicode__(self):
        return self.title

    @models.permalink
    def get_absolute_url(self):
        return ('blog_detail',
                (),
                {'slug' :self.slug})

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Blog, self).save(*args, **kwargs)
