$('#vAddbtnG').click(function () {

    var id = $('#carIDG').val();
    var name = $('#carnameG').val();
    var passenger = $('#carPassengersG').val();
    var transm = $('#carTransG').val();
    var type = $('#carTypeG').val();
    var fuelType = $('#fuelTypeG').val();
    var color = $('#carColorG').val();
    var price = $('#carPriceG').val();
    var status = $('#statusG').val();

    const dataset = {
        vid: id,
        vname: name,
        vpassenger: passenger,
        vtransm: transm,
        vtype: type,
        vfuelType: fuelType,
        vcolor: color,
        vprice: price,
        vstatus: status
    };

    console.log("check front end ", passenger, type, id);
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/Car_rent/api/v1/vehicle',
        contentType: 'application/json',
        dataType: 'json'
        , data: JSON.stringify(dataset),
        success: function (res) {
            if (res.message == "Success") {
                alert("vehicle Added");
                vehicleArray.push(Vehicle);
            } else {
                alert(res.data);
                console.log(res);
            }
        }
    });
});
