document.body.onload = function() {

	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') )
		{
			preloader.classList.add('done');
		}
	}, 1000);

}

    const iconMenu = document.querySelector('.menu_icon');
  if(iconMenu){
    const ourMenu = document.querySelector('.menu');
    iconMenu.addEventListener("click", function(e) {
      iconMenu.classList.toggle("animate");
      ourMenu.classList.toggle("open");
    });

  }

  $('.testimonial').slick({
  	  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  }

  	);