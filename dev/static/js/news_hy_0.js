$(function() {
	$("#logo").click(function(){
		return window.location.href = "./index.html"
	})
	$("#list").on("click", ".item", function() {
		var arr = [
			"./news_hy_0.html",
			"./news_hy_1.html",
			"./news_hy_2.html",
			"./news_hy_3.html",
		]
		var idx = $("#list .item").index(this);
		window.location.href = arr[idx];
	})
})
d