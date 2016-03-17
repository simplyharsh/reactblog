var React = require('react');
var ListItemWrapper = require('./ListItemWrapper');
var ArticleListWrapper = React.createClass({
  getInitialState: function () {
    return {
      'article_items': [{'slug': 'a', 'id': 1}, {'slug': 'b', 'id': 2}]
    }
  },

  componentDidMount: function() {
    this.serverRequest = $.get('/api/articles/', function (result) {

    });
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function () {
    var article_items = this.state.article_items;
    var page = this.props.page;
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
