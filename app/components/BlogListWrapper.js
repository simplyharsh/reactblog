var React = require('react');
var ListItemWrapper = require('./ListItemWrapper');
var BlogListWrapper = React.createClass({

  render: function () {
    console.log(this.props.blog_items);
    var blog_items = this.props.blog_items;
    return (
      <div>
      {blog_items.map(function (blog_item) {
        return <ListItemWrapper key={blog_item.id} blog={blog_item} />
      })}
      </div>
    )
  }

});

module.exports = BlogListWrapper;
