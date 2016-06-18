/*初始化*/
import {createNav} from './nav.js';
import {cUserHeight,imgInitAnimate,createImg,createUser} from './contentImg.js';
import {} from './photo.js';
import {createWork,createWorkContent,styleWorkContent} from './work.js';
import {} from './profile.js';
import {createMessage,createFooter} from './footer.js';
import {initScrollBar} from './scrollBar.js';

import $ from 'jquery';


/*
	初始化需要做的事：
		1、设置每一屏的快高
		2、导航条的动画
		3、第一屏的动画
		4、第一屏需要做的事
		5、滚动条隐藏，使用自己做的滚动条
		
*/
export function init(){
	Height();
	createNav('#menu');
	createImg();
	createUser();
	cUserHeight();
	initAnimate();
	//滚动条
	initScrollBar();
	
	//第三屏
	createWork();
	//createWorkContent();
	//styleWorkContent();

	//第五屏
	createMessage();
	createFooter();
};

function Height(){
	var iHeight = document.documentElement.clientHeight;
	$('#main').css('height',iHeight);
	var $len = $('.start').length;
	$('.start').css({
		height : parseInt(iHeight) - 85,
		position : 'absolute',
		left : 0,
		top : iHeight,
		right:0,
		opacity:0
	});
}

function initAnimate(){
	var t = new TimelineMax();
	t.to('#menu',1,{left:0});
	t.to('.item',4,{rotation:360},1);
	t.to('.logo',1,{
		rotation:360,
		opacity:1
	},1);
	t.to('.nav',1,{top:0},2);
	t.to('.line',0.5,{left:6},3);
	t.to('.contentImg',1,{top:85,opacity:1},1.5);
	t.to('.c_img',1,{opacity:1},1.75);
	t.to('.c_user',1,{opacity:1},2);
}
