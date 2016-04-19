define( [
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

});