import {init} from './init.js';
import {nav} from './nav.js';
import {note,noteConten,close,createContent} from './photo.js';
import {contentImgArr,imgAnimate} from './contentImg.js';
import {workAnimate,createWork} from './work.js';
import {profileInit,profileEvent} from './profile.js';
import {messageInit,memoEvent,createMessage,createFooter} from './footer.js';

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
	sheel.nav = nav; //导航条事件
	sheel.nav();

	//第一屏
	sheel.contentImgArr = contentImgArr();

	sheel.imgAnimate = imgAnimate;
	sheel.imgAnimate(sheel.contentImgArr);

	//第二屏
	sheel.note = note;
	sheel.note();
	sheel.createContent = createContent;
	sheel.createContent();

	sheel.noteConten = noteConten;
	sheel.noteConten();

	sheel.close = close;
	sheel.close();

	//第三屏
	sheel.createWork = createWork;
	sheel.createWork();

	sheel.workAnimate = workAnimate;
	sheel.workAnimate();

	//第四屏
	sheel.profileInit = profileInit;
	sheel.profileInit();

	sheel.profileEvent = profileEvent;
	sheel.profileEvent();

	//第五屏
	sheel.createMessage = createMessage;
	sheel.createMessage();

	sheel.createFooter = createFooter;
	sheel.createFooter();

	sheel.messageInit = messageInit;
	sheel.messageInit();

	sheel.memoEvent = memoEvent;
	sheel.memoEvent();
};
