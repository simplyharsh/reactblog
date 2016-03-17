from django.shortcuts import render

# Create your views here.
from .models import Blog as Article
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

from django.contrib.staticfiles.templatetags.staticfiles import static


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'email', 'is_staff')

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ArticleItemSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    body = serializers.SerializerMethodField()
    hero = serializers.SerializerMethodField()

    def get_author_name(self, obj):
        obj = obj.author
        name = obj.first_name
        if name and obj.last_name:
            name = "%s %s" % (name, obj.last_name)
        return name or obj.username;

    def get_body(self, obj):
        return obj.body[:200]

    def get_hero(self, obj):
        name = obj.bloghero.name.split('/')[-1]
        return static("bloghero/"+name)

    class Meta:
        model = Article
        fields = ('id', 'title', 'slug', 'author_name', 'body', 'hero', 'publication_date')

class ArticleSerializer(ArticleItemSerializer):
    image = serializers.SerializerMethodField()

    def get_body(self, obj):
        return obj.body

    def get_image(self, obj):
        if obj.blogimage:
            name = obj.blogimage.name.split('/')[-1]
            return static("blogimage/"+name)
        else:
            return ''

    class Meta:
        model = Article
        fields = ('id', 'title', 'slug', 'author_name', 'body', 'hero', 'publication_date', 'image')


class ArticleItemViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleItemSerializer

class ArticleViewSet(ArticleItemViewSet):
    serializer_class = ArticleSerializer
    lookup_field = 'slug'

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'article', ArticleViewSet)
router.register(r'articles', ArticleItemViewSet)
