define( [
  'jquery',
  'views/profileView'
],

function($, Profile) {

  function initialize() {
	var cv = new Profile();

	cv.create();
  }

  return {
    initialize : initialize
  }

});