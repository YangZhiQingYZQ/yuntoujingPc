;
 $(function() {
 	var mySwiper = new Swiper('#banner', {
 		autoplay: 3000,
 		loop: true,
 		pagination: '.swiper-pagination',
		paginationClickable:true
 	}),
 	levSwiper = new Swiper('#swiper-lev', {
 		loop: true,
		slidesPerView :'auto',
		preventClicks :true,
 		nextButton: document.getElementById("right"),
 		prevButton: document.getElementById("left"),
 	}),
	lev_list_0 = $("#lev_0_toggle"),
	toggle_lev0 = $(".lev-0 .a_toggle"),
	lev_list_1 = $(".lev-0 #lev-0-list"),
	lev_list_2 = $(".lev-0 #lev-0-list1"),
	lev_2_nav = $("#lev_2_nav"),
	lev_2_center = $(".lev-2 .ov"),
	lev_3_nav = $("#lev_3_nav"),
	toggle_lev3 = $(".toggle-lev3 .toggle-lev3-item"),
	btn_link = "../view/about.html?type=0";
	
	lev_list_0.find(".item").eq(0).addClass("active");
	toggle_lev0.eq(0).addClass("active");
	lev_2_nav.find('.item').eq(0).addClass("active");
	lev_2_center.eq(0).addClass("active");
	lev_3_nav.find(".item").eq(0).addClass("active");
	
	$("#swiper-lev").on("click",".img",function(){
		console.log(this)
		window.location.href = "./case.html"
	})
	$(".header .link-list .item a").eq(0).addClass("active");
	lev_list_0.on("click",".item",function(){
		var idx = lev_list_0.find(".item").index(this);
		lev_list_0.find(".item").eq(idx).addClass("active").siblings().removeClass("active");
		toggle_lev0.eq(idx).addClass("active").siblings().removeClass("active");
	})
	lev_list_1.on("click",".item",function(){
		var idx = lev_list_1.find(".item").index(this);
		switch(idx){
			case 0:
				return window.location.href = "../view/product.html?type=0";
			case 1:
				return window.location.href = "../view/product.html?type=0";
			case 2:
				return window.location.href = "../view/product.html?type=0";
		}
	})
	lev_list_2.on("click",".item",function(){
		var idx = lev_list_2.find(".item").index(this);
		switch(idx){
			case 0:
				return window.location.href = "../view/product.html?type=1";
			case 1:
				return window.location.href = "../view/product.html?type=1";
			case 2:
				return window.location.href = "../view/product.html?type=1";
		}
	})
	lev_2_nav.on("click",".item",function(){
		var idx = lev_2_nav.find(".item").index(this);
		lev_2_nav.find(".item").eq(idx).addClass("active").siblings().removeClass("active");
		lev_2_center.eq(idx).addClass("active").siblings().removeClass("active");
	})
	$(".lev-2 .btn").click(function(){
		return window.location.href = "../view/news.html?type=0";
	})
	lev_3_nav.on("click",".item",function(){
		var idx = lev_3_nav.find(".item").index(this);
		lev_3_nav.find(".item").eq(idx).addClass("active").siblings().removeClass("active");
		toggle_lev3.eq(idx).show().siblings().hide();
		switch(idx){
			case 0:
				return btn_link = "../view/about.html?type=0";
			case 1:
				return btn_link = "../view/about.html?type=1";
			case 2:
				return btn_link = "../view/about.html?type=2";
		}
	})
	
	$(".lev-3 .btn").click(function(){
		return window.location.href = btn_link;
	})
	$(".lev-3 .right").click(function(){
		return window.location.href = "../view/about.html?type=3";
	})
	$(".lev-2 .center").on("click",".lev-2-item",function(){
		return window.location.href = "../view/news.html"
	})
	$(".lev-2 .center .pic").click(function(){
		return window.location.href = "../view/news.html"
	})
	$("#logo").click(function(){
		window.location.href = "./index.html"
	})
 })
