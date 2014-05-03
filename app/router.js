define([
  'backbone',
  'models/infoModel',
  'views/infoView'
],

function(Backbone, InfoModel, InfoView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      'info.html' : 'AboutUs',
      'works.html': 'Works'
    },

    AboutUs: function() {
      var infoModel = new InfoModel,
          infoView  = new InfoView(infoModel);

      infoView.render();
    },

  });

  var initialize = function(){
    var app_router  = new AppRouter();
    Backbone.history.start({ pushState: true, root: '/Matices/' });
  };

  return {
    initialize: initialize
  };
});