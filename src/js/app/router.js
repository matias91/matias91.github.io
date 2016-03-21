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
      var route = Backbone.history.getHash(),
          previousTab = $('a.active'),
          currentTab = $('a[href$="' + route + '"]'),
          container = $('#content');

      if (this.currentView) {
          this.currentView.remove();
          this.currentView.unbind();
      }

      previousTab.toggleClass('active');
      currentTab.toggleClass('active');

      this.currentView = view;
      container.fadeOut(200, function() {
        container.empty();
        container.append(this.currentView.render().el);
        this.currentView.el.className = route;
        container.fadeIn(200);
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
});