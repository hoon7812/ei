$(function(){
    /* PC */
    $("#type-a #gnb").hover(function(){
        $("#type-a #header").addClass("on");
        $(this).closest("#gnb").find(".sub").show();
        if ($(".dim").length == 0){
            $("body").append("<div class='dim'></div");
        }
    },function (){
        $("#type-a #header").removeClass("on");
        $(this).closest("#gnb").find(".sub").hide();
        $(".dim").remove();
    });

    $("#quick ul li a").hover(function(){
        $(this).find(".hover").show();
    },function(){
        $(this).find(".hover").hide();
    });

    $(".gnb-b area").hover(function(){
        $("#gnb .sub ul li").hide();
        $("#gnb .sub ul li").eq($(this).index()).show();
    });

    $("#gnb").hover(function(){
        $("#gnb .sub ul li").hide();
    });

    $(".btn_personal").click(function(){
        $(".personal_area").toggle();
    });

    /* 모바일 */
    $("#type-a-m #gnb").hover(function(){
        $("#type-a #header").addClass("on");
        $(this).closest("#gnb").find(".sub").show();
        if ($(".dim").length == 0){
            $("body").append("<div class='dim'></div");
        }
    },function (){
        $("#type-a-m #header").removeClass("on");
        $(this).closest("#gnb").find(".sub").hide();
        $(".dim").remove();
    });

    $(".btn_sum").click(function(){
        $(".sum_open").toggle();
        $(".dim-m").toggle();
    });
    
    $(".submit_area").click(function(){
        $(this).find('.sum_img').toggleClass('open');
    });

    
    $(".btn_submit_pop, .btn_bottom_next.pop").click(function(){
        $(".submit_pop").addClass('open');
        $(".dim-m").toggle();
    });

    $(".submit_pop_close, .submit_pop_done").click(function(){
        $(".submit_pop").removeClass('open');
        $(".dim-m").toggle();
    });

    

    /* 스와이퍼 */
    var swiper01 = new Swiper('.type01', {
        pagination: {
            el: ".swiper-pagination",
            clickable : true
        },    
        slidesPerView: 1,
        spaceBetween: 20
    });
    
    var swiper02 = new Swiper('.type02', {   
        scrollbar : {
            el : '.swiper-scrollbar',
            draggable: true,
        },
        slidesPerView: 3,
        spaceBetween: 0
    });
    var swiper03 = new Swiper('.type03', {
        scrollbar : {
            el : '.swiper-scrollbar',
            draggable: true,
        },
        slidesPerView: 1.29,
        spaceBetween: 8
    });
    
    var swiper04 = new Swiper('.type04', {   
        scrollbar : {
            el : '.swiper-scrollbar',
            draggable: true,
        },
        pagination: {
            el: ".swiper-pagination",
            type : 'fraction'
        },    
        slidesPerView: 2.1,
        spaceBetween: 8
    });

    var swiper05 = new Swiper('.type05', {   
        slidesPerView: 'auto',
        spaceBetween: 8,
        preventClicks: true,
        preventClicksPropagation: false,
        observer: true,
        observeParents: true
    });
    
    var swiper06 = new Swiper('.type06', {   
        slidesPerView: 'auto',
        spaceBetween: 17,
        preventClicks: true,
        preventClicksPropagation: false,
        observer: true,
        observeParents: true
    });
    
    var swiper07 = new Swiper('.type07', {
        slidesPerView: 1.05,
        spaceBetween: 8,
        preventClicks: true,
        preventClicksPropagation: false,
        observer: true,
        observeParents: true
    });

    // var swiper06 = new Swiper('.type06', {
    //     slidesPerView: 'auto',
    //     spaceBetween: 17,
    //     preventClicks: true,
    //     preventClicksPropagation: false,
    //     observer: true,
    //     observeParents: true
    // });
    // var $snbSwiperItem = $('.type06 .swiper-wrapper .swiper-slide a');
    // $snbSwiperItem.click(function(){
    //     var target = $(this).parent();
    //     $snbSwiperItem.parent().removeClass('on')
    //     target.addClass('on');
    //     muCenter(target);
    // })

    // function muCenter(target){
    //     var snbwrap = $('.type06 .swiper-wrapper');
    //     var targetPos = target.position();
    //     var box = $('.type06');
    //     var boxHarf = box.width()/2;
    //     var pos;
    //     var listWidth=0;
        
    //     snbwrap.find('.swiper-slide').each(function(){ listWidth += $(this).outerWidth(); })
        
    //     var selectTargetPos = targetPos.left + target.outerWidth()/2;
    //     if (selectTargetPos <= boxHarf) { // left
    //         pos = 0;
    //     }else if ((listWidth - selectTargetPos) <= boxHarf) { //right
    //         pos = listWidth-box.width();
    //     }else {
    //         pos = selectTargetPos - boxHarf;
    //     }
        
    //     setTimeout(function(){snbwrap.css({
    //         "transform": "translate3d("+ (pos*-1) +"px, 0, 0)",
    //         "transition-duration": "500ms"
    //     })}, 200);
    // }

})