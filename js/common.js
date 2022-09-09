$(document).ready(function () {

    // close modal 
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.zipcodemodal').length && !$target.closest('.cbpackages__btn').length) {
            $('.modalbg').removeClass('show');
        }
    });

    $('.zipsubmitlink').click(function (e) {
        // e.preventDefault();
        $('.modalbg').removeClass('show');
    });

    // INPUT LABELS - small
    var formFields = $('.inputfield__wrapper .inputfield');

    formFields.each(function () {
        let field = $(this);
        let input = field.find('input');
        let label = field.find('label');

        function checkInput() {
            let valueLength = input.val().length;

            if (valueLength > 0) {
                label.addClass('freeze');
                input.addClass('actinput');
            } else {
                label.removeClass('freeze');
                input.removeClass('actinput');
            }
        }

        input.change(function () {
            checkInput();
        });
    });

    // remove error message when typing
    $('.zipcodemodal .inputfield input').bind('input', function () {
        $('.zipcodemodal .inputfield__wrapper').removeClass('input-validation-error');
    });

    // add error message if input is empty or not valid
    $('.zipsubmit').click(function (e) {

        e.preventDefault();


        $.fn.isValid = function () {
            return this[0].checkValidity()
        }

        if ($('#zip').val().length > 0 && $('#zip').isValid() == true) {
            $('.zipcodemodal .inputfield__wrapper').removeClass('input-validation-error');
            $('.zipcodemodal .inputfield__wrapper').addClass('valid');

        } else {
            $('.zipcodemodal .inputfield__wrapper').addClass('input-validation-error');
            $('.zipcodemodal .inputfield__wrapper').removeClass('valid');
        }
    });


    // show modal "zip-code"
    $('.cbpackages__btn').click(function (e) {
        e.preventDefault();
        $('.modalbg').addClass('show');
    });



    // STEPS PAGE
    // 1

    $('.steps__checkboxfield input').not($('#5')).change(function () {
        $('#5').prop('checked', false);
        if ($('.steps__checkboxfield input').is(':checked')) {
            $('.step1 .nextbtn').removeClass('disabled');
        } else {
            $('.step1 .nextbtn').addClass('disabled');
        }
    });

    $('#5').change(function () {
        $('.steps__checkboxfield input').not($(this)).prop('checked', false);

        if ($(this).is(':checked')) {
            $('.step1 .nextbtn').removeClass('disabled');
        } else {
            $('.step1 .nextbtn').addClass('disabled');
        }
    });

    // 2
    $('.step2 .radiofieldbox input').change(function () {
        if ($('.step2 .radiofieldbox input').is(':checked')) {
            $('.step2 .nextbtn').removeClass('disabled');
        } else {
            $('.step2 .nextbtn').addClass('disabled');
        }
    });

    // 3
    $('.step3 .radiofieldbox input').change(function () {
        if ($('.step3 .radiofieldbox input').is(':checked')) {
            $('.step3 .nextbtn').removeClass('disabled');
        } else {
            $('.step3 .nextbtn').addClass('disabled');
        }
    });

    // 4
    $('.step4 .radiofieldbox input').not($('#5')).change(function () {
        if ($('.step4 .radiofieldbox input').is(':checked')) {
            $('.step4 .nextbtn').removeClass('disabled');
            $('.calendarsection').hide();
        }
    });

    $('.step4 #5').change(function () {
        $('.calendarsection').show();
        $('.step4 .nextbtn').addClass('disabled');
    });

    $('#datepicker1').change(function () {
        if ($('#datepicker1').val().length > 0) {
            $('.step4 .nextbtn').removeClass('disabled');
        } else {
            $('.step4 .nextbtn').addClass('disabled');
        }
    });

    // datepicker
    if ($('#datepicker1').length) {
        $('#datepicker1').datepicker({
            numberOfMonths: 2,
            showCurrentAtPos: 0,
            autoSize: true,
            dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        });

        var debounce;
        $(window).resize(function () {
            clearTimeout(debounce);
            if ($(window).width() < 576) {
                debounce = setTimeout(function () {
                    debounceDatepicker(1);
                }, 250);
            } else {
                debounce = setTimeout(function () {
                    debounceDatepicker(2)
                }, 250);
            }
        }).trigger('resize');

        function debounceDatepicker(no) {
            $("#datepicker1").datepicker("option", "numberOfMonths", no);
        }
    }

    // calendarsection
    var formFields2 = $('.calendarsection');

    formFields2.each(function () {
        let field = $(this);
        let input = field.find('input');
        let label = field.find('label');

        function checkInput() {
            let valueLength = input.val().length;

            if (valueLength > 0) {
                label.addClass('freeze');
                input.addClass('actinput');
            } else {
                label.removeClass('freeze');
                input.removeClass('actinput');
            }
        }

        input.change(function () {
            checkInput();
        });

    });

    // step 5
    // label
    var formFields2 = $('.inputfields .inputfield');

    formFields2.each(function () {
        let field = $(this);
        let input = field.find('input');
        let label = field.find('label');

        function checkInput() {
            let valueLength = input.val().length;

            if (valueLength > 0) {
                label.addClass('freeze');
                input.addClass('actinput');
            } else {
                label.removeClass('freeze');
                input.removeClass('actinput');
            }
        }

        input.change(function () {
            checkInput();
        });

    });

    // ---
    $('.step5 .inputfield input').bind('input change', function () {
        $.fn.isValid = function () {
            return this[0].checkValidity()
        }

        if ($('#name').val().length > 0 && $('#name').isValid() == true && $('#tel').val().length > 0 && $('#tel').isValid() == true && $('#email').val().length > 0 && $('#email').isValid() == true) {
            $('.step5 .nextbtn').removeClass('disabled');

        } else {
            $('.step5 .nextbtn').addClass('disabled');
        }
    });


    var formFields3 = $('.emailtheprice__wrap .emailtheprice__sharebox');

    formFields3.each(function () {
        let field = $(this);
        let input = field.find('input');
        let label = field.find('label');

        function checkInput() {
            let valueLength = input.val().length;

            if (valueLength > 0) {
                label.addClass('freeze');
                input.addClass('actinput');
            } else {
                label.removeClass('freeze');
                input.removeClass('actinput');
            }
        }

        input.change(function () {
            checkInput();
        });

    });

    $('.emailtheprice .emailtheprice__wrap button').click(function () {
        $.fn.isValid = function () {
            return this[0].checkValidity()
        }
        const shareInp = $('.emailtheprice__sharebox input');
        if ($(shareInp).val() != '' && $(shareInp).isValid() == true) {
            $('.success-text').show();
            setTimeout(function () {
                $('.success-text').hide();
            }, 3000);

            $('.error-text').hide();
            $('.emailtheprice__sharebox input').removeClass('error');

        } else if ($(shareInp).val().length == '') {
            $('.error-text').show();
            $('.success-text').hide();
            $('.emailtheprice__sharebox input').addClass('error');
        }
    });


    // -------------------STEP 1 
    let boxes = document.querySelectorAll('.step1 .steps__checkboxfield input').length;

    function save() {
        for (let i = 1; i <= boxes; i++) {
            var checkbox = document.getElementById(String(i));
            localStorage.setItem("checkbox" + String(i), checkbox.checked);
        }
    }

    //for loading
    for (let i = 1; i <= boxes; i++) {
        if (localStorage.length > 0) {
            var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
            document.getElementById(String(i)).checked = checked;
        }
    }
    window.addEventListener('change', save);



    // -------------------STEP 2
    let boxesSt2 = document.querySelectorAll('.step2 .radiofieldbox input').length;

    function saveSt2() {
        for (let i = 1; i <= boxesSt2; i++) {
            var checkbox = document.getElementById(String(i));
            localStorage.setItem("radiobox" + String(i), checkbox.checked);
        }
    }

    //for loading
    for (let i = 1; i <= boxesSt2; i++) {
        if (localStorage.length > 0) {
            var checked = JSON.parse(localStorage.getItem("radiobox" + String(i)));
            document.getElementById(String(i)).checked = checked;
        }
    }
    window.addEventListener('change', saveSt2);



    // -------------------STEP 3
    let boxesSt3 = document.querySelectorAll('.step3 .radiofieldbox input').length;

    function saveSt3() {
        for (let i = 1; i <= boxesSt3; i++) {
            var checkbox = document.getElementById(String(i));
            localStorage.setItem("radiobox2" + String(i), checkbox.checked);
        }
    }

    //for loading
    for (let i = 1; i <= boxesSt3; i++) {
        if (localStorage.length > 0) {
            var checked = JSON.parse(localStorage.getItem("radiobox2" + String(i)));
            document.getElementById(String(i)).checked = checked;
        }
    }
    window.addEventListener('change', saveSt3);




    // -------------------STEP 4
    let boxesSt4 = document.querySelectorAll('.step4 .radiofieldbox input').length;


    function saveSt4() {
        for (let i = 1; i <= boxesSt4; i++) {
            var checkbox = document.getElementById(String(i));
            localStorage.setItem("radiobox3" + String(i), checkbox.checked);
        }
    }

    //for loading
    for (let i = 1; i <= boxesSt4; i++) {
        if (localStorage.length > 0) {
            var checked = JSON.parse(localStorage.getItem("radiobox3" + String(i)));
            document.getElementById(String(i)).checked = checked;
        }
    }
    window.addEventListener('change', saveSt4);

    // -------------------------------------------------------------
    $('#datepicker1').change(function () {
        let date = document.getElementById('datepicker1').value;
        localStorage.setItem("name", date);

        $('.datepicker1').val(localStorage.getItem("name"));

    })

    var dateLoad = localStorage.getItem("name");
    $('#datepicker1').val(dateLoad);


    // -------------------STEP 5

    const inputs = document.querySelectorAll('.step5 .inputfield input');

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', function () {
            localStorage.setItem("inp1", inputs[0].value);
            $(inputs[0]).val(localStorage.getItem("inp1"));

            localStorage.setItem("inp2", inputs[1].value);
            $(inputs[1]).val(localStorage.getItem("inp2"));

            localStorage.setItem("inp3", inputs[2].value);
            $(inputs[2]).val(localStorage.getItem("inp3"));
        });
    }

    var dateLoad = localStorage.getItem("inp1");
    $(inputs[0]).val(dateLoad);
    var dateLoad = localStorage.getItem("inp2");
    $(inputs[1]).val(dateLoad);
    var dateLoad = localStorage.getItem("inp3");
    $(inputs[2]).val(dateLoad);





    if ($('.step1 .steps__checkboxfield input').is(':checked')) {
        $('.step1 .nextbtn').removeClass('disabled');
    }
    if ($('.step2 .radiofieldbox input').is(':checked')) {
        $('.step2 .nextbtn').removeClass('disabled');
    }
    if ($('.step3 .radiofieldbox input').is(':checked')) {
        $('.step3 .nextbtn').removeClass('disabled');
    }
    if ($('.step4 .radiofieldbox input').is(':checked')) {
        $('.step4 .nextbtn').removeClass('disabled');
    }
    if ($('.step4 .radiofieldbox #5').is(':checked')) {
        $('.step4 .nextbtn').removeClass('disabled');
        $('.step4 .calendarsection').show();

        $('.step4 .calendarfield .calplaceholder').addClass('freeze');
        $('.step4 .calendarfield input').addClass('actinput')
    }
    if ($('.step5 .inputfield input').val() != '') {
        $('.step5 .nextbtn').removeClass('disabled');
    }
    // --
    if ($('.step5 .inputfield #name').val() != '') {
        $('#name').addClass('actinput');
        $('#name').next('label').addClass('freeze');
    }
    if ($('.step5 .inputfield #tel').val() != '') {
        $('#tel').addClass('actinput');
        $('#tel').next('label').addClass('freeze');
    }
    if ($('.step5 .inputfield #email').val() != '') {
        $('#email').addClass('actinput');
        $('#email').next('label').addClass('freeze');
    }








    $('.header__burger').click(function () {
        $('.header__nav').addClass('open');
    });
    $('.closemenu').click(function () {
        $('.header__nav').removeClass('open');
    });





    // carebundlepacks
    $(".welcomesection").on("click", 'a.scrolllink', function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });



    // ------ tab switch on testing page ------ //

    $('.switch-btn').on('click', function () {
        let id = $(this).attr('data-id');
        $('.testing__inner').find('.testing__content').removeClass('active-tab').hide();
        $('.testing__switcher').find('.switch-btn').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    // --- start styleselect ----- //
    if ($('select').length) {
        $("select").styler();
    }


    // ------- modal window ----- //
    $('.modal__btn').on('click', function (j) {
        j.preventDefault();
        let modalId = $(this).attr('data-modal');
        $('#' + modalId).addClass('show');
        $('body').css('overflow', 'hidden');
        return false;
    });





    $('.modalquestion__close').on('click', function (i) {
        i.preventDefault();
        $('.modalquestion').removeClass('show');
        $('body').css('overflow', 'inherit');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.modalquestion__content').length && !$target.closest('.modal__btn').length) {
            $('.modalquestion').removeClass('show');
            $('body').css('overflow', 'inherit');
        }
    });


    $('.faqquestionwrap').click(function () {
        $('.faqquestionwrap .title').not($(this).find('.title')).removeClass('rotate');
        $(this).find('.title').toggleClass('rotate');

        $('.faqquestionwrap .descr').not($(this).find('.descr')).slideUp();
        $(this).find('.descr').slideToggle();
    });







    // CAREER
    // Career - tabs
    let tabs = document.querySelectorAll('.tabbtn'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabs__btns');

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('mouseover', function (event) {
        const target = event.target;
        if (target && target.classList.contains('tabbtn')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // slider
    var swiper = new Swiper(".careertestimonials__slider", {

        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },

            375: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },

            575: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 58,
            }
        }
    });

    // load more
    $('.careerjobs__more a').click(function (e) {
        e.preventDefault();
        $('.careerjob').addClass('show');
    });

    // video
    var video = document.getElementById('video');
    var button = document.getElementById('playbtn');

    button.addEventListener('click', function () {
        video.play();
    });

    $('.videosection__video').click(function () {
        $('#playbtn').hide();
    })


    $('.careertestimonials__slide-img').click(function () {
        $('.careervideomodal').addClass('show');
    });

    $('.closevideomodal').click(function () {
        $('.careervideomodal').removeClass('show');
        video.pause();
        video.load();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.careertestimonials__slide-img').length && !$target.closest('.closevideomodal').length && !$target.closest('.video').length && !$target.closest('#playbtn').length) {
            $('.careervideomodal').removeClass('show');
            video.pause();
            video.load();
        }
    });


    // scroll to
   

    $('.scrollto').click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 1000);
    })


    // jobssect

});