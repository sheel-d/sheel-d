/*第三屏*/
import $ from 'jquery';

export function workAnimate(){
	var t = new TimelineMax();
	var $width = parseInt($('.work').width());

	t.to('.t-work',1,{width:$width*0.05},0);
	circleFirst(0,$width*0.05,1000);

	t.to('.t-work',1,{width:$width*0.15},2.5);
	circleSecond(1,$width*0.15,3500);

	t.to('.t-work',1,{width:$width*0.3},4.5);
	circleFirst(2,$width*0.3,5500);

	t.to('.t-work',1,{width:$width*0.5},6.5);
	circleSecond(3,$width*0.5,7500);

	t.to('.t-work',1,{width:$width*0.75},8.5);
	circleFirst(4,$width*0.75,9500);

	t.to('.t-work',1,{width:$width*0.95},10.5);
	circleSecond(5,$width*0.95,11500);

	t.to('.t-work',1,{width:$width},12.5);
};

function circleFirst(index,num,time){
	var time2 = parseInt(time) + 500;
	var time3 = parseInt(time) + 1000;

	setTimeout(function() {
		$('.circle').eq(index).css('left',num).animate({
			opacity : 1,
			width : 20,
			height : 20
		},500);	
	},time);

	setTimeout(function(){
		$('.v-line').eq(index).animate({
			opacity : 1,
			height : 100
		},500);
	},time2);

	setTimeout(function(){
		$('.v-content').eq(index).animate({opacity : 1},500);
	},time3);
}
function circleSecond(index,num,time){
	var time2 = parseInt(time) + 500;
	var time3 = parseInt(time) + 1000;

	setTimeout(function() {
		$('.circle').eq(index).css('left',num).animate({
			opacity : 1,
			width : 20,
			height : 20
		},500);	
	},time);

	setTimeout(function(){
		$('.v-line').eq(index).animate({
			opacity : 1,
			height : 100
		},500);
	},time2);

	setTimeout(function(){
		$('.v-content').eq(index).animate({opacity : 1},500);
	},time3);
}

export function workEvent(){//点击事件

};