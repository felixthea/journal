Journal.Models.Post = Backbone.Model.extend({
  urlRoot: "/posts",
  defaults: {
        title: 'Test Title',
        body: 'Test Body'
      },
  initialize: function(){
    alert("Hi, I'm a Post");
  }
});