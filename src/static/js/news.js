$(function(){
	$(".header .link-list .item a").eq(3).addClass("active");
	var main = $(".main"),
		list = main.find(".list"),
		page = $("#page"),
		content = main.find(".content");
		content.eq(0).show();
		list.show().find(".item").eq(0).addClass("active");
	list.on("click", "li", function() {
		var idx = list.find("li").index(this);
		content.eq(idx).show().siblings().hide();
		list.show().find(".item").eq(idx).addClass("active").siblings().removeClass("active");
	})
	page.on("click",".item",function(){
		var idx = page.find(".item").index(this);
		page.find(".item").eq(idx).addClass("active").siblings().removeClass("active");
	})
})	
