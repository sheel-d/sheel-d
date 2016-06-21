
import $ from 'jquery';
import {data} from './profileData.js';

export function profileInit(){
	var arr = null;
	var json = [];
	var $width = parseInt($('.profile').width());
	var $height = parseInt($('.profile').height());

	for(let i=0;i<data.length;i++){
		createArticle(data[i].content,data[i].time);
		arr = randomNumber(40,20);
		json.push(positionNum($width,$height));

		$('.articleBox').eq(i).css({
			width : $width-80,
			height : $height-80
		});
		$('.article').eq(i).animate({
			width : ($width-80)/4,
			height : ($height-80)/2,
			transform : "skew("+ arr[0] +"deg," + arr[1] + "deg)",
			opacity : 1,
			top:json[i].top,
			left: json[i].left
		});
		$('.articleContent').eq(i).css({
			height: ($height-80)/2 - 34,
			padding: 3
		});
	}
};

function createArticle(content,time){
	var str = '<div class="article">\
                    <div class="articleContent">' + content + '</div>\
                    <p class="articleTime">' + time + '</p>\
                </div>';
    $('.articleBox').append($(str));
}

function randomNumber(num1,num2){
	var arr = [];
	for(let i = 0; i < arguments.length; i++){
		arr.push(Math.ceil(Math.random()*num1 - num2));
	}
	return arr;
}

function positionNum(width,height){ 

	var json = {};
	var minLeft = -((width-80)/4)/3;
	var maxLeft = (width-80) + minLeft;
	var minTop = -((height-80)/2)/5;
	var maxTop = height-80 + minTop;

	json.left = minMaxNum(minLeft,maxLeft);
	json.top = minMaxNum(minTop,maxTop);

	return json;
}

function minMaxNum(min,max){
	return Math.round(Math.random()*(max-min)+min);
}

export function profileEvent(){
	var $width = parseInt($('.articleBox').width()) + 80;
	var $height = parseInt($('.articleBox').height()) + 80;

	var leftMax = $width - ($width-80)/4 - 10;
	var topMax = $height - ($height-80)/2 - 10;

	$('.articleBox').delegate('.article','mouseenter',function(){//移入
		var $left = parseInt($(this).css('left'));
		var $top = parseInt($(this).css('top'));

		$(this).attr({
			_left : $left,
			_top : $top,
			_width : $(this).width(),
			_height : $(this).height() 
		});

		if( $left < 5 && $top > 5 && $top < topMax){

			$(this).animate({
				left : 5
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
		}else if( $top < 5 && $left > 5 && $left < leftMax){
			$(this).animate({
				top : 5
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
		}else if( $left > 5 && $left < leftMax && $top > topMax ){
			$(this).animate({
				top : topMax
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
		}else if( $left > leftMax && $top > 5 && $top < topMax){
			$(this).animate({
				left : leftMax
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
		}else if( $top < 5 && $left < 5 ){
			$(this).animate({
				top : 5,
				left : 5
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
		}else if( $top < 5 && $left > leftMax){
			$(this).animate({
				top : 5,
				left : leftMax
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
			
		}else if( $left < 5 && $top > topMax){
			$(this).animate({
				top : topMax,
				left : 5
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
			
		}else if( $left > leftMax && $top > topMax ){
			$(this).animate({
				top : topMax,
				left : leftMax
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});

		}else{
			$(this).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
		}
	}).delegate('.article','mouseleave',function(){//移出
		var $left = $(this).attr('_left');
		var $top = $(this).attr('_top');
		var $width = $(this).attr('_width');
		var $height = $(this).attr('_height');

		var arr = randomNumber(20,10);

		$('.mark').css('display','none');

		$(this).animate({
			left : $left,
			top : $top,
		}).css({
			border : 'none',
			transform : "skew("+ arr[0] +"deg," + arr[1] + "deg)",
			zIndex : 2,
			width : $width,
			height : $height
		});

	}).delegate('.article','click',function(){
		$('.mark').css({
			display : 'block'
		});
		$(this).css({
			width : $width * 0.8,
			height : $height * 0.8,
			zIndex : 4,
			transform : "skew(0deg,0deg)",
			left : $width * 0.1,
			top : $height * 0.1
		});
	});
};