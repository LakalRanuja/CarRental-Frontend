// $('#btnRent').click(function (rentSave) {
function saveRent() {
    console.log("button binded");
    const myObject = {
        nicID: $('#nicnumberR').val().toString().trim(),
        rentID: $('#rentID').val().toString().trim(),
        carID: $('#vehicleID').val().toString().trim(),
        date: $('#date').val().toString().trim()
    };

    console.log(myObject);

    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/Car_rent/api/v1/rent',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(myObject),
        success: function (res) {
            if (res.message == "Success") {
                alert("Car booked");
                clear();
            } else {
                alert(res.data);
                console.log(res);
            }
        }
    });
}

function clear() {
    $('#nicnumber').val();
    $('#rentID').val();
    $('#vehicleID').val();
    $('#date').val();
}
