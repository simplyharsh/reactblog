var React = require('react');

var RandomArticlesItemWrapper = React.createClass({
  render: function () {
    return (
      <div className="col-md-3 col-sm-6 random-article">
        <div>
          <div className="img-div">
            <img src="{% static 'img/img-placehold.png' %}" className="img-responsive" />
          </div>
          <div className="caption text-center">
            <h4>Random Article</h4>
            <button className="btn btn-sm btn-success">Read Now!</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = RandomArticlesItemWrapper;
