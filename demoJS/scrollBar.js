import $ from 'jquery';
import {workAnimate} from './work.js';

export function initScrollBar(){
	var $height = parseInt($('#main').height());
	$('.rectangle').css('height',$height/5);
};

export function scrollBarEvent(){

	$('#main').one('DOMMouseScroll',mousewheelfn);
    $('#main').one('mousewheel',mousewheelfn);
};

function mousewheelfn(ev){

	var $mainHeight = parseInt($('#main').height());
	var $index = $('.nav').find('.active').index();

	var delta = (ev.originalEvent.wheelDelta && (ev.originalEvent.wheelDelta > 0 ? 1 : -1)) || (ev.originalEvent.detail && (ev.originalEvent.detail > 0 ? -1 : 1));

    var t = new TimelineMax();

    if (delta > 0){ // 向上滚
        
        if($index > 0){
        	$('.line').animate({
	    		left : ($index-1) * 82 + 6
	    	},700,function(){
	    		$('.nav li').removeClass('active');
	        	$('.nav li').eq($index-1).addClass('active');
	    	});
        }
		
        if( $index == 0){

        	t.to('.scrollBar',1,{
					opacity:0.5,
					top:0
				},0);
			t.to('.scrollBar',1,{opacity:0},4);

        }else if( $index == 1 ){

        	$('.note').animate({
        		top : $mainHeight,
        		opacity : 0
        	},800);

        	$('.contentImg').css('top',-$mainHeight).animate({
        		top : 85,
        		opacity : 1
        	},800);

        	t.to('.scrollBar',1,{
				opacity:0.5,
				top:0
			},0);
			t.to('.scrollBar',1,{opacity:0},4);

        }else if( $index == 2 ){

        	$('.work').animate({
        		top : $mainHeight,
        		opacity : 0
        	},800);

        	$('.note').css('top',-$mainHeight).animate({
        		top : 85,
        		opacity : 1
        	},800);

        	t.to('.scrollBar',1,{
				opacity:0.5,
				top:$mainHeight/5
			},0);
			t.to('.scrollBar',1,{opacity:0},4);

        }else if( $index == 3 ){

        	$('.profile').animate({
        		top : $mainHeight,
        		opacity : 0
        	},800);

        	$('.work').css({
                top : -$mainHeight
            }).animate({
        		top : 85,
        		opacity : 1
        	},800);

        	t.to('.scrollBar',1,{
				opacity:0.5,
				top:$mainHeight/5 * 2
			},0);
			t.to('.scrollBar',1,{opacity:0},4);
			workAnimate();

        }else if( $index == 4 ){

        	$('.memo').animate({
        		top : $mainHeight,
        		opacity : 0
        	},800);

        	$('.profile').css('top',-$mainHeight).animate({
        		top : 85,
        		opacity : 1
        	},800);

        	t.to('.scrollBar',1,{
				opacity:0.5,
				top:$mainHeight/5 * 3
			},0);
        	t.to('.scrollBar',1,{opacity:0},4);

        }

    } else if (delta < 0) { // 向下滚  
     	
    	if($index < 4){
    		$('.line').animate({
	    		left : ($index+1) * 82 + 6
	    	},700,function(){
	    		$('.nav li').removeClass('active');
        		$('.nav li').eq($index+1).addClass('active');
	    	});
    	}
    	
        if( $index == 0){

        	$('.contentImg').animate({
        		top : -$mainHeight,
        		opacity : 0
        	},800,function(){
        		$(this).css('top',$mainHeight);
        	});

        	$('.note').animate({
        		top : 85,
        		opacity : 1
        	},800);

        	t.to('.scrollBar',1,{
				opacity:0.5,
				top:$mainHeight/5
			},0);
			t.to('.scrollBar',1,{opacity:0},3);

        }else if( $index == 1 ){

        	$('.note').animate({
        		top : -$mainHeight,
        		opacity : 0
        	},800,function(){
        		$(this).css('top',$mainHeight);
        	});

        	$('.work').animate({
        		top : 85,
        		opacity : 1,
        	},800);

        	t.to('.scrollBar',1,{
				opacity:0.5,
				top:$mainHeight/5 * 2
			},0);
			t.to('.scrollBar',1,{opacity:0},4);

			workAnimate();

        }else if( $index == 2 ){

        	$('.work').animate({
        		top : -$mainHeight,
        		opacity : 0
        	},800,function(){
        		$(this).css('top',$mainHeight);
        	});

        	$('.profile').animate({
        		top : 85,
        		opacity : 1
        	},800);

        	t.to('.scrollBar',1,{
				opacity:0.5,
				top:$mainHeight/5 * 3
			},0);
			t.to('.scrollBar',1,{opacity:0},4);

        }else if( $index == 3 ){

        	$('.profile').animate({
        		top : -$mainHeight,
        		opacity : 0
        	},800,function(){
        		$(this).css('top',$mainHeight);
        	});

        	$('.memo').animate({
        		top : 85,
        		opacity : 1
        	},800);

        	t.to('.scrollBar',1,{
				opacity:0.5,
				top:$mainHeight/5 * 4
			},0);
        	t.to('.scrollBar',1,{opacity:0},4);

        }else if( $index == 4 ){
        	
        	t.to('.scrollBar',1,{
					opacity:0.5,
					top:$mainHeight/5 * 4 
				},0);
			t.to('.scrollBar',1,{opacity:0},4);

        }

    }

    if( ev.originalEvent.detail ){
        setTimeout(function(){
            $('#main').one('DOMMouseScroll',mousewheelfn);
        },800);
    }else{
        setTimeout(function(){
            $('#main').one('mousewheel',mousewheelfn);
        },800);
    }	
}

