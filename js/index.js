/**
 * Created by Administrator on 2016/5/10.
 */
window.onload = function(){
    /*var iHeight = document.documentElement.clientHeight;
    var acemn = document.querySelector(".contentImg");

    acemn.style.height = iHeight + 'px';
    var cStart = document.querySelectorAll('.start');
    for(var i=0;i<cStart.length;i++){
        cStart[i].style.height = iHeight + 'px';
    }

    var cStart1 = document.querySelectorAll('.start1');
    for(var i=0;i<cStart1.length;i++){
        cStart1[i].style.height = (Number(iHeight) - 85) + 'px';
    }*/

    //第二屏内容
    /*var cDivPh = document.getElementsByClassName('photo');

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

    function CreatePhoto(obj){
        var cWrap = document.querySelectorAll('.wrap')[0];

        var addImg = document.createElement('img');
        //addImg.src = obj.src;
        addImg.alt = obj.alt;
        var addP = document.createElement('p');
        addP.className = 'image';
        addP.appendChild(addImg);

        var addDivT = document.createElement('div');
        addDivT.className = 'side side-front';
        addDivT.appendChild(addP);

        var addPb = document.createElement('p');
        addPb.className = 'desc';
        addPb.innerHTML = obj.alt;
        var addDivB = document.createElement('div');
        addDivB.className = 'side side-back';
        addDivB.appendChild(addPb);

        var addDivPW = document.createElement('div');
        addDivPW.className = 'photo-wrap';
        addDivPW.appendChild(addDivT);
        addDivPW.appendChild(addDivB);

        var addDivPh = document.createElement('div');
        addDivPh.className = 'photo photo_front phWH';
        addDivPh.appendChild(addDivPW);

        cWrap.appendChild(addDivPh);
    }*/
    //测试
    
    /*var sheel = {};
    sheel.init = function(){

    };
    sheel.resize = function(){  //设置每一屏的高度和top值

    };*/
    /*
    * Animate:动画
    * */
};
