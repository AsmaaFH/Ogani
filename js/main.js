//toggle sidebar menu
$(function() {

    $('.sidebar button').on('click', function(){
        $('.sidebar .menu').slideToggle('slow');
    })

    //Toggle sidenav
    $('#nav-toggler').on('click', function(e){
        e.stopPropagation();
        $('.sideNav-overlay').toggleClass('active');
        $('.sidenav').toggleClass('active');
    })

    $('body').on('click', function(){
        if($('.sidenav').hasClass('active')) {
            $(".sidenav").toggleClass('active');
            $('.sideNav-overlay').toggleClass('active');
        }
    })

    //Change Language
    $('.language .choices div').each(function(){
        $(this).on('click',function(){
            var text =$(this).text();
            console.log($(this).text());
            $('.language .chosen .text').text(text);
            $('.language .icon').each(function(){
                if($(this).hasClass(text)){
                    $(this).css('display','inline-block');
                }else{
                    $(this).css('display','none');
                }
            })
        })
    })

    // owl carousel
    $(".departments .owl-carousel").owlCarousel({
        items : 4,
    });

    $(".latest-products .owl-carousel").owlCarousel({
        items : 1,
        autoPlay : true,
        responsive:false,
    });

    //Categories Filter
    resetCategoryFilter();
    var containerEl = document.querySelector('.featured');
    var mixer = mixitup(containerEl);

    $('.featured li a').on('click',function(){
        $('.featured li a').removeClass('active');
        $(this).addClass('active');
    })


    // $('.category-filter li').each(function(){
    //     $(this).on('click', function(e){
    //         var category = $(this).data('category');
    //         if(category == 'all'){
    //             resetCategoryFilter();
    //         }else{
    //             $('.featured .item').each(function(index,el){
    //                 if($(this).hasClass(category)){
    //                     $(this).addClass('show');
    //                 }else{
    //                     $(this).removeClass('show');
    //                 }
    //             })
    //         }
    //     });
    // })

    function resetCategoryFilter(){
        $('.featured .item').each(function(){
            $(this).addClass('show');
        })
    }
});


