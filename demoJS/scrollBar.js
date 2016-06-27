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

    var $workBegin = $('.t-work').attr('_begin');
    var $articleBegin = $('.articleBox').attr('_begin');

	var $mainHeight = parseInt($('#main').height());
	var $index = $('.nav').find('.active').index();

	var delta = (ev.originalEvent.wheelDelta && (ev.originalEvent.wheelDelta > 0 ? 1 : -1)) || (ev.originalEvent.detail && (ev.originalEvent.detail > 0 ? -1 : 1));

    var t = new TimelineMax();

    if (delta > 0){ // 向上滚
		
        if( $index == 0){

        	t.to('.scrollBar',1,{
					opacity:0.5,
					top:0
				},0);
			t.to('.scrollBar',1,{opacity:0},4);

        }else if( $index == 1 ){

            $('.line').animate({
                left : ($index-1) * 82 + 6
            },700,function(){
                $('.nav li').removeClass('active');
                $('.nav li').eq($index-1).addClass('active');
            });

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

            if($workBegin == 'F'){

                $('.line').animate({
                    left : ($index-1) * 82 + 6
                },700,function(){
                    $('.nav li').removeClass('active');
                    $('.nav li').eq($index-1).addClass('active');
                });

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
            }else{
                t.to('.scrollBar',1,{
                    opacity:0.5,
                    top:$mainHeight/5 * 2
                },0);
                t.to('.scrollBar',1,{opacity:0},4);
            }

        }else if( $index == 3 ){
            $('.work').find('.circle').css({
                opacity:0,
                width:0,
                height:0
            });
            $('.work').find('.v-line').css({
                opacity:0,
                height:0
            });
            $('.work').find('.v-content').css('opacity','0');
            if( $articleBegin == 'F' ){

                $('.line').animate({
                    left : ($index-1) * 82 + 6
                },700,function(){
                    $('.nav li').removeClass('active');
                    $('.nav li').eq($index-1).addClass('active');
                });

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
            }else{
                t.to('.scrollBar',1,{
                    opacity:0.5,
                    top:$mainHeight/5 * 3
                },0);
                t.to('.scrollBar',1,{opacity:0},4);
            }
        	
        }else if( $index == 4 ){

            $('.line').animate({
                left : ($index-1) * 82 + 6
            },700,function(){
                $('.nav li').removeClass('active');
                $('.nav li').eq($index-1).addClass('active');
            });

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
    	
        if( $index == 0){

            $('.line').animate({
                left : ($index+1) * 82 + 6
            },700,function(){
                $('.nav li').removeClass('active');
                $('.nav li').eq($index+1).addClass('active');
            });

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
            $('.work').find('.circle').css({
                opacity:0,
                width:0,
                height:0
            });
            $('.work').find('.v-line').css({
                opacity:0,
                height:0
            });
            $('.work').find('.v-content').css('opacity','0');

            $('.line').animate({
                left : ($index+1) * 82 + 6
            },700,function(){
                $('.nav li').removeClass('active');
                $('.nav li').eq($index+1).addClass('active');
            });

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

            if($workBegin == 'F'){

                $('.line').animate({
                    left : ($index+1) * 82 + 6
                },700,function(){
                    $('.nav li').removeClass('active');
                    $('.nav li').eq($index+1).addClass('active');
                });

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
            }else{
               t.to('.scrollBar',1,{
                    opacity:0.5,
                    top:$mainHeight/5 * 2
                },0);
                t.to('.scrollBar',1,{opacity:0},4); 
            }
        	
        }else if( $index == 3 ){
            if( $articleBegin == 'F' ){

                $('.line').animate({
                    left : ($index+1) * 82 + 6
                },700,function(){
                    $('.nav li').removeClass('active');
                    $('.nav li').eq($index+1).addClass('active');
                });

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
            }else{
                t.to('.scrollBar',1,{
                    opacity:0.5,
                    top:$mainHeight/5 * 3
                },0);
                t.to('.scrollBar',1,{opacity:0},4);
            }
        	
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

