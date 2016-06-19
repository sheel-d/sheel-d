/*第五屏*/
import $ from 'jquery';
import {footerData} from './footerData.js';

export function messageInit(){
	var $height = $('.memo').height() - ($('.userMemo').height() + $('.footer').height() + 25 );
	$('.box').css('height',$height);

	for(let i=0;i<footerData.length;i++){
		createMemoBox(footerData[0]);
	}
	
};

export function memoEvent(){

	$('.box').delegate('.memoBox','mouseenter',function(){
		$(this).find('img').css({
			transform : 'scale(0.5,0.5)',
			transformOrigin : 'center center',
			opacity : 0.5
		});
	}).delegate('.memoBox','mouseleave',function(){
		$(this).find('img').css({
			transform : 'scale(1,1)',
			transformOrigin : 'center center',
			opacity : 1
		});
	});
};

export function createMessage(){
	var str = '<div class="message">\
                <div class="messageMemo">\
                    <div class="userMemo">\
                        <p><span>sheel</span>发表于：<i>2016-6-15</i></p>\
                        <p>欢迎光临sheel的博客，给我留言吧！请相信这是个神奇的页面。</p>\
                        <p>有什么好建议，欢迎大家来说。或者你就给点广告也行，交个朋友，谢谢。</p>\
                    </div>\
                    <div class="box"></div>\
                </div>\
            </div>';
    $('#memo').append($(str));
};

function createMemoBox(obj){
	var str = '<div class="memoBox">\
                        <div class="leftUser"><img src="'+obj.imgUrl+'" /></div>\
                        <div class="rightContent">\
                            <p><span>' + obj.author + '</span>发表于：<i>' + obj.time + '</i></p>\
                            <p>'+ obj.content + '</p>\
                        </div>\
                    </div>';
    $('.box').append($(str));
}
export function createFooter(){
	var str = '<div class="footer">\
                <span>&hearts;sheel-d 2016-5-24</span>\
            </div>';
    $('#memo').append($(str));
};
