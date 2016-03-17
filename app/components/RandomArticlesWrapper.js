var React = require('react');
var RandomArticlesItemWrapper = require('./RandomArticlesItemWrapper');

var RandomArticlesWrapper = React.createClass({
  getInitialState: function () {
    return {
      'article_items': []
    }
  },

  componentDidMount: function() {
    var sui = this;
    sui.serverRequest = $.ajax({
      url: '/api/random_articles/',
      type: 'get',
      success: function (data) {
        sui.setState({
          'article_items': data
        })
      }
    });
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function () {
    var slug = this.props.slug;
    var article_items = this.state.article_items;
    return (
  <article>
    <p className="lead">What to read next?</p>
    <hr />
    <div className="row">
        {article_items.map(function (article_item, iter) {
          if (article_item.slug != slug && iter < 4) {
            return <RandomArticlesItemWrapper key={article_item.id} article={article_item} />
          } else {
            return '';
          }
      })}
    </div>
  </article>
   )}
});


module.exports = RandomArticlesWrapper;
