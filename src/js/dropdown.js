import * as $ from 'jquery'


function checkBtn(dropdown, value) {
    let btn = dropdown.find('.button.clean');
    // console.log(btn);
    if(value == 0) {
        btn.css("visibility", "hidden");
        dropdown.find('.increment-input').each(function() {
            if(!$(this).children('.increment-input__container').children('.increment-input__minus').hasClass('disabled')) {
                $(this).children('.increment-input__container').children('.increment-input__minus').toggleClass('disabled');
            }
        });
    }
    else btn.css("visibility", "visible");
}

function updateInput(dropdown) {
    let str = '';
    let value = 0;
    let input = dropdown.find('.dropdown__title__input');
    let inc = dropdown.find('.increment-input');

    inc.each( function() {
        let temp = $(this).children('.increment-input__container').children('.increment-input__input').val();
        value += +temp;
        str += temp + ' ' + $(this).children()[0].innerText.toLowerCase() + "; ";
        
    });

    checkBtn(dropdown, value);

    if(dropdown.find('.increment-input__buttons-block').length == 0) {
        input.val(str.slice(0, 20) + '...');
    } else {
        input.val(value + ' гостя');
    }
    
}


$('.button.clean').on('click', (e) => {
    // console.log( $(e.currentTarget).parents('.dropdown__items').find('.increment-input') );
    $(e.currentTarget).parents('.dropdown__items').find('.increment-input').each( function() {
        $(this).find('.increment-input__input').val( 0 );
    });
    updateInput($(e.currentTarget).parents('.dropdown'));
});

$(document).on('click', '.increment-input__minus', function () {
    let total = $(this).next();
    console.log(total);
    if (total.val() > 0) {
        total.val(+total.val() - 1);
        if(total.val() == 0) {
            $(this).toggleClass('disabled');
        }
    }
    updateInput($(this).parents(".dropdown"));
});

$(document).on('click', '.increment-input__plus', function () {
    let total = $(this).prev();
    total.val(+total.val() + 1);

    if($(this).prev().prev().hasClass('disabled')) {
        $(this).prev().prev().toggleClass('disabled');
    }

    updateInput($(this).parents(".dropdown"));
});

$('.dropdown__title__submit').on('click', function() {
    $(this).parents('.dropdown').find('.dropdown__items').toggleClass('visible');
});

