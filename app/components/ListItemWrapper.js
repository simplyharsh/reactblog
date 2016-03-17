var React = require('react');

var ListItemWrapper = React.createClass({
  onReadDetail: function (e) {
    Router.redirect(this.article_url);
    e.preventDefault();
  },

  render: function () {
    var article = this.props.article;
    var article_url = "/article/"+article.slug;
    this.article_url = article_url;
    return (
<article>
  <div className="blog-list-header">
    <div className="post-heading">
      <h3><a href="{article_url}" onClick={ this.onReadDetail }>{article.title}</a></h3>
    </div>
    <div className="hero-div">
      <img className="img-responsive" src={ article.hero } alt="" />
    </div>
  </div>
  <p>
    { article.body }
  </p>
  <div className="blog-list-footer">
    <ul className="meta-post">
      <li><span className="glyphicon glyphicon-calendar"></span>{ article.publication_date }</li>
      <li><span className="glyphicon glyphicon-user"></span>{ article.author_name }</li>
      <li><span className="glyphicon glyphicon-folder-open"></span>{ article.category_name || 'Uncategorized' }</li>
      <li><span className="glyphicon glyphicon-tags"></span><a href="#">4 Tags</a></li>
    </ul>
    <a href={article_url} className="read-this" onClick={ this.onReadDetail }><span className="glyphicon glyphicon-menu-right"></span>Read This Article</a>
  </div>
</article>
    )}
});

module.exports = ListItemWrapper;
