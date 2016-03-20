Vue.config.delimiters = ['@{', '}']

var vm = new Vue({
  el: '#content-wrapper',
  data: {
    'view': 'default',
    'slug': ''
  },
});


var BlogReactor = {
  render_blog_list: function (page) {
    var page = page || 1;
    console.log('rendering list', page);
    vm.view = 'list';
  },
  render_blog_detail: function (blog_slug) {
    console.log('arendering detail', blog_slug);
    vm.view = 'detail';
    vm.slug = blog_slug;
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
