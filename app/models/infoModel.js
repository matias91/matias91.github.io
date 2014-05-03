define( [
  'jquery',
  'backbone'
],

function($, Backbone) {
  var InfoModel = Backbone.Model.extend( {

    url   : function() {
      return 'http://localhost/Matices/info.html'
    },

    initialize : function() {
      console.log('initializings')
    },

  });

  return InfoModel;
});