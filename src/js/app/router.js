define([
  'backbone',
  './modules/personal/personal.view',
  './modules/jobs/jobs.view',
  './modules/education/education.view',
  './modules/skills/skills.view'
],

function(Backbone, PersonalView, JobsView, EducationView, SkillsView) {
  var Router = Backbone.Router.extend({
    routes: {
      'personal' : 'showPersonalView',
      'jobs': 'showJobsView',
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
          container = $('#content .info'),
          content;

      previousTab.toggleClass('active');
      currentTab.toggleClass('active');

      this.currentView = view;
      container.animate({opacity: 0}, 500, function() {
        content = $(this.currentView.render().el);
        container.html(content);
        this.currentView.el.className = route;
        container.animate({opacity: 1}, 500);
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

    showJobsView: function() {
      var jobsView = new JobsView();
      this.changeView(jobsView);
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