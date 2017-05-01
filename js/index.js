$(function () {
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