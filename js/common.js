var deviceSize = 992
function scrollOX(status) {
    $('html').css({
        overflowY: status
    })
    return $('html').width()
}


var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO
if (scD > 0) {
    deviceSize = deviceSize - scD
}

let ww = $(window).width()
if (ww > deviceSize) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}


$(window).on('resize', function () {
    let ww = $(window).width()
    if (ww > deviceSize && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('mobile')
        location.reload()
    } else if (ww <= deviceSize && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc')
        location.reload()
    }
})

$(window).on('load', function(){
if( !sessionStorage.getItem('refresh')){
    sessionStorage.setItem('refresh', 'yes')
    $('.introAni').addClass('on')
    let count = 0;
    let timer = setInterval(add, 30)
    function add() {
        count++
        if (count>=30) { 
            clearInterval(timer) 
            $('.introAni').animate({
                opacity:'0'
            }, 100, function(){
                $(this).removeClass('on')
            })
        }
        // $('.introAni div').eq(1).text(count+'%')
    }
}

let objString = localStorage.getItem('objkey') 
    if ( objString ) {
        const obj = JSON.parse(objString)
        if ( Date.now()>obj.expire ) {
            $('.popup').addClass('on')
            localStorage.removeItem('objkey')
        } else {
            $('.popup').removeClass('on')
        }
    } else {
        $('.popup').addClass('on')
    }


})

$('.close button').on('click', function(){
    if ( $(this).prev().prop('checked') ) {
        let tts = Date.now()+(24*60*60*1000)   // 하루는 (24*60*60*1000)ms
        const obj = {
            check : 'yes',
            expire : tts
        }
        localStorage.setItem('objkey', JSON.stringify(obj))
    } 
    $('.popup').removeClass('on')
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
    function () {
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
            $(this).find('.depth2').css({
                opacity: '1',
                transform: 'translateX(0px)',
                transition: 'all .5s',
                visibility: 'visible'
            })
        }
    },
    function () {
        if ($('html').hasClass('pc')) {
            $(this).find('.depth2').css({
                opacity: '0',
                transform: 'translateX(-15px)',
                transition: 'all 0s',
                visibility: 'collapse'
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
    function () {
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
    function () {
        $(this).find('a').css({
            color: 'white'
        })
    }
)


// 헤더 스크롤이벤트
// let headerNear = $('#header').offset().top - $(window).height()/1.3

$(window).on('scroll', function () {
    if ($('html').hasClass('pc')) {
        $(window).on('scroll', function () {
            let sct = $(this).scrollTop()
            if (sct >= 100) {
                $('#background').addClass('on')
            } else {
                $('#background').removeClass('on')
            }
        })

    }
})

$(window).on('scroll', function () {
    if ($('html').hasClass('pc')) {
        $(window).on('scroll', function () {
            let sct = $(this).scrollTop()
            if (sct >= 100) {
                $('#header').addClass('on')
            } else {
                $('#header').removeClass('on')
            }
        })

    }
})




// 모바일 시작

// 햄버거 버튼
$('#header .open').on('click', function () {
    if(!$(this).hasClass('active-1')){
        $('.nav').slideDown()
        return false
    } else {
        $('.nav').slideUp()
    }
    
})
// $('#header .open').on('click', function () {
//     $('.nav').slideDown() && $(this).hide() && $('.close').fadeIn()
//     return false
// })

// $('#header .close').on('click', function () {
//     $('.nav').slideUp() && $(this).hide() && $('.open').fadeIn()
//     return false
// })


const menuTrigger = document.querySelector('.open');
menuTrigger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active-1');
});



//네비게이션
$('#header .depth1 > li > a').on('click', function () {
    if ($('html').hasClass('mobile') && $(this).next().is('.depth2')) {
        $(this).next().stop().slideToggle(0)
        $(this).parent().siblings().find('.depth2').slideUp(0)
        return false
    }
})

$('#header .nav .depth1 > li > a').click(
    function () {
        if ($('html').hasClass('mobile')) {
            $(this).toggleClass('on')
            $(this).parent('li').siblings().children('a').removeClass('on')
            $(this).parent('li').find('li').removeClass('on')
        }
    })



$('#header .nav .depth2 > li').click(
    function () {
        if ($('html').hasClass('mobile')) {
            $(this).addClass('on')
            $(this).siblings().removeClass('on')
        }
    })



// footer 구역

$('#footer .bottom_menu1 ul li a').hover(
    function () {
        $(this).parent('li').addClass('on')
    },
    function () {
        $(this).parent('li').removeClass('on')
    }
)




// gotop

$(window).scroll(function () {
    let sct = $(this).scrollTop()
    if (sct > 100) {
        $('#gotop').fadeIn(300)
    } else {
        $('#gotop').fadeOut(300)
    }
})

$('#gotop a').click(function () {
    $('html').animate({
        scrollTop: '0'
    }, 500)
    return false
})