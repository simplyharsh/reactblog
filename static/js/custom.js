Vue.config.delimiters = ['@{', '}']
Vue.config.unsafeDelimiters = ['@{!', '!}']

var vm = new Vue({
  el: '#content-wrapper',
  data: {
    'view': 'default',
    'slug': '',
    'json': '',
    'items': '',
    'search_key': ''
  },
  methods: {
    'on_search': function () {
      console.log('search', this.search_key);
    },
    'load_list': function (page) {
      page = Number(page) || 1;
      var self = this;
      console.log('loading list page ', page);
      self.view = 'list';

      var url;
      if (page <= 1) {
        url = '/api/articles/';
      } else {
        url = '/api/articles/?page='+page;
      }

      $.ajax({
        url: url,
        type: 'get',
        success: function (data) {
          self.items = data.results;
        }
      });

    },
    'load_detail': function (slug) {
      console.log('loading detail page for ', slug);
      var self = this;
      self.view = 'detail';
      self.slug = slug;

      $.ajax({
        url: '/api/article/'+slug+'/',
        type: 'get',
        success: function (data) {
          self.json = data;
        }
      });

    },
    'return_to_list': function () {
      Router.redirect('/articles/');
    }
  }
});


var BlogReactor = {
  render_blog_list: function (page) {
    var page = page || 1;
    console.log('rendering list', page);
    vm.load_list(page);
  },
  render_blog_detail: function (blog_slug) {
    console.log('arendering detail', blog_slug);
    vm.load_detail(blog_slug);
  }
}

// setting up Router to use history api
Router.config({ mode: 'history'});

// adding routes
Router
  .add(/articles$/, function() {
    BlogReactor.render_blog_list();
  })
  .add(/articles\/page\/(\d+)$/, function() {
    BlogReactor.render_blog_list.apply(BlogReactor, arguments);
  })
  .add(/article\/(.*)$/, function() {
    BlogReactor.render_blog_detail.apply(BlogReactor, arguments);
  })
  .add(function() {
    Router.redirect('/articles', true);
  })
  .handle()
  .listen();
