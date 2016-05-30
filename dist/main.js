define( [
  'jquery',
  'views/profileView'
],

function($, Profile) {

  function initialize() {
	var cv = new Profile();

	cv.create();
  }

  return {
    initialize : initialize
  }

});;define( [
  'backbone',
  'text!./education.hbs'
],

function(Backbone, template) {
  'use strict';

  var EducationView = Backbone.View.extend({

    render: function() {
        this.$el.html(template);
        return this;
    },

  });

  return EducationView;

});;define( [
  'backbone',
  'text!./personal.hbs'
],

function(Backbone, template) {
  'use strict';

  var PersonalView = Backbone.View.extend({

    render: function() {
        this.$el.html(template);
        return this;
    },

  });

  return PersonalView;

});;define( [
  'backbone',
  'text!./skills.hbs',
  'bootstrap'
],

function(Backbone, template) {
  'use strict';

  var SkillsView = Backbone.View.extend({

    render: function() {
        this.$el.html(template);
        return this;
    },

  });

  return SkillsView;

});;define( [
  'backbone',
  'text!./works.hbs'
],

function(Backbone, template) {
  'use strict';

  var WorksView = Backbone.View.extend({

    render: function() {
        this.$el.html(template);
        return this;
    },

  });

  return WorksView;

});;define([
  'backbone',
  './modules/personal/personal.view',
  './modules/works/works.view',
  './modules/education/education.view',
  './modules/skills/skills.view'
],

function(Backbone, PersonalView, WorksView, EducationView, SkillsView) {
  var Router = Backbone.Router.extend({
    routes: {
      'personal' : 'showPersonalView',
      'works': 'showWorksView',
      'education': 'showEducationView',
      'skills': 'showSkillsView',
      '*actions': 'defaultRoute'
    },

    initialize: function() {
      Backbone.history.start();
    },

    changeView: function(view) {
      var route = Backbone.history.getHash(),
          previousTab = $('a.active'),
          currentTab = $('a[href$="' + route + '"]'),
          container = $('#content .info');

      previousTab.toggleClass('active');
      currentTab.toggleClass('active');

      this.currentView = view;
      container.animate({opacity: 0, height: 'hide'}, 500, function() {
        container.empty();
        container.append(this.currentView.render().el);
        this.currentView.el.className = route;
        container.animate({opacity: 1, height: 'show'}, 500);
      }.bind(this));

    },

    defaultRoute: function() {
      this.navigate('personal', true);
      this.showPersonalView();
    },

    showPersonalView: function() {
      var personalView = new PersonalView();
      this.changeView(personalView);
    },

    showWorksView: function() {
      var worksView = new WorksView();
      this.changeView(worksView);
    },

    showEducationView: function() {
      var educationView = new EducationView();
      this.changeView(educationView);
    },

    showSkillsView: function() {
      var skillsView = new SkillsView();
      this.changeView(skillsView);
    }
  });

  return Router;
});;/*
 RequireJS text 1.0.2 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
(function(){var k=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],n=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,o=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,i=typeof location!=="undefined"&&location.href,p=i&&location.protocol&&location.protocol.replace(/\:/,""),q=i&&location.hostname,r=i&&(location.port||void 0),j=[];define(function(){var g,h,l;typeof window!=="undefined"&&window.navigator&&window.document?h=function(a,c){var b=g.createXhr();b.open("GET",a,!0);b.onreadystatechange=
function(){b.readyState===4&&c(b.responseText)};b.send(null)}:typeof process!=="undefined"&&process.versions&&process.versions.node?(l=require.nodeRequire("fs"),h=function(a,c){c(l.readFileSync(a,"utf8"))}):typeof Packages!=="undefined"&&(h=function(a,c){var b=new java.io.File(a),e=java.lang.System.getProperty("line.separator"),b=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(b),"utf-8")),d,f,g="";try{d=new java.lang.StringBuffer;(f=b.readLine())&&f.length()&&
f.charAt(0)===65279&&(f=f.substring(1));for(d.append(f);(f=b.readLine())!==null;)d.append(e),d.append(f);g=String(d.toString())}finally{b.close()}c(g)});return g={version:"1.0.2",strip:function(a){if(a){var a=a.replace(n,""),c=a.match(o);c&&(a=c[1])}else a="";return a},jsEscape:function(a){return a.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")},createXhr:function(){var a,c,b;if(typeof XMLHttpRequest!==
"undefined")return new XMLHttpRequest;else for(c=0;c<3;c++){b=k[c];try{a=new ActiveXObject(b)}catch(e){}if(a){k=[b];break}}if(!a)throw Error("createXhr(): XMLHttpRequest not available");return a},get:h,parseName:function(a){var c=!1,b=a.indexOf("."),e=a.substring(0,b),a=a.substring(b+1,a.length),b=a.indexOf("!");b!==-1&&(c=a.substring(b+1,a.length),c=c==="strip",a=a.substring(0,b));return{moduleName:e,ext:a,strip:c}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(a,c,b,e){var d=g.xdRegExp.exec(a),
f;if(!d)return!0;a=d[2];d=d[3];d=d.split(":");f=d[1];d=d[0];return(!a||a===c)&&(!d||d===b)&&(!f&&!d||f===e)},finishLoad:function(a,c,b,e,d){b=c?g.strip(b):b;d.isBuild&&(j[a]=b);e(b)},load:function(a,c,b,e){if(e.isBuild&&!e.inlineText)b();else{var d=g.parseName(a),f=d.moduleName+"."+d.ext,m=c.toUrl(f),h=e&&e.text&&e.text.useXhr||g.useXhr;!i||h(m,p,q,r)?g.get(m,function(c){g.finishLoad(a,d.strip,c,b,e)}):c([f],function(a){g.finishLoad(d.moduleName+"."+d.ext,d.strip,a,b,e)})}},write:function(a,c,b){if(c in
j){var e=g.jsEscape(j[c]);b.asModule(a+"!"+c,"define(function () { return '"+e+"';});\n")}},writeFile:function(a,c,b,e,d){var c=g.parseName(c),f=c.moduleName+"."+c.ext,h=b.toUrl(c.moduleName+"."+c.ext)+".js";g.load(f,b,function(){var b=function(a){return e(h,a)};b.asModule=function(a,b){return e.asModule(a,h,b)};g.write(a,f,b,d)},d)}}})})();
;require.config( {
    paths: {
        'jquery'      : '../../bower_components/jquery/dist/jquery.min',
        'underscore'  : '../../bower_components/underscore/underscore-min',
        'backbone'    : '../../bower_components/backbone/backbone-min',
        'text'        : '../../bower_components/requirejs-text/text',
        'hbs'         : '../../bower_components/require-handlebars-plugin/hbs',
        'bootstrap'   : '../../bower_components/bootstrap/dist/js/bootstrap.min'
    },

    shim: {
        'backbone' : {
            deps : ['underscore','jquery'],
            exports : 'Backbone'
        },

        'bootstrap' : {
            deps : ['jquery'],
            exports : 'Bootstrap'
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