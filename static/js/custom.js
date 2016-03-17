// setting up Router to use history api
Router.config({ mode: 'history'});

// adding routes
Router
  .add(/articles/, function() {
    BlogReactor.render_blog_list();
  })
  .add(/article\/(.*)/, function() {
    BlogReactor.render_blog_detail();
  })
  .add(function() {
    console.log('default');
  })
  .handle()
  .listen();
