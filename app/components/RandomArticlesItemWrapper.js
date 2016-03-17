var React = require('react');

var RandomArticlesItemWrapper = React.createClass({
  onReadNow: function (e) {
    Router.redirect(this.article_url);
    e.preventDefault();
  },

  render: function () {
    var article = this.props.article;
    var article_url = "/article/"+article.slug;
    this.article_url = article_url;
    return (
      <div className="col-md-3 col-sm-6 random-article">
        <div>
          <div className="img-div">
        <img src={ article.hero } className="img-responsive" />
          </div>
          <div className="caption text-center">
        <h4>{ article.title }</h4>
        <a href={ article_url } className="btn btn-sm btn-success" onClick={this.onReadNow}>Read Now!</a>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = RandomArticlesItemWrapper;
