import {init} from './init.js';
import {navEvent} from './nav.js';
import {note} from './photo.js';
import {contentImgArr,imgAnimate} from './contentImg.js';
import {workAnimate,workEvent} from './work.js';
import {profileEvent} from './profile.js';
import {objectEvent} from './footer.js';
import {scrollBarEvent} from './scrollBar.js';

import $ from 'jquery';
import './TweenMax.js';
import high from 'highlight.js';
/*import '../css/index.css';*/
require ('highlight.js/styles/solarized-light.css');

window.onload = function(){
	$('pre code').each(function(i,block){
		high.highlightBlock(block);
	});

	var sheel = {};

	sheel.init = init;
	sheel.init();

	sheel.navEvent = navEvent; 
	sheel.navEvent();

	sheel.contentImgArr = contentImgArr();

	sheel.imgAnimate = imgAnimate;
	sheel.imgAnimate(sheel.contentImgArr);

	sheel.note = note;
	sheel.note();

	sheel.workEvent = workEvent;
	sheel.workEvent();

	sheel.profileEvent = profileEvent;
	sheel.profileEvent();

	sheel.objectEvent = objectEvent;
	sheel.objectEvent();

	sheel.scrollBarEvent = scrollBarEvent;
	sheel.scrollBarEvent();
};
