$(function () {
    //精选房源轮播，用的是swiper插件
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    //播放和暂停视频
    /*var video = document.getElementById('recommend-video');
     var $videoBg = $('#video-bg');
     var $iconPlay = $('#icon-play');
     $iconPlay.on('click', function () {
     console.log(video.paused);
     if(video.paused){
     $videoBg.hide();
     $(this).hide();
     video.play();
     }
     });
     video.addEventListener('click', function () {
     $videoBg.show();
     $iconPlay.show();
     video.pause();
     });*/

    // 视频弹层
    $('#video').on('click', function () {
        $('#videoPlayWrap').fadeIn(300);
        document.getElementById('movie').play();

    });
    $('.video_playwrap .close').on('click', function () {
        $('#videoPlayWrap').fadeOut(300);
        document.getElementById('movie').pause();
    })
});