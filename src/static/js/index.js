;
 $(function() {
 	var mySwiper = new Swiper('#banner', {
 		autoplay: 4000,
 		loop: true,
 		pagination: '.swiper-pagination',
 	})
 	var levSwiper = new Swiper('#banner', {
 		loop: true,
 		nextButton: document.getElementById("right"),
 		prevButton: document.getElementById("left"),
 	})
	$(".header .link-list .item a").eq(0).addClass("active")
 })
