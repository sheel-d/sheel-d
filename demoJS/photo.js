
import $ from 'jquery';

import {photoData} from './photoData.js';

export function note(){
	var cDivPh = document.getElementsByClassName('photo');

    var data = photoData;
    
    var $heightNum = parseInt($('.wrap').height())/160;
    var $widthNum = parseInt($('.wrap').width())/210;
    var length = parseInt($heightNum * $widthNum);

    for(var i=0;i<length;i++){
        CreatePhoto(data[i]);
    }
    
    for(var i=0;i<length;i++){
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
                                <img src='+obj.src+' alt='+obj.alt+' />\
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

