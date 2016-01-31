define( [
  'backbone',
  'text!./skills.hbs',
  'css!./skills.css'
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