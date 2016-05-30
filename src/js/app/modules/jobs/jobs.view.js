define( [
  'backbone',
  'text!./jobs.hbs'
],

function(Backbone, template) {
  'use strict';

  var JobsView = Backbone.View.extend({

    render: function() {
        this.$el.html(template);
        return this;
    },

  });

  return JobsView;

});