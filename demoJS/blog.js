import {init} from './init.js';
import {nav} from './nav.js';
import {note,noteConten,close} from './note.js';
import {userImg,contentImgArr,prevAnimate,nextAnimate,imgAnimate,hide} from './contentImg.js';
import {workAnimate} from './work.js';
import {profileInit,profileEvent} from './profile.js';
import {h7} from './footer.js';

import $ from 'jquery';
import './TweenMax.js';



//Animate:动画
var sheel = {};
//初始化
sheel.init = init;
sheel.init();

//第二屏
sheel.note = note;
sheel.note();

//导航条
sheel.nav = nav; //导航条事件
sheel.nav();

//第一屏
sheel.userImg = userImg;  //
sheel.userImg();

sheel.contentImgArr = contentImgArr();

sheel.prevAnimate = prevAnimate;
sheel.prevAnimate(sheel.contentImgArr);

sheel.nextAnimate = nextAnimate;
sheel.nextAnimate(sheel.contentImgArr);

sheel.imgAnimate = imgAnimate;
sheel.imgAnimate(sheel.contentImgArr);

sheel.hide = hide;
sheel.hide();

//第二屏
sheel.noteConten = noteConten;
sheel.noteConten();

sheel.close = close;
sheel.close();

//第三屏
sheel.workAnimate = workAnimate;
sheel.workAnimate();

//第四屏
sheel.profileInit = profileInit;
sheel.profileInit();

sheel.profileEvent = profileEvent;
sheel.profileEvent();

