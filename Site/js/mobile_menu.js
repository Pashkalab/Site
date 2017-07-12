var main = function() { 
    var a = document.getElementsByClassName('mask-content')[0];
    $('.navbar-toggle').click(function() { 
        $('#menu_mobile').animate({  
            left: '0px'  
        }, 200); 
        $('body').animate({ 
            left: '285px' 
        }, 200); 
        a.style.display = 'block';
        
    });
 
    
 
/* Закрытие меню */
 
    $('.icon-close').click(function() {  
        $('#menu_mobile').animate({ 
            left: '-285px'  
        }, 200); 
         
    $('body').animate({  
            left: '0px'  
        }, 200); 
        a.style.display = 'none';
    });
};
 
$(document).ready(main); 