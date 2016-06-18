/*第三屏*/
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
	var str = ' <div class="t-work"></div>';
    $('.work').append($(str));
    for(let i=0;i<workData.length;i++){
    	createCircle(workData[i]);
    }
};

function createCircle(obj){
	var str = '<p class="circle">\
                    <i class="v-line"></i>\
                    <span class="v-content" _title='+ obj.content +'>'+ obj.title + '</span>\
                </p>';
    $('.t-work').append($(str));
}

export function createWorkContent(){
	var str = '<div class="workContent">\
               <div class="workLeft">\
                   <ul class="list">\
                       <li>\
                       		<a>html & css</a>\
                       		<a>html & css</a>\
                       </li>\
                       <li>\
                       		<a>javascript</a>\
                       		<a>javascript</a>\
                       	</li>\
                       <li>\
                       		<a>html5 & css3</a>\
                       		<a>html5 & css3</a>\
                       	</li>\
                       <li>\
                       		<a>react</a>\
                       		<a>react</a>\
                       	</li>\
                       <li>\
                       		<a>ES2015</a>\
                       		<a>ES2015</a>\
                       	</li>\
                       <li>\
                       		<a>node</a>\
                       		<a>node</a>\
                       	</li>\
                   </ul>\
               </div>\
               <div class="workRight">\
		            <div class="title">\
		                <p>标题1</p>\
		                <p>标题2</p>\
		            </div>\
		            <div class="content">\
		                <h3>标题</h3>\
		                <div class="content-box">\
		                	<p>1345647893112456</p>\
		                </div>\
		            </div>\
               </div>\
           </div>';
    $('.work').append($(str));
};

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

export function workEvent(){//点击事件
	$('.t-work').delegate('.v-content','click',function(){
		console.log($(this).text());
		$('.t-work').css('display','none');
		$('.workContent').css('display','block');
		$('.title').css('display','block');
	});
};