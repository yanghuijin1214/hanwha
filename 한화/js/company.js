$(document).ready(function () {

    //상대적인 좌표 값을 반환, .offset()가 반환 하는 객체는 left와 top 속성을 제공

    //top 속성을 이용해서 메뉴의 수직 위치를 구함

    var menu_offset = $('.nav').offset();

    //스크롤 바를 스크롤할 때 매개변수로 전달된 함수를 실행시킴

    $(window).scroll(function () {

        //문서의 스크롤바 위치와 메뉴의 수직 위치를 비교해서 

        //문서의 스크롤바 위치가 메뉴의 수직 위치보다 크면(위치로 표현하면 아래)

        if ($(document).scrollTop() > menu_offset.top) {

            //메뉴에 menu-fixed 클래스를 추가해서 메뉴를 고정시킴

            $('.nav').addClass('nav-fixed');

        } else {

            //메뉴에서 menu-fized 클래스를 제거해서 메뉴를 수직으로 이동할 수 있도록 처리함

            $('.nav').removeClass('nav-fixed');

        }

    });

});
$(document).ready(function () {
    var menu_offset = $('.contentNav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > menu_offset.top) {
            $('.contentNavWrap').addClass('contentNav-fixed');
        } else {
            $('.contentNavWrap').removeClass('contentNav-fixed');
        }
    });
});
$(function () {
    $(".Bt").click(function () {
        $(".expand").toggle();
    });
});
$(document).ready(function () {
    var menu_offset = $('.area-headline').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > menu_offset.top) {
            $('.area-headline').addClass('history-fixed');
        } else {
            $('.area-headline').removeClass('history-fixed');
        }
    });
});
$(document).ready(function () {
    var menu_offset = $('.area-headline').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > menu_offset.top) {
            $('.history_ul').addClass('history_Y-fixed');
        } else {
            $('.history_ul').removeClass('history_Y-fixed');
        }
    });
});
$(document).ready(function () {
    var menu_offset = $('.area-headline').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > menu_offset.top) {
            $('#headLine_1').addClass('headLine-fixed');
        } else {
            $('#headLine_1').removeClass('headLine-fixed');
        }
    });
});
$(document).ready(function () {
    var menu_offset = $('.line_2').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > menu_offset.top) {
            $('#headLine_2').addClass('headLine_2-fixed');
        } else {
            $('#headLine_2').removeClass('headLine_2-fixed');
        }
    });
});
$(document).ready(function () {
    var menu_offset = $('.line_3').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > menu_offset.top) {
            $('#headLine_3').addClass('headLine_3-fixed');
        } else {
            $('#headLine_3').removeClass('headLine_3-fixed');
        }
    });
});
$(document).ready(function () {
    var menu_offset = $('.line_4').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > menu_offset.top) {
            $('#headLine_4').addClass('headLine_4-fixed');
        } else {
            $('#headLine_4').removeClass('headLine_4-fixed');
        }
    });
});
$(document).ready(function () {
    var menu_offset = $('.line_5').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > menu_offset.top) {
            $('#headLine_5').addClass('headLine_5-fixed');
        } else {
            $('#headLine_5').removeClass('headLine_5-fixed');
        }
    });
});

// single2 js end

// single1 js start
$(document).ready(function () {
    var menu_offset = $('.nav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > menu_offset.top) {
            $('.nav').addClass('nav-fixed');
        } else {
            $('.nav').removeClass('nav-fixed');
        }
    });
});
$(document).ready(function () {
    var menu_offset = $('.contentNav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > menu_offset.top) {
            $('.contentNavWrap').addClass('contentNav-fixed');
        } else {
            $('.contentNavWrap').removeClass('contentNav-fixed');
        }
    });
});