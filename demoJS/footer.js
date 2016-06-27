
import $ from 'jquery';
import {footerData,textData} from './footerData.js';

function createFooter(){
	var str = '<div class="footer">\
                <span>&hearts;sheel-d 2016-5-24</span>\
            </div>';
    $('#memo').append($(str));
}

export function objectInit(){
	createObj();
	createText(textData);
	createFooter();

	var $height = parseInt($('#memo').height()) - parseInt($('.footer').height());

	$('.object').css({
		height:$height
	});

	for(let i = 0; i < footerData.length; i++){
		createSec(footerData[i]);
	}

	var $top = parseInt($('.grid').height())/2 - 14 ;
	var $left = parseInt($('.grid').width())/2 - 20;

	$('.grid figcaption span').css({
		top:$top,
		left:$left
	});
	$('.grid figcaption h2').css({
		top:30,
		left:0
	});
	$('.grid figcaption p').css({
		top:97,
		left:0
	});
};

function createObj(){
	var str = '<div class="object"></div>';
    $('#memo').append($(str));
}
function createSec(obj){
	var str = '<section class="grid">\
                    <figure>\
                        <img src="' + obj.url + '" />\
                        <svg xmlns = "http://www.w3.org/2000/svg" width="100%" height="100%">\
                            <polygon points="0,0 0,232 98,172 216,232 216,0" style="fill:#fff; stroke:#fff;stroke-width:1"/>\
                        </svg>\
                        <figcaption>\
                            <h2>'+ obj.title +'</h2>\
                            <p>'+  obj.content +'</p>\
                            <span>view</span>\
                        </figcaption>\
                    </figure>\
                </section>';
    $('.object').append($(str));
}
function createText(obj){
	var str = '<div class="text">' + obj.text +'</div>';
	$('.object').append($(str));
}
export function objectEvent(){
	$('.object').delegate('.grid','mouseenter',function(){
		$(this).css('border','3px solid #ccc');
		$(this).find('polygon').attr('points','0,0 0,40 98,55 216,40 216,0');
		$(this).find('h2').css({
			top:15
		});
		$(this).find('p').css({
			opacity:0
		});
		$(this).find('span').css({
			opacity:1
		});
	}).delegate('.grid','mouseleave',function(){
		$(this).find('polygon').attr('points','0,0 0,232 98,172 216,232 216,0');
		$(this).find('h2').css({
			top:30
		});
		$(this).find('p').css({
			opacity:1
		});
		$(this).find('span').css({
			opacity:0
		});
	}).delegate('.grid','click',function(){
	 	var $text = $(this).find('h2').text();
	 	if( $text == '静谧网-首页'){
	 		window.location = "http://www.jingmi.date/";
	 	}else{
	 		window.location = "http://www.jingmi.date/bbs/";
	 	}
	});
}