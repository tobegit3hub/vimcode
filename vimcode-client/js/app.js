App = Ember.Application.create();

var files = [{
  id: 1,
  name: "file1.xml",
  code: "[a](https://baidu.com)",
  type: "xml"

}, {
  id: 2,
  name: "file2.md",
  code: "# hello",
  type: "markdown"

}];

App.Router.map(function(){

  this.resource("files", function(){
    this.resource("file", {path: ":file_id"});
  });
  
  this.resource("about");
  
});

App.FilesRoute = Ember.Route.extend({
  model: function(){
    return files;
  }
});

App.FileRoute = Ember.Route.extend({
  model: function(params) {
    var file_id = parseInt(params.file_id);
    return files.findBy('id', file_id);
  }
});


var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});


App.FileController = Ember.ObjectController.extend({
  isEditing: false,

  edit: function(){
    this.set("isEditing", true);
  },

  doneEditing: function(){
    this.set("isEditing", false);
  }

});



