import Post from './post'
// import '../css/styles.css'
import * as $ from 'jquery'
import 'material-design-icons'
import '../sass/styles.scss'
import './jquery.maskedinput'
import './dropdown'
import '../css/datepicker.css'
import './datepicker'

import '../css/simplePagination.css'
import './jquery.simplePagination'

const post = new Post('Webpack Post Title');

$('#masked').mask("99.99.9999", {placeholder: "DD.MM.YYYY" });


$('.datepicker-here').datepicker({
    dateFormat: 'dd M',
    range: true,
    position: "bottom left",
    clearButton: true,
    submitButton: true,
    multipleDatesSeparator: " - ", 
    navTitles: {
        days: 'MM yyyy'
    }
});


$('.checkbox__item__input').on('click', (e) => {
    // $(e.target).val() == "done" ? $(e.target).val("") : $(e.target).val("done");
    $(e.target).toggleClass('checked');
});


$('.like').on('click', function() {
    
    $(this).children('.like__icon').text() == "favorite" ? $(this).children('.like__icon').text("favorite_border") : $(this).children('.like__icon').text("favorite");
    $(this).toggleClass('active'); 

});

$('.button.border').on('click', function() {
    
    // $(this).children('.like__icon').text() == "favorite" ? $(this).children('.like__icon').text("favorite_border") : $(this).children('.like__icon').text("favorite");
    $(this).toggleClass('active'); 

});


$('.paginator').pagination({
    cssStyle: 'light-theme',
    pages: 15,
    displayedPages: 3,
    edges: 1,
    prevText: "",
    nextText: "arrow_forward"
});

// console.log( $(document).find('.datepicker--cells.datepicker--cells-days').children() );

console.log(post.string());