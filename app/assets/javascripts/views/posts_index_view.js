Journal.Views.PostIndexView = Backbone.View.extend({
  initialize: function() {
    var that = this;

    var renderCallback = that.render.bind(that);
    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "change:title", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "reset", renderCallback);
  },

  events: {
    "click button.remove" : "deletePost"
  },

  deletePost: function (event) {
    var postID = ($(event.currentTarget).attr("data-id"));
    var post = this.collection.get(postID);
    console.log(postID);
    console.log(post);
    this.collection.remove(post);
    post.destroy({});
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/index"]({
      posts: that.collection
    })
    that.$el.html(renderedContent);
    return that;
  }
})