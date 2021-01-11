('.btnReg').click(function () {

    var carID;
    var carBrand;
    var carType;
    var fuelType;
    var transmisson;
    var color;
    var mileage;

    $.ajax({
        method: "post",
        url: "http://localhost:8080/Car_Rental_war/api/v1/rent",
        contentType: "application/json",
        data: JSON.stringify({
            "carID":carID,
            "carBrand":carBrand,
            "carType":carType,
            "fuelType":fuelType,
            "transmisson":transmisson,
            "color":color,
            "mileage":mileage
        }),
        success: function (res) {
            if (res.message=="Success"){
                alert("Car booked");
                clear();
            }else{
                alert(res.data);
                console.log(res);
            }
        }
    });
});

