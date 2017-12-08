/**
 * Created by lenovo on 17/12/5 005.
 */
 /*Initialize Swiper*/
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next'
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});

var music=document.getElementById("music");
var music_bgd=document.querySelectorAll(".music_bgd")[0];
var music_Img=document.querySelectorAll(".music_Img")[0];
var audio=document.querySelector("audio");
var flag=1;

music.onclick=function (){
    if (flag==1){
        music_bgd.style.display="none";
        music_Img.style.animation="none";
        audio.pause();
        flag=0
    }else{
        music_bgd.style.display="block";
        music_Img.style.animation="music 2s linear infinite";
        audio.play();
        flag=1
    }
};