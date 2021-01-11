$('#dSignup').click(function () {
    var id = $('#dID').val();
    var name = $('#dName').val();
    var address = $('#dAddress').val();
    var contact = $('#dContact').val();
    var email = $('#dEmail').val();
    var password = $('#dPassword').val();

    $.ajax({
        type: 'post',
        url: 'http:///localhost:8080/Car_rent/api/v1/driver',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
            "dID": id,
            "dName": name,
            "dAddress": address,
            "dContact": contact,
            "dEmail":email,
            "dPassword":password
        }),
        success: function (res) {
            if (res.message == "Success") {
                alert("Driver Added");
               driverArray.push(Driver);
            } else {
                alert(res.data);
                console.log(res);
            }
        }
    });
});
