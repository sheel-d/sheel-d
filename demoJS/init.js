/*初始化*/
import {navInitAnimate} from './nav.js';
import {cUserHeight,imgInitAnimate} from './contentImg.js';
import $ from 'jquery';




export function h1(){
	//return '初始化';
	console.log('初始化');
};
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
	navInitAnimate();
	cUserHeight();
	//imgInitAnimate();
}

function Height(){
	var iHeight = document.documentElement.clientHeight;
    var acemn = document.querySelector(".contentImg");
    acemn.style.height = iHeight + 'px';
    var cStart = document.querySelectorAll('.start');
    for(var i=0;i<cStart.length;i++){
        cStart[i].style.height = parseInt(iHeight) - 85 + 'px';
        cStart[i].style.marginTop = '85px';
    }

    var cStart1 = document.querySelectorAll('.start1');
    for(var i=0;i<cStart1.length;i++){
        cStart1[i].style.height = (Number(iHeight) - 85) + 'px';
    }
}

