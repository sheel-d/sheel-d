/*第二屏*/
import $ from 'jquery';


export function h3(){
	//return '第二屏';
	console.log('第二屏');
};

export function note(){
	var cDivPh = document.getElementsByClassName('photo');

    var data = [
            {
                left:"4%",
                top:"7%",
                src:"html",
                alt:"html"
            },{
                left:"28%",
                top:"7%",
                src:"css",
                alt:"css"
            },{
                left:"52%",
                top:"7%",
                src:"javascript",
                alt:"javascript"
            },{
                left:"76%",
                top:"7%",
                src:"html5",
                alt:"html5"
            },{
                left:"4%",
                top:"52%",
                src:"css3",
                alt:"css3"
            },{
                left:"28%",
                top:"52%",
                src:"react",
                alt:"react"
            },{
                left:"52%",
                top:"52%",
                src:"ES6",
                alt:"ES6"
            },{
                left:"76%",
                top:"52%",
                src:"node",
                alt:"node"
            }
        ];

    for(var i=0;i<data.length;i++){
        CreatePhoto(data[i]);
        cDivPh[i].style.left = data[i].left;
        cDivPh[i].style.top = data[i].top;
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
                            <p class="desc">html</p>\
                        </div>\
                    </div>\
                </div>';
    var $str = $(str);
    $('.wrap').append($str);
}

export function noteConten(){
	var $leng = $('.photo').length;
	console.log($leng);
};