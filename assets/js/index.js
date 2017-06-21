//by gyn
//官网首页js
//学科导航切换学科内容
$(".nav_txt li").mouseenter(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	$(".course_kind").show();
	$(".course_kind").find(".icon_fuli").eq($(this).index()).show().siblings().hide();
})
$(".sub_nav").mouseleave(function(){
	$(this).find(".nav_li").removeClass("cur");
	$(".course_kind").stop().hide("fast");
})
//新闻切换
// $(".hm_news .tab span").mouseenter(function(){
	// $(this).addClass("cur").siblings().removeClass("cur");
	// $(".news_list ul").eq($(this).index()).show().siblings().hide();
// })

//开班信息就业班与基础班间距
$(".kb_info .bd li").each(function(){
	$(this).children("a").eq(3).css("margin-bottom","12px");
})
$(".select").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var dd=$(this).children("dd");
		var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
		var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
		dt.click(function(){			
			dd.is(":hidden")?_show():_hide();
			$(this).children("i").css("background-image","url(./images/arrow.jpg)");				
		});
		dd.find("a").click(function(){dt.html($(this).html());_hide();});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		$("body").click(function(i){ 
			!$(i.target).parents(".select").first().is(s) ? _hide():"";					
		});
	})
	$(".select ul li").click(function(){
		$(this).parent().parent().parent().parent().siblings(".bd").children().children("li").eq($(this).index()).slideDown().siblings().slideUp();
	})
//判断底部横线
aList = $(".kb_info .bd li a");
var aListLength = aList.length;
if(aListLength > 0){
	for (var i = 0; i < aListLength; i++) {
		a = aList[i];
		if(!$(a).attr("href")){			
			$(a).css("border-bottom","none");
		}
	}
}

//校区环境切换
// $(".school_tt span").click(function(){
	// $(this).addClass("cur").siblings().removeClass("cur");
	// $(".school_box .slide_tu").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
// })

//校区环境切换
$(".school_tt span[file]").click(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	var path = $(this).attr("file")+ "?"+ new Date().getTime();
	$.get(path, function(data){
	   $(".school_box .slide_tu .bd").html(data);
	});
});
var allpath = $(".school_tt span[file]:first").attr("file")+ "?"+ new Date().getTime();
$.post(allpath, function(data){
	   $('.school_box .slide_tu .bd').html(data);
});
