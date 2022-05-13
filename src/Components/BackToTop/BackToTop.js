import React from 'react';
import './BackToTop.scss';
import $ from 'jquery';





const BackToTop = () => {

    $(document).ready(function() {
  
        var btn = $('#button');
      
        $(window).scroll(function() {
          if ($(window).scrollTop() > 300) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });
      
        btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
        });
      
      });
   

    return (
        <button id="button"></button>
    )
}

export default BackToTop;