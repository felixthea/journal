Journal.Views.PostShowView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    console.log(that);
    console.log(that.model);
    that.title = that.model.get("title");
    that.body = that.model.get("body");
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/show"]({
      postTitle: that.title,
      postBody: that.body
    })


    that.$el.html(renderedContent);
    return that;
  }
})