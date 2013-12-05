Journal.Views.PostNewView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    that.title = that.model.get("title");
    that.body = that.model.get("body");
  },

  events: {
    "click button.submit": "createPost"
  },

  createPost: function () {
    event.preventDefault();
    var that = this;
    var resp;
    var $form = $(event.currentTarget).children('form');
    var attributes = ($form.serializeJSON());

    if (that.model.isNew()) {
      resp = that.collection.create(attributes);
    } else {
      resp = that.model.save(attributes);
    }

    if (resp) {
      // Backbone.history.navigate("#/");
    } else {
      Backbone.history.navigate("#/posts/new");
    }
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/new"]({
      postTitle: that.title,
      postBody: that.body
    })

    that.$el.html(renderedContent);
    return that;
  }
})