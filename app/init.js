var React = require('react');
var ReactDOM = require('react-dom');

var ArticleListWrapper = require('./components/ArticleListWrapper');
var ArticleDetailWrapper = require('./components/ArticleDetailWrapper');

var BlogReactor = {
  render_blog_list: function (page) {
    var page = page || 1;
    ReactDOM.render(
        <ArticleListWrapper page={page} />,
      document.getElementById('content-wrapper')
    );
  },
  render_blog_detail: function (blog_slug) {
    ReactDOM.render(
        <ArticleDetailWrapper slug={blog_slug} />,
      document.getElementById('content-wrapper')
    );
  }
}

module.exports = BlogReactor;
