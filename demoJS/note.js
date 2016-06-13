/*第二屏 --未完成*/
import $ from 'jquery';



export function note(){
	var cDivPh = document.getElementsByClassName('photo');

    var data = [
            {
                left:"4%",
                top:"7%",
                src:"html",
                alt:"html",
                test: {
                    testLeft: 'xhtml和html有什么区别?',
                    testRight: '对WEB标准以及W3C的理解与认识.'
                }
            },{
                left:"28%",
                top:"7%",
                src:"css",
                alt:"css",
                test: {
                    testLeft: 'xhtml和html有什么区别?',
                    testRight: '对WEB标准以及W3C的理解与认识.'
                }
            },{
                left:"52%",
                top:"7%",
                src:"javascript",
                alt:"javascript",
                test: {
                    testLeft: 'xhtml和html有什么区别?',
                    testRight: '对WEB标准以及W3C的理解与认识.'
                }
            },{
                left:"76%",
                top:"7%",
                src:"html5",
                alt:"html5",
                test: {
                    testLeft: 'xhtml和html有什么区别?',
                    testRight: '对WEB标准以及W3C的理解与认识.'
                } 
            },{
                left:"4%",
                top:"52%",
                src:"css3",
                alt:"css3",
                test: {
                    testLeft: 'xhtml和html有什么区别?',
                    testRight: '对WEB标准以及W3C的理解与认识.'
                } 
            },{
                left:"28%",
                top:"52%",
                src:"react",
                alt:"react",
                test: {
                    testLeft: 'xhtml和html有什么区别?',
                    testRight: '对WEB标准以及W3C的理解与认识.'
                } 
            },{
                left:"52%",
                top:"52%",
                src:"ES6",
                alt:"ES6",
                test: {
                    testLeft: 'xhtml和html有什么区别?',
                    testRight: '对WEB标准以及W3C的理解与认识.'
                } 
            },{
                left:"76%",
                top:"52%",
                src:"node",
                alt:"node",
                test: {
                    testLeft: 'xhtml和html有什么区别?',
                    testRight: '对WEB标准以及W3C的理解与认识.'
                } 
            }
        ];
        
    for(var i=0;i<data.length;i++){
        CreatePhoto(data[i]);
        cDivPh[i].style.left = data[i].left;
        cDivPh[i].style.top = data[i].top;
        
    }
    for(var j=0;j<data[0].test.length;j++){
        desc(data[0].test[j]);
    }
    
    for(var i=0;i<data.length;i++){
        (function(i){
            cDivPh[i].onmouseover = function(){
                var cls = this.className;
                if( /photo_front/.test(cls) ){
                    cls = cls.replace(/photo_front/,'photo_back');
                }else{
                    cls = cls.replace(/photo_back/,'photo_front');
                }
                this.className = cls;
            };
            cDivPh[i].onmouseout = function(){
                var cls = this.className;
                if( /photo_front/.test(cls) ){
                    cls = cls.replace(/photo_front/,'photo_back');
                }else{
                    cls = cls.replace(/photo_back/,'photo_front');
                }
                this.className = cls;
            };
        })(i);
    } 
};

function CreatePhoto(obj){
    var str ='<div class="photo photo_front phWH">\
                    <div class="photo-wrap">\
                        <div class="side side-front">\
                            <p class="image">\
                                <img src="#" alt='+obj.alt+' />\
                            </p>\
                        </div>\
                        <div class="side side-back">\
                            <p class="desc">'+ obj.test.testLeft +'</p>\
                            <p class="desc">'+ obj.test.testRight +'</p>\
                        </div>\
                    </div>\
                </div>';
    var $str = $(str);
    $('.wrap').eq(0).append($str);
}

export function noteConten(){
	var $leng = $('.photo').length-1;
    
    var $height = parseInt($('.note').height()) + 85;
    var $width = parseInt($('.note').width());
	for(let i = 0; i < $leng; i++ ){
        $('.photo').eq(i).on('click',function(){
            var t = new TimelineMax();
            $('.mark').css('display','block');
            t.to('.content',1,{
                width : $width*0.6,
                height : $height*0.7,
                left : $width*0.2,
                top : $height*0.15,
                opacity : 1,
                background : '#000',
                display : 'block'
            });
        });
    }
};
export function close(){

    $('.close').on('click',function(){
        var t = new TimelineMax();
        t.to('.content',1,{
            width : 0,
            height : 0,
            left : 0,
            top : 0,
            opacity : 0,
            background : '#000',
            display : 'none'
        });
        $('.mark').css('display','none');
    });
};