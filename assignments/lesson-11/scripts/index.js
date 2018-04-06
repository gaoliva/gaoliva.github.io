$(function(){
    // jQuery Code goes here

    //console.log($('input[type="text"]').css('background-color'));

    /*
        var toggleStyle = function() {

            var inputFields = $('input[type="text"]');

            if(inputFields.css('background-color') === 'rgb(255, 0, 0)'){
                // Set background color to white
                inputFields.css('background-color', 'rgb(255, 255, 255)');
            }
            else {
                // Set bacgrounf color to red
                inputFields.css('background-color', 'rgb(255, 0, 0)');
            }
        }

        $('#ReqAQuoteBtn').click(toggleStyle);
        */



    $('.coreValues').append("<li><strong>This is brand new</strong></li>");


    $("<li><strong>This is brand new</strong></li>").prependTo(".coreValues");




    var nameVal = $('input[name="nameVal"]');

    function fillEmpty(){
        if( nameVal.val() == ''){
            nameVal.val( ' John Doe');
        }

    }

    $('#ReqAQuoteBtn').click(fillEmpty());




})
