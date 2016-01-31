define( [
  'backbone',
  'text!./works.hbs',
  'css!./works.css'
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