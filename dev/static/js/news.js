$(function(){
		var query = window.location.search;
		idx = query.substr("?type=".length,1);	
	$(".header .link-list .item a").eq(3).addClass("active");
	var main = $(".main"),
		list = main.find(".list"),
		page = $("#page"),
		content = main.find(".content");
		content.eq(0).show();
		list.show().find(".item").eq(idx?idx:0).addClass("active");
	list.on("click", "li", function() {
		var idx = list.find("li").index(this);
		content.eq(idx).show().siblings().hide();
		list.show().find(".item").eq(idx).addClass("active").siblings().removeClass("active");
	})
	page.on("click",".item",function(){
		var idx = page.find(".item").index(this);
		page.find(".item").eq(idx).addClass("active").siblings().removeClass("active");
	})
	$("#logo").click(function(){
		window.location.href = "./index.html"
	})
	$("#list_0").on("click"," .new-item",function(){
		var idx = $("#list_0").find(".new-item").index(this);
		window.location.href = "./news_gs_"+idx+".html";
	})
	$("#list_1").on("click"," .new-item",function(){
		var idx = $("#list_1").find(".new-item").index(this);
		window.location.href = "./news_hy_"+idx+".html";
	})
})	
