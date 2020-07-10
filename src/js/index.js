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

$('#masked').mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" });
$('#masked2').mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" });

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

$('.datepicker-left').datepicker({
    dateFormat: 'dd.mm.yyyy',
    range: false,
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
    // console.log(e.target.className);
    $(e.target).toggleClass('checked');
});

$('.expandable-checkbox__title').on('click', function() {
    // $(e.target).val() == "done" ? $(e.target).val("") : $(e.target).val("done");
    
    $(this).children('span').text() == "keyboard_arrow_down" ? $(this).children('span').text("keyboard_arrow_up") : $(this).children('span').text("keyboard_arrow_down");
    $(this).parent().find(".expandable-checkbox__items").toggleClass('disabled'); 
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



(function() {
    $(document).ready(function() {
      var walkthrough;
      walkthrough = {
        index: 0,
        nextScreen: function() {
          if (this.index < this.indexMax()) {
            this.index++;
            return this.updateScreen();
          }
        },
        prevScreen: function() {
          if (this.index > 0) {
            this.index--;
            return this.updateScreen();
          }
        },
        updateScreen: function() {
          this.reset();
          this.goTo(this.index);
          return this.setBtns();
        },
        setBtns: function() {
          var $nextBtn, $prevBtn;
          $nextBtn = $('.next-screen');
          $prevBtn = $('.prev-screen');
          if (walkthrough.index === walkthrough.indexMax()) {
            $nextBtn.prop('disabled', true);
            $prevBtn.prop('disabled', false);
            return $lastBtn.addClass('active').prop('disabled', false);
          } else if (walkthrough.index === 0) {
            $nextBtn.prop('disabled', false);
            $prevBtn.prop('disabled', true);
            return $lastBtn.removeClass('active').prop('disabled', true);
          } else {
            $nextBtn.prop('disabled', false);
            $prevBtn.prop('disabled', false);
            return $lastBtn.removeClass('active').prop('disabled', true);
          }
        },
        goTo: function(index) {
          $('.screen').eq(index).addClass('active');
          return $('.dot').eq(index).addClass('active');
        },
        reset: function() {
          return $('.screen, .dot').removeClass('active');
        },
        indexMax: function() {
          return $('.screen').length - 1;
        },
        closeModal: function() {
          $('.walkthrough, .shade').removeClass('reveal');
          return setTimeout(((function(_this) {
            return function() {
              $('.walkthrough, .shade').removeClass('show');
              _this.index = 0;
              return _this.updateScreen();
            };
          })(this)), 200);
        },
        openModal: function() {
          $('.walkthrough, .shade').addClass('show');
          setTimeout(((function(_this) {
            return function() {
              return $('.walkthrough, .shade').addClass('reveal');
            };
          })(this)), 200);
          return this.updateScreen();
        }
      };
      $('.next-screen').click(function() {
        return walkthrough.nextScreen();
      });
      $('.prev-screen').click(function() {
        return walkthrough.prevScreen();
      });
      $('.close').click(function() {
        return walkthrough.closeModal();
      });
      $('.open-walkthrough').click(function() {
        return walkthrough.openModal();
      });
      walkthrough.openModal();
      return $(document).keydown(function(e) {
        switch (e.which) {
          case 37:
            walkthrough.prevScreen();
            break;
          case 38:
            walkthrough.openModal();
            break;
          case 39:
            walkthrough.nextScreen();
            break;
          case 40:
            walkthrough.closeModal();
            break;
          default:
            return;
        }
        e.preventDefault();
      });
    });
  
  }).call(this);