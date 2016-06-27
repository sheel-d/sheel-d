
import $ from 'jquery';
import {workData,workTitleData,workContentData} from './workData.js';

export function workAnimate(){
	var t = new TimelineMax();
	var $width = parseInt($('.work').width());

	t.to('.t-work',0.6,{width:$width*0.05},0);
	circleFirst(0,$width*0.05,600);

	t.to('.t-work',0.5,{width:$width*0.15},1.3);
	circleSecond(1,$width*0.15,1800);

	t.to('.t-work',0.4,{width:$width*0.3},2.6);
	circleFirst(2,$width*0.3,3000);

	t.to('.t-work',0.3,{width:$width*0.5},3.8);
	circleSecond(3,$width*0.5,4100);

	t.to('.t-work',0.25,{width:$width*0.75},4.9);
	circleFirst(4,$width*0.75,5150);

	t.to('.t-work',0.25,{width:$width*0.95},5.8);
	circleSecond(5,$width*0.95,6050);

	t.to('.t-work',0.25,{width:$width},6.6);
};

function circleFirst(index,num,time){
	var time2 = parseInt(time) + 400;
	var time3 = parseInt(time) + 800;

	setTimeout(function() {
		$('.circle').eq(index).css('left',num).animate({
			opacity : 1,
			width : 20,
			height : 20
		},300);	
	},time);

	setTimeout(function(){
		$('.v-line').eq(index).animate({
			opacity : 1,
			height : 100
		},400);
	},time2);

	setTimeout(function(){
		$('.v-content').eq(index).animate({opacity : 1},400);
	},time3);
}
function circleSecond(index,num,time){
	var time2 = parseInt(time) + 400;
	var time3 = parseInt(time) + 800;

	setTimeout(function() {
		$('.circle').eq(index).css('left',num).animate({
			opacity : 1,
			width : 20,
			height : 20
		},300);	
	},time);

	setTimeout(function(){
		$('.v-line').eq(index).animate({
			opacity : 1,
			height : 100
		},400);
	},time2);

	setTimeout(function(){
		$('.v-content').eq(index).animate({opacity : 1},400);
	},time3);
}

export function createWork(){
	var str = ' <div class="t-work" _begin="F"></div>';
    $('.work').append($(str));
    for(let i=0;i<workData.length;i++){
    	createCircle(workData[i]);
    }
};

function createCircle(obj){
	var str = '<p class="circle">\
                    <i class="v-line"></i>\
                    <span class="v-content" _title='+ obj.title +'>'+ obj.content + '</span>\
                </p>';
    $('.t-work').append($(str));
}

export function createWorkContent(){
	var str = '<div class="workContent">\
               <div class="workLeft">\
                   <ul class="list"></ul>\
               </div>\
               <div class="workRight">\
               		<div class="return"><span>返回</span></div>\
		            <div class="title"></div>\
		            <div class="content"></div>\
               </div>\
           </div>';
    $('.work').append($(str));
};

function createLi(obj){
	var str = '<li _title=' + obj.title + '>\
                <a>' + obj.content + '</a>\
                <a>' + obj.content + '</a>\
               </li>';
    $('.list').append($(str));
}

function createTitle(obj){
	var str = '<p _id='+ obj.id +'>'+ obj.num +'、' + obj.title +'</p>';
	$('.title').append($(str));
}

function createContentBox(test){
	var str = '<div class="content-box">'+ test +'</div>';
	$('.content').append($(str));
}

export function styleWorkContent(){
	var $width = parseInt($('.work').width())-200;
	$('.workRight').css({
		width : $width
	});
	var $heightT = parseInt($('.workLeft').height())/2 - parseInt($('.list').height())/2;
	$('.list').css({
		top : $heightT
	});
};

export function workEvent(){
	var num = 0;
	$('.t-work').delegate('.v-content','click',function(){
		$('.t-work').attr('_begin','T');
		$('.list').html('');
		$('.title').html('');
		var $_title = $(this).attr('_title');
		for(let i=0;i<workData.length;i++){
			createLi(workData[i]);
		}
		for(let i=0;i<workTitleData[$_title].length;i++){
			createTitle(workTitleData[$_title][i]);
		}
		$('.t-work').css('display','none');
		$('.workContent').css('display','block');
		$('.title').css('display','block');
		$('.content').css('display','none');
		num++;
	});
	$('.list').delegate('li','click',function(){
		$('.title').html('');
		$('.title').css('display','block');
		$('.content').css('display','none');
		var $_title = $(this).attr('_title');
		for(let i=0;i<workTitleData[$_title].length;i++){
			createTitle(workTitleData[$_title][i]);
		}
	});
	$('.title').delegate('p','click',function(){
		var $_id = $(this).attr('_id');
		$('.content').html('');
		createContentBox(workContentData[$_id]);
		$('.title').css('display','none');
		$('.content').css('display','block');
	});
	$('.return').on('click',function(){
		var $conDisplay = $('.content').css('display');
		var $titDisplay = $('.title').css('display');
		if( $conDisplay == 'block' ){
			$('.content').css('display','none');
			$('.title').css('display','block');
		}else if($titDisplay == 'block'){
			$('.t-work').attr('_begin','F');
			$('.workContent').css('display','none');
			$('.t-work').css('display','block');
		}
	});
};