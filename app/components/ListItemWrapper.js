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
      <h3><a href="#">This is an example of standard post format</a></h3>
    </div>
    <img className="img-responsive" src="{% static 'img/hero-placehold.png' %}" alt="" />
  </div>
  <p>
    Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius elitr saperet, ocurreret pertinacia pri an. No mei nibh consectetuer, semper laoreet perfecto ad qui, est rebum nulla argumentum ei. Fierent adipisci iracundia est ei, usu timeam persius ea. Usu ea justo malis, pri quando everti electram ei, ex homero omittam salutatus sed.
  </p>
  <div className="blog-list-footer">
    <ul className="meta-post">
      <li><span className="glyphicon glyphicon-calendar"></span><a href="#"> Mar 23, 2013</a></li>
      <li><span className="glyphicon glyphicon-user"></span><a href="#"> Admin</a></li>
      <li><span className="glyphicon glyphicon-folder-open"></span><a href="#"> Blog</a></li>
      <li><span className="glyphicon glyphicon-tags"></span><a href="#">4 Tags</a></li>
    </ul>
    <a href={article_url} className="read-this" onClick={ this.onReadDetail }><span className="glyphicon glyphicon-menu-right"></span>Read This Article</a>
  </div>
</article>
    )}
});

module.exports = ListItemWrapper;
