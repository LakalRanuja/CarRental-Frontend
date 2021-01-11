$('#vehicleNav').click(function () {
    $('.vehiclePanel').css('display','block');
    $('.custPanel').css('display','none');
    $('.rentPanel').css('display','none');
    $('.driverPanel').css('display','none');
    $('.cusTabelP').css('display','none');
});

$('#custNav').click(function () {
    $('.vehiclePanel').css('display','none');
    $('.custPanel').css('display','none');
    $('.rentPanel').css('display','none');
    $('.driverPanel').css('display','none');
    $('.cusTabelP').css('display','block');
});

$('#rentNav').click(function () {
    $('.vehiclePanel').css('display','none');
    $('.custPanel').css('display','none');
    $('.rentPanel').css('display','block');
    $('.driverPanel').css('display','none');
    $('.cusTabelP').css('display','none');
});

$('.cusTabelP').css('display','none');

$('#driverNav').click(function () {
    $('.vehiclePanel').css('display','none');
    $('.custPanel').css('display','none');
    $('.rentPanel').css('display','none');
    $('.driverPanel').css('display','block');
    $('.cusTabelP').css('display','none');
});


