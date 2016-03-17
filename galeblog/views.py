from django.views.generic.base import View
from django.template import RequestContext
from django.shortcuts import render_to_response as rtr

class BaseHandler(View):
    def dispatch(self, request, *args, **kwargs):
        self.request = request
        return super(BaseHandler, self).dispatch(request, *args, **kwargs)

    def render_to_response(self, template_name, context=None):
        if not isinstance(context, dict):
            context = {}

        return rtr(template_name, context,
                   context_instance=RequestContext(self.request))

class Home(BaseHandler):
    def get(self, request, *args, **kwargs):
        # For now our home will be redirecting to blog_home
        return self.render_to_response('blog_base.html')
