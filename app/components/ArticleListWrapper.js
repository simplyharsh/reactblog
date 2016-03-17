var React = require('react');
var ListItemWrapper = require('./ListItemWrapper');
var ArticleListWrapper = React.createClass({
  getInitialState: function () {
    return {
      'article_items': []
    }
  },

  componentDidMount: function() {
    var sui = this;
    var page = this.props.page;
    if (isNaN(Number(page))) {
      page = 1;
    } else {
      page = Number(page);
    }

    sui.serverRequest = $.ajax({
      url: '/api/articles/?page='+page,
      type: 'get',
      success: function (data) {
        sui.setState({
          'count': data.count,
          'article_items': data.results,
          'next': data.next,
          'previous': data.previous
        })
      }
    });
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  page_redirect: function (page) {
    if (isNaN(Number(page))) {
      page = 1;
    } else {
      page = Number(page);
    }
    var url;
    if (page <= 1) {
      url = '/articles/';
    } else {
      url = '/articles/page/'+page+'/';
    }
    Router.redirect(url);
  },

  onNext: function (e) {
    this.page_redirect(this.state.next);
    e.preventDefault();
  },

  onPrev: function (e) {
    this.page_redirect(this.state.previous);
    e.preventDefault();
  },

  render: function () {
    var article_items = this.state.article_items;
    if ($.isEmptyObject({})) {
      return (
    <div className="panel panel-danger" id="placeholder-anim">
      <div className="panel-heading">
        <h3 className="panel-title">Oops!</h3>
      </div>
      <div className="panel-body">
        We do not have any <strong>Article</strong> for you to read at this moment. I am afraid, I have to ask you to visit later. But please do come back.
      </div>
    </div>
      )
    }
    var next = this.state.next;
    var prev = this.state.previous;

    var next_link = '', prev_link = '', next_prev = '';
    if (next) {
      var next_url = "/articles/page/"+next;
      next_link = <a href={next_url} className="pull-right" onClick={ this.onNext }>Read Next Article <span className="glyphicon glyphicon-menu-right"></span></a>;
    }
    if (prev) {
      var prev_url = "/articles/page/"+prev;
      prev_link = <a href={prev_url} onClick={ this.onPrev }><span className="glyphicon glyphicon-menu-left"></span> Read Previous Article</a>;
    }

    if (next || prev) {
      next_prev = <article>{prev_link}{next_link}<div className="clearfix"></div></article>
    }

    var page = this.props.page;
    return (
      <div>
      {article_items.map(function (article_item) {
        return <ListItemWrapper key={article_item.id} article={article_item} />
      })}
      { next_prev }
      </div>
    )
  }

});

module.exports = ArticleListWrapper;
