'use strict'
document.addEventListener('DOMContentLoaded', ()=>{
    //настройка слайдера
    if(document.body.clientWidth <= 790){
        $('.catalog_detail_imgs_list').owlCarousel({
            loop:true,
            nav:false,
            items:2,
            dots:false,
            margin: 30,
            responsive: {
                640: {
                    items: 2
                },
                0: {
                    items: 1,


                }
            }
        })
    }

})