var main_catalog = function() { 
    var a = document.getElementsByClassName('mask-content')[0]; 
    $('#catalog_tablet').click(function() { 
        $('#cataloge_window').animate({
            left: '0px' 
        }, 200); 
        $('body').animate({ 
            left: '285px' 
        }, 200); 
        a.style.display = 'block';
    });
 
 
/* Закрытие меню */
 
    $('.btn-close').click(function() { 
        $('#cataloge_window').animate({ 
            left: '-285px'
        }, 200); 
    $('body').animate({ 
            left: '0px' 
        }, 200); 
        a.style.display = 'none';
    });
};
 
$(document).ready(main_catalog); 