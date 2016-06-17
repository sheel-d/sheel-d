import {init} from './init.js';
import {navEvent} from './nav.js';
import {note} from './photo.js';
import {contentImgArr,imgAnimate} from './contentImg.js';
import {workAnimate,workEvent} from './work.js';
import {profileInit,profileEvent} from './profile.js';
import {messageInit,memoEvent} from './footer.js';

import $ from 'jquery';
import './TweenMax.js';

import '../css/index.css';

window.onload = function(){
	//Animate:动画
	var sheel = {};
	//初始化
	sheel.init = init;
	sheel.init();

	//导航条
	sheel.navEvent = navEvent; //导航条事件
	sheel.navEvent();

	//第一屏
	sheel.contentImgArr = contentImgArr();

	sheel.imgAnimate = imgAnimate;
	sheel.imgAnimate(sheel.contentImgArr);

	//第二屏
	sheel.note = note;
	sheel.note();

	//第三屏
	sheel.workEvent = workEvent;
	sheel.workEvent();

	//第四屏
	sheel.profileInit = profileInit;
	sheel.profileInit();

	sheel.profileEvent = profileEvent;
	sheel.profileEvent();

	//第五屏
	sheel.messageInit = messageInit;
	sheel.messageInit();

	sheel.memoEvent = memoEvent;
	sheel.memoEvent();
};
