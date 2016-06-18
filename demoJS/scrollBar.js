import $ from 'jquery';

export function initScrollBar(){
	var $height = parseInt($('#main').height());
	$('.rectangle').css('height',$height/5);
};

export function scrollBarEvent(){
	console.log(2);
	$('#main').one('mousewheel',mousewheelfn);
};

function mousewheelfn(ev){

	var delta = (ev.originalEvent.wheelDelta && (ev.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
                (ev.originalEvent.detail && (ev.originalEvent.detail > 0 ? -1 : 1));

    var $index = $('.nav').find('.active').index();

    if (delta > 0){ // 向上滚
        console.log("wheelup");
    } else if (delta < 0) { // 向下滚    
        console.log("wheeldown");
    }

	setTimeout(function(){
		$('#main').one('mousewheel',mousewheelfn);
	},1200);
}

