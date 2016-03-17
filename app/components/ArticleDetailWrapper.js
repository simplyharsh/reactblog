var React = require('react');
var RandomArticlesWrapper = require('./RandomArticlesWrapper');
var ArticleDetailWrapper = React.createClass({
  getInitialState: function () {
    return {}
  },

  componentDidMount: function() {
    var sui = this;
    sui.serverRequest = $.ajax({
      url: '/api/article/'+sui.props.slug+'/',
      type: 'get',
      success: function (data) {
        sui.setState(data);
      }
    });
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  onReturn: function (e) {
    e.preventDefault();
    Router.redirect('/articles/');
  },

  render: function () {
    var slug = this.props.slug;
    var article = this.state;
    return (
<div>
<div className="blog-detail-wrapper">
  <div id="return-to-list">
    <a href="/articles/" onClick={ this.onReturn }><span className="glyphicon glyphicon-menu-left"></span>Return to Article List</a>
    <hr />
  </div>
  <h1>{ article.title }</h1>
  <p>{ article.publication_date } | <a>{ article.author_name }</a></p>

  <div className="blog-hero">
    <img className="img-responsive" src={ article.hero } alt="" />
  </div>
  <div className="blog-body">
    <img className="img-responsive blog-img" src={ article.image } alt="" />
    { article.body }
  </div>
</div>
<RandomArticlesWrapper slug={slug} />
</div>
    )
  }

});

module.exports = ArticleDetailWrapper;
