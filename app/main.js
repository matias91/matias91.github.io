require.config( {
  paths: {
    'jquery'      : 'libs/JQuery',
    'jquery-knob' : 'libs/jquery-knob',
    'underscore'  : 'libs/underscore',
    'backbone'    : 'libs/backbone',
    'handlebars'  : 'libs/handlebars'
  },

  baseUrl: 'app',

  shim: {

    'jquery-knob' : {
      deps : ['jquery'],
      exports : '$'
    },

    'handlebars' : {
      exports : 'Handlebars'
    },

    'backbone' : {
      deps : ['underscore','jquery'],
      exports : 'Backbone'
    },

    'underscore' : {
      exports : '_'
    }
  }

});

require(['app'],
  function(app) {
    app.initialize();
  }
);