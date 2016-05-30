define( [
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

});