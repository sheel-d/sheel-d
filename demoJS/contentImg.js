/*第一屏*/
import $ from 'jquery';

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
};

export function cUserHeight(){
	var $height = parseInt($('.contentImg').eq(0).css('height'));
	var $cHeight = $height - parseInt($('.c_img').eq(0).css('height')) - 10;
	var $parentHeight = $cHeight - 10;

	$('.c_user').css({
		'height': $cHeight,
		'margin-top':'8px'
	});

	$('.userContent').css('height',$parentHeight);
};

export function createImg(){
	var str = '<div class="c_img">\
                <ul>\
                    <li class="img_0"><img src="./img/contentImg1.jpg" style="width:100px"></li>\
                    <li class="img_1"><img src="./img/contentImg2.jpg" style="width:270px"></li>\
                    <li class="img_2"><img src="./img/contentImg3.jpg" style="width:510px"></li>\
                    <li class="img_3"><img src="./img/contentImg4.jpg" style="width:680px"></li>\
                    <li class="img_4"><img src="./img/contentImg5.jpg" style="width:510px"></li>\
                    <li class="img_5"><img src="./img/contentImg6.jpg" style="width:270px"></li>\
                    <li class="img_6"><img src="./img/contentImg7.jpg" style="width:270px"></li>\
                    <li class="img_6"><img src="./img/contentImg8.jpg" style="width:270px"></li>\
                </ul>\
            </div>';
    $('.contentImg').append($(str));
}
export function createUser(){
	var str = '<div class="c_user">\
                <div class="userImg"><img src="./img/user-img.jpg" /></div>\
                <div class="userContent">\
                    <p><span>Hi I`m Sheep</span></p>\
                    <p><span>Sheel的由来是源于，一次和寝室大哥一起做火车回家</span>\
                    <p><span>火车走了48小时，而我也睡了48小时，然后就没有然后了…………</span></p>\
                    <p><span>就读于黑龙江大学2013级电子商务专业</span></p>\
                    <p><span>程序员，Web前端开发，在学校的信管创业教育基地学习</span></p>\
                    <p><span>爱好：看书、象棋、足球、跑步、游戏、睡觉、动漫</span></p>\
                    <p><span>——丁泽华</span></p>\
                </div>\
            </div>'
    $('.contentImg').append($(str));
}
