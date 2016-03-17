var React = require('react');
var ReactDOM = require('react-dom');

var BlogListWrapper = require('./components/BlogListWrapper');
var BlogDetailWrapper = require('./components/BlogDetailWrapper');

var BlogReactor = {
  render_blog_detail: function (blog_slug) {
    ReactDOM.render(
        <BlogDetailWrapper slug={blog_slug} />,
      document.getElementById('content-wrapper')
    );
  },
  render_blog_list: function (blog_list) {
    var blog_items = [{'id': 'a'}, {'id': 'b'}];
    ReactDOM.render(
        <BlogListWrapper blog_items={blog_items} />,
      document.getElementById('content-wrapper')
    );
  }
}

module.exports = BlogReactor;
