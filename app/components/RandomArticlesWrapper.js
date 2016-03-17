var React = require('react');
var RandomArticlesItemWrapper = require('./RandomArticlesItemWrapper');

var RandomArticlesWrapper = React.createClass({
  render: function () {
    var article_items = [{'id': 1}, {'id': 2}];
    return (
  <article>
    <p className="lead">What to read next?</p>
    <hr />
    <div className="row">
      {article_items.map(function (article_item) {
        return <RandomArticlesItemWrapper key={article_item.id} article={article_item} />
      })}
    </div>
        <div className="cleafix"></div>
  </article>
   )}
});


module.exports = RandomArticlesWrapper;
