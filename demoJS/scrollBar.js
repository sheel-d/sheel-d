import $ from 'jquery';

export function initScrollBar(){
	var $height = parseInt($('#main').height());
	$('.rectangle').css('height',$height/5);
};

export function scrollBarEvent(){};