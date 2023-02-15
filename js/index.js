// article1 구역

$('.article1 .slide_g').slick({
    speed: 600,             // 클릭이동시간
    autoplay: true,         // 자동재생(기본값 false)
    autoplaySpeed: 4000,    // 슬라이더간격시간(기본값 4000ms)
    dots: true,             // 번호버튼(기본값 false)
    arrows: true,           // 좌우측 방향 아이콘(기본값 true)
    pauseOnFocus: false,    // 화살표 눌러도 멈추지 않게함
    fade: true,             // 투명도
    prevArrow: '<button class="slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></button>'
})


// article2 구역

$('.article2 .content_g .content').on('mouseover', function () {
    $(this).addClass('on')
})
$('.article2 .content_g .content').on('mouseout', function () {
    $(this).removeClass('on')
})


// article4 구역

// let article4Near = $('.article4').offset().top - $(window).height()/1.2

let article4Near = $('.article4').offset().top + $('.article4').outerHeight() / 5;


$(window).on('scroll', function () {
    // let sct = $(this).scrollTop()
    let sct = $(this).scrollTop() + $(this).height();
    if (sct >= article4Near) {
        $('.article4').addClass('on')
    } else {
        $('.article4').removeClass('on')
    }
})

$('.article4 .content .tab li').on('click', function () {
    let num = $(this).index()
    if (!$(this).hasClass('active')) {
        $(this).addClass('active').siblings().removeClass('active')
        $(this).parent('.tab').siblings('.table').eq(num).addClass('active')
            .siblings('.table').removeClass('active')
    }
})

$('.article4 .content2 .con, .article4 .content3 .con').hover(
    function () {
        $(this).addClass('on')
    },
    function () {
        $(this).removeClass('on')
    }
)


// article5 구역
$('.article5 .last_slide_g').slick({
    speed: 800,             // 클릭이동시간
    autoplay: true,         // 자동재생(기본값 false)
    autoplaySpeed: 4000,    // 슬라이더간격시간(기본값 4000ms)
    dots: true,             // 번호버튼(기본값 false)
    arrows: true,           // 좌우측 방향 아이콘(기본값 true)
    prevArrow: '<button class="slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></button>'
})

// let article5Near = $('.article5').offset().top - $(window).height()/1.2
let article5Near = $('.article5').offset().top + $('.article5').outerHeight() / 5;

$(window).on('scroll', function () {
    // let sct = $(this).scrollTop()
    let sct = $(this).scrollTop() + $(this).height();
    if (sct >= article5Near) {
        $('.article5').addClass('on')
    } else {
        $('.article5').removeClass('on')
    }
})


$(window).on('resize', function () {
   let r_height = $('.article4 .right').height()
   $('.article4 .left').css({
    height: r_height + 'px'
   })
   
})




// 모달창

// article2 구역의 돋보기 클릭하면 이미지를 모달창에서 크게 보기
$('.article2 ul li img').on('click', function () {
    let src = $(this).attr('src')
    let modal = `<div class="modal">`
    modal += `<div class="imgbox">`
    modal += `<img src="${src}" alt="">`
    modal += `<button type="button">닫기</button>`
    modal += `</div>`
    modal += `</div>`
    $('body').append(modal)
    $('.modal').css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)'
    })
    $('.imgbox').css({
        position: 'absolute',
        width: '300px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    })
    $('img').css({
        width: '100%'
    })
    $('.imgbox button').css({
        position: 'absolute',
        top: '0',
        right: '0',
        background: '#000',
        color: '#fff',
        padding: '5px 10px'
    })
    return false
})


// 모달창의 닫기 버튼 클릭하면 모달창 닫게 하기
$('body').on('click', '.modal button, .modal', function () {
    $('.modal').hide()
})

// 모달창의 링크걸린 이미지를 클릭했을때 모달창 닫히는것 막기
$('body').on('click', '.modal img', function (e) {
    e.stopPropagation()
})


