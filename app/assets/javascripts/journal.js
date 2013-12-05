window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(posts) {
    var $rootEl = $(".content")
    var $sidebarEl = $(".sidebar")
    var postRouter = new Journal.Routers.PostsRouter($rootEl, $sidebarEl, posts);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  $.ajax({
    url: "/posts",
    type: "GET",
    dataType: "json",
    success: function(response) {
      var posts = new Journal.Collections.Posts;

      posts.add(response)

      Journal.initialize(posts);
    }
  });
});
