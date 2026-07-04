$(document).ready(function () {

    $('#mobile_btn').on('click', function () {

        $('#btn_mobile').toggleClass('active');

        $(this).find('i')
            .toggleClass('fa-bars')
            .toggleClass('fa-xmark');

    });

});