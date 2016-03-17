var React = require('react');
var RandomArticlesWrapper = require('./RandomArticlesWrapper');
var ArticleDetailWrapper = React.createClass({
  onReturn: function (e) {
    e.preventDefault();
    Router.redirect('/articles/');
  },

  render: function () {
    var slug = this.props.slug;
    console.log('slug', slug)
    return (
<div>
<div className="blog-detail-wrapper">
  <div id="return-to-list">
    <a href="/articles/" onClick={ this.onReturn }><span className="glyphicon glyphicon-menu-left"></span>Return to Article List</a>
    <hr />
  </div>
  <h1>Blog Title</h1>
  <p className="lead">
    Thursday, September 18th, 2014 | <a href="#">Jasmine Moir</a>
  </p>

  <img className="img-responsive blog-hero" src="{% static 'img/hero-placehold.png' %}" alt="" />
  <div className="blog-body">
    <img className="img-responsive blog-img" src="{% static 'img/img-placehold.png' %}" alt="" />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nunc eleifend, tempor velit eu, tincidunt libero. Donec eget dapibus diam. Donec non mattis sapien. Sed pretium feugiat tortor vel placerat. Donec malesuada enim a volutpat facilisis. Donec consectetur venenatis odio, vel mollis arcu laoreet ac. Praesent ac nunc arcu. Cras et lacus cursus, posuere est eu, ultrices lorem. Praesent ac scelerisque sem. Integer ante lectus, rutrum quis placerat finibus, blandit eu arcu. Ut convallis magna eu pulvinar pulvinar. Sed gravida fringilla sem id facilisis. Praesent accumsan pharetra pretium.

    Phasellus ut velit ut mi egestas congue. Nam ornare commodo pulvinar. Donec tempus libero in nisi gravida tempor. Quisque ultricies faucibus molestie. Aliquam blandit neque id nibh blandit elementum. Praesent vitae nibh et ante fermentum maximus nec at nulla. Phasellus sit amet mattis lorem, at volutpat turpis. In nec efficitur leo. Duis at tellus magna.

    Morbi eu laoreet lorem, id lacinia sapien. In ut mi tempus, fringilla urna nec, efficitur justo. In porttitor vitae erat nec bibendum. Suspendisse non feugiat purus, ac convallis orci. Nulla accumsan ut odio eu efficitur. Etiam porttitor imperdiet elit, id pellentesque ex consectetur eget. Ut bibendum, urna eget maximus malesuada, leo orci congue enim, eu congue magna metus id est. Pellentesque id fermentum ligula. Vestibulum luctus molestie malesuada. Curabitur elementum velit vitae nisi fermentum, sed bibendum sem maximus. Ut ut magna vitae libero egestas vehicula eu ac sapien. Donec eu gravida magna. Suspendisse potenti. Quisque venenatis pharetra enim ut convallis. Nullam vel tincidunt purus, hendrerit placerat lacus. Fusce ultrices, nulla in porta molestie, ipsum erat varius est, id porttitor justo mi non velit.

    Quisque at venenatis nunc. Duis ipsum magna, dignissim sed iaculis blandit, malesuada eget augue. Vivamus viverra quam id nulla porta, vel laoreet neque tincidunt. Proin dictum, purus at feugiat vestibulum, nulla eros pharetra tellus, pellentesque vehicula ex nunc nec ex. Integer non aliquet ipsum, eget dapibus est. Proin posuere sapien id arcu congue maximus. Donec dignissim ligula vitae sem pretium rutrum. Integer et libero varius odio efficitur rhoncus a eget metus. Morbi felis mauris, faucibus quis elementum quis, finibus nec ligula. Nulla vestibulum iaculis ipsum, maximus ullamcorper lacus fermentum nec. Nulla ut velit nisi. Nunc ultrices id sem et vulputate. Aenean vel quam congue, tempor quam nec, rhoncus dolor. Nullam eu accumsan sapien. Nunc congue nunc id lacus congue, ut vestibulum arcu posuere. Ut nec quam interdum nisl vulputate viverra interdum quis nunc.
  </div>
</div>
        <RandomArticlesWrapper slug={slug} />
        </div>
    )
  }

});

module.exports = ArticleDetailWrapper;
