require.config( {
    paths: {
        'jquery'      : '../../bower_components/jquery/dist/jquery.min',
        'underscore'  : '../../bower_components/underscore/underscore-min',
        'backbone'    : '../../bower_components/backbone/backbone-min',
        'text'        : '../../bower_components/requirejs-text/text',
        'css'         : '../../bower_components/require-css/css',
        'hbs'         : '../../bower_components/require-handlebars-plugin/hbs'
    },

    shim: {

        // 'jquery-knob' : {
        //   deps : ['jquery'],
        //   exports : '$'
        // },

        // 'handlebars' : {
        //   exports : 'Handlebars'
        // },

        'backbone' : {
            deps : ['underscore','jquery'],
            exports : 'Backbone'
        },

        'underscore' : {
            exports : '_'
        }
    }

});

require(
    ['./app/router'],
    function(Router) {
        new Router();
    }
);