Journal.Views.PostEditView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    that.title = that.model.get("title");
    that.body = that.model.get("body");
  },

  events: {
    "click button.submit": "editPost"
  },

  editPost: function () {
    event.preventDefault();
    var $form = $(event.currentTarget).children('form');
    var attributes = ($form.serializeJSON());
    var resp = this.model.save(attributes);

    if (resp) {
      Backbone.history.navigate("#/");
    } else {
      Backbone.history.navigate("#/posts/"+ this.model.id +"/edit");
    }
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/edit"]({
      postTitle: that.title,
      postBody: that.body
    })

    that.$el.html(renderedContent);
    return that;
  }
})