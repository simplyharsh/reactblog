var React = require('react');
var ListItemWrapper = require('./ListItemWrapper');
var ArticleListWrapper = React.createClass({

  render: function () {
    var article_items = this.props.article_items;
    return (
      <div>
      {article_items.map(function (article_item) {
        return <ListItemWrapper key={article_item.id} article={article_item} />
      })}
      </div>
    )
  }

});

module.exports = ArticleListWrapper;
