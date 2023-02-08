$('.article1 .slide_g').slick({
    speed:1500,             // 클릭이동시간
    autoplay:true,         // 자동재생(기본값 false)
    autoplaySpeed:4000,    // 슬라이더간격시간(기본값 4000ms)
    dots:true,             // 번호버튼(기본값 false)
    arrows:true,           // 좌우측 방향 아이콘(기본값 true)
    fade: true,             // 투명도
    prevArrow:'<button class="slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:'<button class="slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></button>'
})


// article2 구역

$('.article2 .content_g .content').on('mouseover', function(){
    $(this).addClass('on')
})
$('.article2 .content_g .content').on('mouseout', function(){
    $(this).removeClass('on')
})