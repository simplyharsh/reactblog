var React = require('react');
var RandomArticlesWrapper = React.createClass({
  render: function () {
    return (
  <article>
    <p className="lead">What to read next?</p>
    <hr />
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="thumbnail">
          <a href="#">
            <img src="{% static 'img/img-placehold.png' %}" className="img-responsive" />
          </a>
          <div className="caption text-center">
            <h4>Random Article</h4>
            <button className="btn btn-sm btn-success">Read Now!</button>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="thumbnail">
          <a href="#">
            <img src="{% static 'img/img-placehold.png' %}" className="img-responsive" />
          </a>
          <div className="caption text-center">
            <h4>Random Article</h4>
            <button className="btn btn-sm btn-success">Read Now!</button>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="thumbnail">
          <a href="#">
            <img src="{% static 'img/img-placehold.png' %}" className="img-responsive" />
          </a>
          <div className="caption text-center">
            <h4>Random Article</h4>
            <button className="btn btn-sm btn-success">Read Now!</button>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 ">
        <div className="thumbnail">
          <a href="#">
            <img src="{% static 'img/img-placehold.png' %}" className="img-responsive" />
          </a>
          <div className="caption text-center">
            <h4>Random Article</h4>
            <button className="btn btn-sm btn-success">Read Now!</button>
          </div>
        </div>
      </div>
    </div>
        </article>
    )}
});


module.exports = RandomArticlesWrapper;
