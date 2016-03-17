from django.views.generic import RedirectView
from django.core.urlresolvers import reverse_lazy
from django.conf.urls import patterns, include, url

# from .views import ArticleList

urlpatterns = patterns(
    '',
    # url(r'^articles/?$', ArticleList.as_view(), name="article_list"),
)
