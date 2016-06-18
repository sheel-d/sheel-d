/*导航条*/
import $ from 'jquery';
import {workAnimate} from './work.js';

export function createNav(obj){
	var str ='<div class="wrapper">\
            <div class="logo">\
                <a href="#">\
                    <img src="img/sheel-logo.png" alt="logo">\
                </a>\
            </div>\
            <ul class="nav">\
                <li _show=reveal class="active"><a href="#">首页</a></li>\
                <li><a>照片</a></li>\
                <li><a>学海无涯</a></li>\
                <li><a>随笔</a></li>\
                <li><a>留言板</a></li>\
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

export function navEvent(){

	$('.nav').delegate('li','click',function(){
		var $mainHeight = parseInt($('#main').height());

		var $index = $('.nav').find('.active').index();//

		var t = new TimelineMax();

		$('.nav li').removeClass('active');
		$(this).addClass('active');

		var $num = parseInt($(this).index()) * 82 + 6;
		t.to('.line',0.5,{left:$num},0);
		var $rotate = parseInt($(this).index()) * 90 + 360;

		t.to('.item',1,{rotation:$rotate},0);

		var $text = $(this).find('a').text();
		var $conTop = parseInt($('.contentImg').css('top'));
		var $nTop = parseInt($('.note').css('top'));
		var $wTop = parseInt($('.work').css('top'));
		var $pTop = parseInt($('.profile').css('top'));
		var $mTop = parseInt($('.memo').css('top'));

		if($text == '首页'){

			if( $conTop == '85'){
				t.to('.scrollBar',1,{
					opacity:0.5,
					top:0
				},0);
				t.to('.scrollBar',1,{opacity:0},4);
			}else{
				verdict($index,$mainHeight);
				$('.contentImg').css({
					opacity:1,
					top:85
				});
				//首页动画
				t.to('.scrollBar',1,{
					opacity:0.5,
					top:0
				},0);
				t.to('.scrollBar',1,{opacity:0},4);
			}

		} else if($text == '照片'){

			if( $nTop == '85'){
				t.to('.scrollBar',1,{
					opacity:0.5,
					top:$mainHeight/5
				},0);
				t.to('.scrollBar',1,{opacity:0},4);
			}else{
				verdict($index,$mainHeight);
				$('.note').css({
					opacity:1,
					top:85
				});
				t.to('.scrollBar',1,{
					opacity:0.5,
					top:$mainHeight/5
				},0);
				t.to('.scrollBar',1,{opacity:0},4);
			}

		} else if($text == '学海无涯'){

			if( $wTop == '85'){
				t.to('.scrollBar',1,{
					opacity:0.5,
					top:$mainHeight/5 * 2
				},0);
				t.to('.scrollBar',1,{opacity:0},4);
			}else{
				verdict($index,$mainHeight);
				$('.work').css({
					opacity:1,
					top:85
				});
				t.to('.scrollBar',1,{
					opacity:0.5,
					top:$mainHeight/5 * 2
				},0);
				t.to('.scrollBar',1,{opacity:0},4);
				workAnimate();
			}

		}else if($text == '随笔'){

			if( $pTop == '85'){
				t.to('.scrollBar',1,{
					opacity:0.5,
					top:$mainHeight/5 * 3
				},0);
				t.to('.scrollBar',1,{opacity:0},4);
			}else{
				verdict($index,$mainHeight);
				$('.profile').css({
					opacity:1,
					top:85
				});
				t.to('.scrollBar',1,{
					opacity:0.5,
					top:$mainHeight/5 * 3
				},0);
				t.to('.scrollBar',1,{opacity:0},4);
			}

		}else if($text == '留言板'){

			if( $mTop == '85'){
				t.to('.scrollBar',1,{
					opacity:0.5,
					top:$mainHeight/5 * 4
				},0);
				t.to('.scrollBar',1,{opacity:0},4);
			}else{
				verdict($index,$mainHeight);
				$('.memo').css({
					opacity:1,
					top:85
				});
				t.to('.scrollBar',1,{
					opacity:0.5,
					top:$mainHeight/5 * 4
				},0);
				t.to('.scrollBar',1,{opacity:0},4);
			}

		}

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

function verdict(index,height){
	if( index == 0){
		$('.contentImg').css({
			opacity:0,
			top:height
		});
	}else if( index == 1){
		$('.note').css({
			opacity:0,
			top:height
		});
	}else if( index == 2){
		$('.work').css({
			opacity:0,
			top:height
		});
	}else if( index == 3){
		$('.profile').css({
			opacity:0,
			top:height
		});
	}else if( index == 4){
		$('.memo').css({
			opacity:0,
			top:height
		});
	}
	workStyle();
}
function workStyle(){
	$('.t-work').css({
		width:0
	});
	$('.circle').css({
		opacity:0,
		width:0,
		height:0
	});
	$('.v-line').css({
		opacity:0,
		height:0
	});
	$('.v-content').css({
		opacity:0
	});
}