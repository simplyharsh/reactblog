import re
from django.db.models import Q
from django.shortcuts import render

# Create your views here.
from .models import Blog as Article
from django.contrib.auth.models import User
from rest_framework.pagination import PageNumberPagination
from rest_framework import routers, serializers, viewsets, generics

from django.contrib.staticfiles.templatetags.staticfiles import static


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'email', 'is_staff')

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ArticleListSerializer(serializers.ModelSerializer):
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
        fields = ('id', 'title', 'slug', 'author_name', 'body', 'hero', 'publication_date', 'tags')


class ArticleSerializer(ArticleListSerializer):
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
        fields = ('id', 'title', 'slug', 'author_name', 'body', 'hero', 'publication_date', 'image', 'tags')


class ArticleListPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 20

    def get_next_link(self):
        if not self.page.has_next():
            return None
        return self.page.next_page_number()

    def get_previous_link(self):
        if not self.page.has_previous():
            return None

        return self.page.previous_page_number()


class ArticleListViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleListSerializer
    pagination_class = ArticleListPagination

    def get_queryset(self):
        search_key = self.request.query_params.get('q') or ''
        if search_key:
            findterms=re.compile(r'"([^"]+)"|(\S+)').findall
            normspace=re.compile(r'\s{2,}').sub
            query = None
            for term in [normspace(' ', t[1].strip()) for t in findterms(search_key)]:
                if query is None:
                    query = Q(title__icontains=term)
                else:
                    query = query | Q(title__icontains=term)
            return self.queryset.filter(query)
        return self.queryset


class ArticleViewSet(ArticleListViewSet):
    serializer_class = ArticleSerializer
    lookup_field = 'slug'

class RandomArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.order_by('?')[:5]
    serializer_class = ArticleListSerializer

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'article', ArticleViewSet)
router.register(r'articles', ArticleListViewSet)
router.register(r'random_articles', RandomArticleViewSet)
