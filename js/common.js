var deviceSize = 992
function scrollOX(status){
    $('html').css({
        overflowY:status
    })
    return $('html').width()
}


var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO
if (scD>0){
    deviceSize = deviceSize - scD
}

    let ww = $(window).width()
    if (ww>deviceSize) {
        $('html').addClass('pc')
    } else {
        $('html').addClass('mobile')
    }


$(window).on('resize', function(){
    let ww = $(window).width()
    if(ww>deviceSize && !$('html').hasClass('pc')){
        $('html').addClass('pc').removeClass('mobile')
        location.reload()
    } else if( ww<=deviceSize && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc')
        location.reload()
    }
})



$('#navGroup .nav .depth1 > li').hover(
    function () {
        if ($('html').hasClass('pc')) {
            $(this).children('a').css({
                color: 'rgba(255, 255, 255, 0.45)',
                transition: 'all .3s'
            })
        }
        },
        function() {
            if ($('html').hasClass('pc')) {
                $(this).children('a').css({
                    color: 'white'
                })
            }
        }
)


$('#navGroup .nav .depth1 > li').hover(
    function () {
        if ($('html').hasClass('pc')) {
            $(this).find('.depth2').stop().fadeIn()
        }
        },
        function() {
            if ($('html').hasClass('pc')) {
                $(this).find('.depth2').stop().fadeOut() && $(this).find('.depth2').css({
                    display: 'none'
                })
            }
        }
)


$('#navGroup .nav .depth1 > li').hover(
    function () {
        if ($('html').hasClass('pc')) {
            $(this).find('.depth2').css({
                transform: 'translateX(0px)'
            })
        }
        },
        function() {
            if ($('html').hasClass('pc')) {
                $(this).find('.depth2').css({
                    transform: 'translateX(-13px)',
                    visible: 'hidden',
                })
            }
        }
)

$('#navGroup .nav .depth2 > li').hover(
    function () {
        if ($('html').hasClass('pc')) {
            $(this).find('a').css({
                transform: 'translateX(5px)',
                color: 'rgba(255, 255, 255, 0.3)',
                transition: 'all .3s'
            })
        }
        },
        function() {
            if ($('html').hasClass('pc')) {
                $(this).find('a').css({
                    transform: 'translateX(0px)',
                    color: 'rgba(255, 255, 255, 0.75)',
                })
            }
        }
)

$('#navGroup .nav2 .depth1 > li').hover(
    function () {
            $(this).find('a').css({
                color: 'rgba(255, 255, 255, 0.3)',
                transition: 'all .3s'
            })
        },
        function() {
                $(this).find('a').css({
                    color: 'white'
                })
        }
)



// 모바일 시작

// 메뉴열기버튼
$('#header .open').on('click', function () {
    $('.nav').slideDown() && $(this).hide() && $('.close').fadeIn()
    return false
})

$('#header .close').on('click', function () {
    $('.nav').slideUp() && $(this).hide() && $('.open').fadeIn()
    return false
})


$('#header .depth1 > li > a').on('click', function () {
    if ($('html').hasClass('mobile') && $(this).next().is('.depth2')) {
        $(this).next().stop().slideToggle()
        return false
    }
})




//네비게이션
$('#header .nav .depth1 > li > a').click(
    function () {
        if ($('html').hasClass('mobile') && $(this).parent('li').hasClass('on')){
            $(this).css ({
                color: 'rgba(255, 255, 255, 0.45)'
            }),
            $(this).parent('li').removeClass('on')
            return false
        } else if ($('html').hasClass('mobile')){
            $(this).css ({
                color: 'rgba(255, 255, 255, 0.9)'
            }),
            $(this).parent('li').addClass('on')
            return false
        } 
    })



$('#header .nav .depth2 > li').click(
    function () {
        if ($('html').hasClass('mobile') && $(this).hasClass('on')){
            $(this).find('a').css ({
                color: 'rgba(255, 255, 255, 0.9)'
            }),
            $(this).removeClass('on')
            return false
        } else if ($('html').hasClass('mobile')){
            $(this).find('a').css ({
                color: 'rgba(255, 255, 255, 0.45)'
            }),
            $(this).addClass('on')
            return false
        } 
    })

