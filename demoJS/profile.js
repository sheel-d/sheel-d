/*第四屏*/
import $ from 'jquery';

export function profileInit(){
	var arr = null;
	var json = [];
	var $width = parseInt($('.profile').width());
	var $height = parseInt($('.profile').height());

	var data = [
		{
			item : '标题1',
			content : 'hello',
			time : '2016-6-12'
		},
		{
			item : '标题2',
			content : 'hello2',
			time : '2016-6-13'
		},
		{
			item : '标题3',
			content : 'hello3',
			time : '2016-6-14'
		},
		{
			item : '标题4',
			content : 'hello4',
			time : '2016-6-15'
		},
		{
			item : '标题5',
			content : 'hello4',
			time : '2016-6-16'
		}
	]; 

	for(let i=0;i<data.length;i++){
		createArticle(data[i].item,data[i].content,data[i].time);
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
			top:json[i].top,
			left: json[i].left
		});
		$('.articleContent').eq(i).css({
			height: ($height-80)/2 - 74,
			padding: 3
		});
	}
};

function createArticle(item,content,time){
	var str = '<div class="article">\
                    <h3>' + item + '</h3>\
                    <div class="articleContent"><p>' + content + '</p></div>\
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
	var $width = parseInt($('.profile').width()) - 80 - parseInt($('.article').width());
	var $height = parseInt($('.profile').height()) - 80 - parseInt($('.article').height());

	$('.articleBox').delegate('.article','mouseenter',function(){//移入
		var $left = parseInt($(this).css('left'));
		var $top = parseInt($(this).css('top'));
		$(this).attr('_left',$left);
		$(this).attr('_top',$top);

		if( $left < 5 && $top > 5 ){ //$width,$height找得不对

			$(this).animate({
				left : 5,
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
		}else if( $top < 5 && $left > 5 ){
			$(this).animate({
				top : 5,
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
		}else if( $left > 5 && $top > $height ){
			$(this).animate({
				top : $height,
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
		}else if( $left > $width && $top > 5){
			$(this).animate({
				left : $left,
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
		}else if( $top < 5 && $left > $width){
			$(this).animate({
				top : 5,
				left : $left
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
		}else if( $left < 5 && $top > $height){
			$(this).animate({
				top : $height,
				left : 5
			}).css({
				border : '5px solid #fff',
				transform : 'skew(0deg,0deg)',
				zIndex : 4
			});
		}else if( $left > $width && $top > $height ){
			$(this).animate({
				top : $height,
				left : $width
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
		console.log($(this).attr('_left'));
		console.log($(this).attr('_top'));

		var arr = randomNumber(20,10);
		$(this).css({
			border : 'none',
			transform : "skew("+ arr[0] +"deg," + arr[1] + "deg)",
			zIndex : 2
		});
	}).delegate('.article','click',function(){
		console.log(3);
	});
};