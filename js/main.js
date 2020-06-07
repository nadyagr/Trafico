$(function(){

  $(".menu, .btn").on("click","a", function (event) {
    event.preventDefault(); 
    var id  = $(this).attr('href'),
    top = $(id).offset().top; 
  $('body,html').animate({scrollTop: top}, 1000); 
  });

  $(".faq__question").slice(0, 12).show();
  $('.faq-load__btn').on("click", function(e){
     e.preventDefault();
    $(".faq__question:hidden").slice(0, 2).slideDown().css("display", "block");
  });

  $('.faq__quest').on("click", function(e){
     e.preventDefault();
    $(this).next('.faq__answer').slideToggle(550);
    $(this).toggleClass('active');

  });

	$('.reviews__slider').slick({
		  infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		centerPadding: '180px',
  		prevArrow:'<button type="button" class="slick-prev slick-btn"><img src="images/slick-arrow.svg"></button>',
  		nextArrow:'<button type="button" class="slick-next slick-btn"><img src="images/slick-arrow.svg"></button>',
  		focusOnSelect: true,
      responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        }
      }
      ]
	});
 
  $('.mobile__menu').click(function (event) {
    event.preventDefault(); 
    $('.header__menu ul').slideToggle(550);
  });
});