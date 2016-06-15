/*第五屏*/
import $ from 'jquery';

var obj = {
 	imgUrl : './img/1.jpg',
 	author : 'sheel',
 	time : '2016-6-15',
 	content : '我是第一个留言的，嘻嘻'
}

export function messageInit(){
	var $height = $('#memo').height() - ($('.userMemo').height() + $('.more').height() + $('.writeMemo').height() + $('.footer').height() + 47);
	$('.box').css('height',$height);
	var num = Math.floor($height/120);
	for(let i = 0; i < num; i++){
		createMemoBox(obj);
	}
	var $width = parseInt($('.memoBox').width()) - 140;
	$('.rightContent').css('width',$width);
};

export function memoEvent(){
	$('.release').on('click',function(){
		var $nameValue = $('.name').val();
		var $textValue = $('.textarea').val();

		if($nameValue == '' && $textValue == ''){
			alert('Defeat!');
		}else if($nameValue == '' && $textValue != ''){
			alert('Defeat!');
		}else if($nameValue != '' && $textValue == ''){
			alert('Defeat!');
		}else{
			alert('success!');
		}
	});

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
                <p class="more"><span>更多留言--></span></p>\
                <div class="writeMemo">\
                    <p>\
                        <span>name:</span>\
                        <input type="text" class="name">\
                    </p>\
                    <p>\
                        <span>content:</span>\
                        <textarea class="textarea"></textarea>\
                        <span class="release">发布</span>\
                    </p>\
                </div>\
            </div>';
    $('#memo').append($(str));
}

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
}