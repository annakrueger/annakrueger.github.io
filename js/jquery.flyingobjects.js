/* flyingObjects jQuery Plugin
written by: Nolan R Campbell
NuvuScripts@gmail.com
http://flyingobjects.nrcstudios.info
http://be.net/nrcstudios
http://codecanyon.net/user/NuvuScripts
*/

(function($){

   //set options prior to each functions
  $.fn.flyingobjects = function( options ) {
     // defaults
		options = $.extend({

         images: ["",""], //array of images
         totalobjects: 30, //total number of images added to the target container
         easing: "swing", //image animation easing
         speed: 1100, //speed of animation the lower the number the faster the animation
         zindex: 2, //set the z-index of the images
         addclass: "", //add a class to the images for DOM manipulation or styling
         initialize: "mouseover" // trigger to start the animation set to "load" or "mouseover"

		}, options);






//	Generate Random Speed
fObjects.prototype.speed = function(evt) {
	this.duration = (randomInt(10) + 5) * options.speed;

	return this;
};




function randomInt(max) {
//	Generate a random integer
	return Math.floor(Math.random() * max);
}


  function fObjects() {

	this.images = options.images;

//	Randomly Pick a fObjects Model
	this.image = this.images[randomInt(this.images.length)];
	this.file = this.image;

//	Create a fObjects DOM
	this.element = document.createElement('img');

	this.speed().newPoint().display().newPoint().fly();
};


  return this.each(function() {

       var $this = $(this);

    //extend settings as options
    var o = $.metadata ? $.extend({}, options, $this.metadata()) : options;


   fObjects.prototype.display = function() {
	$(this.element)
    .addClass(options.addclass)
		.attr('src', this.file)
		.css('position', 'absolute')
        .css('z-index', options.zindex)
		.css('top', this.pointY)
		.css('left', this.pointX);
        $this.append(this.element);


	return this;
};




//	Animate fObjects Movements
fObjects.prototype.fly = function() {
	var self = this;
	$(this.element).animate({
		"top": this.pointY,
		"left": this.pointX
	},this.duration, options.easing, function(){
      //if options initialize "mouseover" else "load" bind events
     if(options.initialize == "mouseover"){$(this).mousemove(function(){ self.speed().newPoint().fly();});}else if(options.initialize == "load"){
      self.speed().newPoint().fly();
     }

	});
};
//	Generate a Random Position
fObjects.prototype.newPoint = function() {
	this.pointX = randomInt($this.width());
	this.pointY = randomInt($this.height());

	return this;
};



//	Display the fObjects

 //loop total number of objects and create new objects
$(function(){
	var total = o.totalobjects;
	var fobjects = [];

	for (var i = 0; i < total; i++){
		fobjects[i] = new fObjects();
	}
});






 }); //end each function

  };

})( jQuery );
