define( [
  'jquery-knob',
  'underscore'
],

function($, _) {

  var Profile = function() {

    var menu = {
        back: '.back',
        present: '.presentation',
        person: '.personal',
        edu: '.education',
        work: '.works',
        skill: '.skills',
        cont: '.contact'
    };

    create = function() {

      $( document ).ready(function() {
        $('.presentation').addClass('in');
        $('.dial').knob({
            'readOnly' : 'true',
            'width'    : '100',
            'height'   : '110',
            'fgColor'  : '#bdc3c7',
            'draw' : function () {
              $(this.i).val(this.cv + '%');
            }
          });
      });

      this.onButtonPressed();
      this.onMenuPressed();
      this.onBackPressed();
    };

    menuAppear = function() {

      $('.presentation').removeClass('in');
      $('.main-menu').addClass('slide-in');
    };

    infoAppear = function(clicked) {

      if ( clicked != 'present') {
        $('.info').fadeIn();
        $(menu[clicked]).fadeIn();
        this.actived = menu[clicked];
      } else {
        $('.main-menu').addClass('slide-out');
        $('.main-menu').removeClass('slide-in');
        setTimeout( function() {
          $('.main-menu').removeClass('slide-out');
        }, 1000);
        $('.presentation').addClass('in');
      }

    };

    infoDissappear = function() {

        $('.info').fadeOut();
        $(this.actived).fadeOut();
    };

    onMenuPressed = function() {
      var that = this,
          clicked;

      $('.menu').click(function() {
        clicked = this.id;
        setTimeout( function() {
          that.infoAppear(clicked);
        }, 500);
      });
    };

    onButtonPressed = function() {
      var that = this;

      $('.button').click(function() {
        that.menuAppear();
      });
    };

    onBackPressed = function() {
      var that = this;

      $('.back').click(function() {
        that.infoDissappear();
      });

    };

    return {
      create           : create,
      menuAppear       : menuAppear,
      onMenuPressed    : onMenuPressed,
      infoAppear       : infoAppear,
      infoDissappear   : infoDissappear,
      onButtonPressed  : onButtonPressed,
      onBackPressed    : onBackPressed
    };

  }

  return Profile;

});