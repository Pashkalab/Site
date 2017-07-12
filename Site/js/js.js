    function my_f1() {
        var object = document.getElementsByClassName('dropdown_block')[0];
        var angle = document.getElementById('dropdown_angle');
        var angle1 = document.getElementById('dropdown_angle1');
        object.style.display == 'block' ? object.style.display = 'none' : object.style.display = 'block';
        if (object.style.display == 'none') {
            angle.className = "fa fa-angle-down";
            angle1.className = "fa fa-angle-down";
        } else {
            angle.className = "fa fa-angle-up";
            angle1.className = "fa fa-angle-up";

        }

    } //скрипт для появления каталога товаров

    function my_f2() {
        var a = document.getElementsByClassName('mask-content')[0];
        var angel = document.getElementsByClassName('mi_1')[0];
        var menu = document.getElementsByClassName('drop_menu')[0];
        var triangle = document.getElementsByClassName('triangle')[0];
        var i = angel.getElementsByTagName("i");
        var fon = document.getElementById("fon");
        menu.style.display == 'block' ? menu.style.display = 'none' : menu.style.display = 'block';
        if (menu.style.display == 'block') {
            triangle.style.display = 'block';
            a.style.display = 'block';
        } else {
            // i.style.display = 'none';
            triangle.style.display = 'none';
            a.style.display = 'none';
        }
    } // скрипт для появления еще одного окна с товарами

    function my_f3() {
        var b = document.getElementsByClassName('mask-content')[0];
        var menu1 = document.getElementsByClassName('drop_menu')[0];
        var triangle1 = document.getElementsByClassName('triangle')[0];
        if (b.style.display = "block") {
            b.style.display = "none";
            triangle1.style.display = 'none';
            menu1.style.display = 'none';
        } else {
            b.style.display = "block";
            
        }

    }

    $(document).on('ready', function () {
        $('.responsive').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }); // скрпит слайдера товаров  

    $(window).scroll(function () {
        var id = document.getElementById("responsive-menu");

        var a = id.getElementsByTagName("a");
        if ($(window).scrollTop() > 10) {
            $('#responsive-menu').addClass('scroll');

        } else {
            $('#responsive-menu').removeClass('scroll')

        }
    }); //скрпит для скролинга меню
