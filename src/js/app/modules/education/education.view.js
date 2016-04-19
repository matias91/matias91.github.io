define( [
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

});