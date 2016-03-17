var React = require('react');
var ReactDOM = require('react-dom');

var ArticleListWrapper = require('./components/ArticleListWrapper');
var ArticleDetailWrapper = require('./components/ArticleDetailWrapper');

var BlogReactor = {
  render_blog_list: function (blog_list) {
    var article_items = [{'slug': 'a', 'id': 1}, {'slug': 'b', 'id': 2}];
    ReactDOM.render(
        <ArticleListWrapper article_items={article_items} />,
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
