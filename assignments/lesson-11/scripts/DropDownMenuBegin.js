$(function(){
    // All jQuery code goes here

    /*
        $('.dropdownMenu > li').hover( function(){
            // Mouseover

            $(this).children("ul").slideDown(200);
        }, function(){
            // Mouseout

            $(this).children("ul").slideUp(200);
        })
        */

    $('.dropdownMenu > li').hover( function(){
        // Mouseover

        $(this).children("ul").slideToggle(200);
    })


})
