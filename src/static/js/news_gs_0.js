$(function() {
	$("#logo").click(function(){
		return window.location.href = "./index.html"
	})
	$("#list").on("click", ".item", function() {
		var arr = [
			"./news_gs_0.html",
			"./news_gs_1.html",
			"./news_gs_2.html",
		]
		var idx = $("#list .item").index(this);
		window.location.href = arr[idx];
	})
})
