//通用咨询
$(".zx li").mouseenter(function(){
	$(this).children("div").show();
})
$(".zx li").mouseleave(function(){
	$(this).children("div").stop().hide();
})	
$(window).scroll(function(){
	var A = $(window).scrollTop();
	if(A > 400){
		$("#back").css("visibility","visible");
	}else{
		$("#back").css("visibility","hidden");
	}
});
$("#back").click(function(){
	$("html,body").animate(
		{
			"scrollTop":0
		},500
	);	
})

//开班计划tab栏切换
$('.kb_dy .mytab .have').click(function(){
	$(this).addClass("now").siblings().removeClass("now");
	$(".kb_dy .kb_box").children(".kb").eq($(this).index()).addClass('mycur').siblings().removeClass("mycur");
});
$('.kb_dy .mytab .no').click(function(){
	alert("本校区暂未开设该课程");
});