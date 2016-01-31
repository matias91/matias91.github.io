define( [
  'backbone',
  'text!./personal.hbs',
  'css!./personal.css'
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

});