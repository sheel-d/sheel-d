/*第三屏*/
import $ from 'jquery';

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
	var str = ' <div class="t-work">\
                <p class="circle">\
                    <i class="v-line"></i>\
                    <span class="v-content">html+css</span>\
                </p>\
                <p class="circle">\
                    <i class="v-line"></i>\
                    <span class="v-content">javascript</span>\
                </p>\
                <p class="circle">\
                    <i class="v-line"></i>\
                    <span class="v-content">html5+css3</span>\
                </p>\
                <p class="circle">\
                    <i class="v-line"></i>\
                    <span class="v-content">react</span>\
                </p>\
                <p class="circle">\
                    <i class="v-line"></i>\
                    <span class="v-content">ES2015</span>\
                </p>\
                <p class="circle">\
                    <i class="v-line"></i>\
                    <span class="v-content">node</span>\
                </p>\
            </div>';
    $('.work').append($(str));
};
export function createWorkContent(){
	var str = '<div class="workContent">\
               <div class="workLeft">\
                   <ul class="list">\
                       <li>html & css</li>\
                       <li>javascript</li>\
                       <li>html5 & css3</li>\
                       <li>react</li>\
                       <li>ES2015</li>\
                       <li>node</li>\
                   </ul>\
               </div>\
               <div class="workRight"></div>\
           </div>';
    $('.work').append($(str));
};

export function workEvent(){//点击事件
	$('.t-work').delegate('.v-content','click',function(){
		console.log($(this).text());
	});
};