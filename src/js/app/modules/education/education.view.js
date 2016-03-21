define( [
  'backbone',
  'text!./education.hbs',
  'css!./education.css'
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

});