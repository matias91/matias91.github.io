define([
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
      if (this.currentView) {
          this.currentView.remove();
          this.currentView.unbind();
          if (this.currentView.onClose) {
              this.currentView.onClose();
          }
      }

      this.currentView = view;
      $('#content').empty();
      $('#content').append(this.currentView.render().el);
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
});