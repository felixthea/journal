// app/assets/javascripts/routers/tasks_router.js
Journal.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function($rootEl, $sidebarEl, posts) {
    this.$rootEl = $rootEl;
    this.$sidebarEl = $sidebarEl;
    this.posts = posts;
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show",
    "posts/:id/edit": "edit",
    "posts/": "index"
  },

  index: function (){
    var that = this;
    that.$sidebarEl.empty();
    var postIndexView = new Journal.Views.PostIndexView({
      collection: that.posts
    });
    that.$sidebarEl.html(postIndexView.render().$el);
  },

  show: function (id) {
    var that = this;
    that.$rootEl.empty();
    var post = that.posts.get(id);
    var postShowView = new Journal.Views.PostShowView({
      model: post
    });
    that.$rootEl.html(postShowView.render().$el);
  },

  edit: function(id) {
    var that = this;
    that.$rootEl.empty();
    var post = that.posts.get(id);
    var postEditView = new Journal.Views.PostEditView({
      model: post
    });
    that.$rootEl.html(postEditView.render().$el);
  },

  new: function() {
    var that = this;

    that.$rootEl.empty();
    var post = new Journal.Models.Post();
    var postNewView = new Journal.Views.PostNewView({
      model: post,
      collection: that.posts
    });
    that.$rootEl.html(postNewView.render().$el);
  }

});