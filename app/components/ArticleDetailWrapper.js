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
      },
      error: function (xhr) {
        sui.setState({});
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
    if ($.isEmptyObject({})) {
      return (
    <div className="panel panel-danger" id="placeholder-anim">
      <div className="panel-heading">
        <h3 className="panel-title">Oops!</h3>
      </div>
      <div className="panel-body">
        Oops! Cannot find that Article. Please <a href="/articles/" onClick={ this.onReturn }>Return to Article List</a>.
      </div>
    </div>
      )
    }
    console.log(11, article);
    var tags_display = ''
    var tags_str = article.tags;
    if (tags_str) {
      tags_display = <li><span className="glyphicon glyphicon-tags"></span>{ tags_str }</li>;
    }
    return (
<div>
<div className="blog-detail-wrapper">
  <div id="return-to-list">
    <a href="/articles/" onClick={ this.onReturn }><span className="glyphicon glyphicon-menu-left"></span>Return to Article List</a>
    <hr />
  </div>
  <h1>{ article.title }</h1>
  <div className="blog-list-footer">
  <ul className="meta-post">
    <li><span className="glyphicon glyphicon-calendar"></span>{ article.publication_date }</li>
    <li><span className="glyphicon glyphicon-user"></span>{ article.author_name }</li>
    <li><span className="glyphicon glyphicon-folder-open"></span>{ article.category_name || 'Uncategorized' }</li>
    { tags_display }
  </ul>
  </div>
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
