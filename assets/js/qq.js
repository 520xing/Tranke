var flag=1;
$('#rightArrow').click(function(){
	if(flag==1){
		$("#floatDivBoxs").animate({right: '-141px'},300);
		$(this).animate({right: '-5px'},300);
		$(this).css('background-position','-42px 0');
		flag=0;
	}else{
		$("#floatDivBoxs").animate({right: '0'},300);
		$(this).animate({right: '136px'},300);
		$(this).css('background-position','0px 0');
		flag=1;
	}
});

function WeixinTop(){
	this.init();
}
WeixinTop.prototype = {
	constructor: WeixinTop,
	init: function(){		
		this._initBackTop();
	},	
	_initBackTop: function(){
		var $backTop = this.$backTop = $('<div class="cbbfixed">'+
			'<a class="gotop cbbtn">'+
			'<span class="up-icon"></span>'+
			'</a>'+
			'</div>');
		$('body').append($backTop);
		$backTop.click(function(){
			$("html, body").animate({
				scrollTop: 0
			}, 120);
		});
		var timmer = null;
		$(window).bind("scroll",function() {
            var d = $(document).scrollTop(),
            e = $(window).height();
            0 < d ? $backTop.css("bottom", "60px") : $backTop.css("bottom", "-90px");
			clearTimeout(timmer);
			timmer = setTimeout(function() {
                clearTimeout(timmer)
            },100);
	   });
	}
}
var WeixinTop = new WeixinTop();