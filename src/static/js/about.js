;
$(function() {
	var query = window.location.search;
		idx = query.substr("?type=".length,1);		
	$(".header .link-list .item a").eq(4).addClass("active");
	var main = $("#main"),
		list = main.find(".list"),
		content = main.find(".toggle");
		content.eq(0).show();
		list.show().find(".item").eq(idx?idx:0).addClass("active").siblings().removeClass("active");
		if(idx){
			list.show().find(".item").eq(idx).addClass("active");
			content.eq(idx).show().siblings().hide();
			list.show().find(".item").eq(idx).addClass("active").siblings().removeClass("active");
		}
	list.on("click", "li", function() {
		var idx = list.find("li").index(this);
		content.eq(idx).show().siblings().hide();
		list.show().find(".item").eq(idx).addClass("active").siblings().removeClass("active");
	})
	$("#logo").click(function(){
		window.location.href = "./index.html"
	})
})
