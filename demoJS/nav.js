/*导航条*/
import $ from 'jquery';


export function navInitAnimate(){
	var t = new TimelineMax();
	t.to('#menu',1,{left:0});
	t.to('.item',4,{rotation:360},1);
	t.to('.logo',1,{
		rotation:360,
		opacity:1
	},1);
	t.to('.nav',1,{top:0},2);
	t.to('.line',0.5,{left:6},3);
};

export function createNav(obj){
	var str ='<div class="wrapper">\
            <div class="logo">\
                <a href="#">\
                    <img src="img/sheel-logo.png" alt="logo">\
                </a>\
            </div>\
            <ul class="nav">\
                <li class="active"><a href="#">首页</a></li>\
                <li><a href="#">照片</a></li>\
                <li><a href="#">学海无涯</a></li>\
                <li><a href="#">随笔</a></li>\
                <li><a href="#">留言板</a></li>\
                <div class="line"></div>\
            </ul>\
            <div class="item">\
                <div class="item1"></div>\
                <div class="item2"></div>\
                <div class="item3"></div>\
                <div class="item4"></div>\
            </div>\
        </div>'
    $(obj).append($(str));
};

export function nav(){
	
	$('.nav').delegate('li','click',function(){
		var t = new TimelineMax();

		$('.nav li').removeClass('active');
		$(this).addClass('active');

		var $num = parseInt($(this).index()) * 82 + 6;
		t.to('.line',0.5,{left:$num},0);
		var $rotate = parseInt($(this).index()) * 90 + 360;

		t.to('.item',1,{rotation:$rotate},0);

		var arr = ['contentImg','photos','note','profile','memo'];
		$(this).find('a').attr('href','#'+arr[$(this).index()]);

	}).delegate('li','mouseenter',function(){
		var t = new TimelineMax();

		$(this).css('background','#4a8e2f');
		$(this).find('a').css('color','#32629b');

		var $rotate = parseInt($(this).index()) * 90 + 360 + 90;
		t.to('.item',0.3,{rotation:$rotate},0);

	}).delegate('li','mouseleave',function(){
		var t = new TimelineMax();

		$(this).css('background','');
		$(this).find('a').css('color','#000');

		var $rotate = parseInt($(this).index()) * 90 + 360;
		t.to('.item',0.3,{rotation:$rotate},0);
	});
};