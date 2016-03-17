var React = require('react');
var ReactDOM = require('react-dom');

var ArticleListWrapper = require('./components/ArticleListWrapper');
var ArticleDetailWrapper = require('./components/ArticleDetailWrapper');

var BlogReactor = {
  render_blog_list: function (page) {
    var page = page || 1;
    var wrapper = document.getElementById('content-wrapper');
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    ReactDOM.render(
        <ArticleListWrapper page={page} />,
      wrapper
    );
  },
  render_blog_detail: function (blog_slug) {
    var wrapper = document.getElementById('content-wrapper');
    wrapper.innerHTML = '';
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    ReactDOM.render(
        <ArticleDetailWrapper slug={blog_slug} />,
      wrapper
    );
  }
}

module.exports = BlogReactor;
