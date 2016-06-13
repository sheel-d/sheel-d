/*第一屏*/
import $ from 'jquery';

export function userImg(){
	var $parentHeight = parseInt($('.c_user').height()) - 10;
	var $parentWidth = parseInt($('.c_user').width()) - 10 - $parentHeight;

	$('.userImg').css({
		'width' : $parentHeight,
		'height' : $parentHeight,
		'background-image' : 'url(./img/user-img.jpg)',
		'background-size' : 'cover',
		'background-position' : 'center center',
		'border-radius' : '50%',
		'margin':'5px'
	});
	$('.userContent').css({
		'position' : 'absolute',
		'left' : $parentHeight + 10,
		'top' : '0',
		'background-color' : '#FFF',
		'width' : $parentWidth,
		'height' : $parentHeight
	});
};

export function imgInitAnimate(){
	var iHeight = parseInt(document.documentElement.clientWidth);
	var $height = ( iHeight - parseInt($('.contentImg').width()) )/2;
	var t = new TimelineMax();
	t.to('.contentImg',1,{
		top:0,
		left:$height,
		opacity:1
	},4);
};

export function contentImgArr(){

	var arr = [];
	var $len = $('.c_img ul').find('li').length;
	for(let q = 0; q < $len; q++){
		var $img = $('.c_img ul').find('li').eq(q).find('img');
		var $liLeft = $('.c_img ul').find('li').eq(q).css('left');
		var $liTop = $('.c_img ul').find('li').eq(q).css('top');
		var $liOpacity = $('.c_img ul').find('li').eq(q).css('opacity');
		var $liZindex = $('.c_img ul').find('li').eq(q).css('zIndex');
		var $liBorder = $('.c_img ul').find('li').eq(q).css('borderWidth');
		arr.push( [parseInt($liLeft),parseInt($liTop),$liOpacity,parseInt($liZindex),$img.width(),$liBorder] );
	}

	return arr;
};

export function prevAnimate(obj){

	$('.prev').on('click',function(){
		obj.push(obj[0]);
	    obj.shift();
	    var $len = $('.c_img ul').find('li').length;

	    for(let w = 0; w < $len; w++){
	    	var $img = $('.c_img ul').find('li').eq(w).find('img');
	    	var $li = $('.c_img ul').find('li').eq(w);
	    	$('.c_img ul').find('li').eq(w).css('z-index',obj[w][3]);
	    	$li.animate({
	    		left : obj[w][0],
	            top : obj[w][1],
	            opacity : obj[w][2],
	            "border-width" : obj[w][5]
	    	});
	    	$img.animate({
	    		width : obj[w][4]
	    	});
	    }
	});
};

export function nextAnimate(obj){

	$('.next').on('click',function(){
		obj.unshift(obj[obj.length-1]);
	    obj.pop();
	    var $len = $('.c_img ul').find('li').length;

	    for(let e = 0; e < $len; e++){
	        var $img = $('.c_img ul').find('li').eq(e).find('img');
	    	var $li = $('.c_img ul').find('li').eq(e);
	    	$('.c_img ul').find('li').eq(e).css('z-index',obj[e][3]);
	    	$li.animate({
	    		left : obj[e][0],
	            top : obj[e][1],
	            opacity : obj[e][2],
	            "border-width" : obj[e][5]
	    	});
	    	$img.animate({
	    		width : obj[e][4]
	    	});
	    }
	});
};

export function imgAnimate(obj){

	var timer = null;
	var $len = $('.c_img ul').find('li').length;
	timer = setInterval(function(){			
		obj.unshift(obj[obj.length-1]);
        obj.pop();

        for(let e = 0; e < $len; e++){
            var $img = $('.c_img ul').find('li').eq(e).find('img');
        	var $li = $('.c_img ul').find('li').eq(e);
        	$('.c_img ul').find('li').eq(e).css('z-index',obj[e][3]);
        	$li.animate({
        		left : obj[e][0],
                top : obj[e][1],
                opacity : obj[e][2],
                "border-width" : obj[e][5]
        	});
        	$img.animate({
        		width : obj[e][4]
        	});
        }
	},3000);

	$('.next').on('mouseenter',function(){
		clearInterval(timer);
	}).on('mouseleave',function(){
		timer = setInterval(function(){			
			obj.unshift(obj[obj.length-1]);
	        obj.pop();

	        for(let e = 0; e < $len; e++){
	            var $img = $('.c_img ul').find('li').eq(e).find('img');
	        	var $li = $('.c_img ul').find('li').eq(e);
	        	$('.c_img ul').find('li').eq(e).css('z-index',obj[e][3]);
	        	$li.animate({
	        		left : obj[e][0],
	                top : obj[e][1],
	                opacity : obj[e][2],
	                "border-width" : obj[e][5]
	        	});
	        	$img.animate({
	        		width : obj[e][4]
	        	});
	        }
		},3000);
	});

	$('.prev').on('mouseenter',function(){
		clearInterval(timer);
	}).on('mouseleave',function(){
		timer = setInterval(function(){			
			obj.unshift(obj[obj.length-1]);
	        obj.pop();

	        for(let e = 0; e < $len; e++){
	            var $img = $('.c_img ul').find('li').eq(e).find('img');
	        	var $li = $('.c_img ul').find('li').eq(e);
	        	$('.c_img ul').find('li').eq(e).css('z-index',obj[e][3]);
	        	$li.animate({
	        		left : obj[e][0],
	                top : obj[e][1],
	                opacity : obj[e][2],
	                "border-width" : obj[e][5]
	        	});
	        	$img.animate({
	        		width : obj[e][4]
	        	});
	        }
		},3000);
	});
};

export function cUserHeight(){
	var $height = parseInt($('.contentImg').eq(0).css('height'));
	var $cHeight = $height - parseInt($('.c_img').eq(0).css('height')) - 10;
	$('.c_user').css({
		'height': $cHeight,
		'margin-top':'8px'
	});
};

export function hide(){//未完成
	var timer1 = null;
	$('.ImgContent').off('mouseenter').on('mouseenter',function(){
		$('.prevHide').animate({
			left: 20,
			opacity: 1
		},1000);
		$('.nextHide').animate({
			right: 20,
			opacity: 1
		},1000);
	}).off('mouseleave').on('mouseleave',function(){
		timer1 = setInterval(function(){
			$('.prevHide').animate({
				left: -76,
				opacity: 0
			});
			$('.nextHide').animate({
				right: -76,
				opacity: 0
			});
		},100);
	});

	$('.prevHide').off('mouseenter').on('mouseenter',function(){
		clearInterval(timer1);
	}).off('mouseleave').on('mouseleave',function(){
		$('.prevHide').animate({
			left: -76,
			opacity: 0
		});
		$('.nextHide').animate({
			right: -76,
			opacity: 0
		});
	});
};