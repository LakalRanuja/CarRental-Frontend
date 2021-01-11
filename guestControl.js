$('.btnReg').click(function () {

    var nicID = $('#nicnumber').val();
    var licenseID = $('#license').val();
    var name = $('#cusName').val();
    var cemail = $('#cusEmail').val();
    var cpassword = $('#cusPassword').val();
    var address = $('#cusaddress').val();
    var contact = $('#cusContact').val();

    $.ajax({
        type: 'post',
        url: 'http:///localhost:8080/Car_rent/api/v1/customer',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
            "nicNO": nicID,
            "licenseNO": licenseID,
            "name": name,
            "email":cemail,
            "password":cpassword,
            "address": address,
            "contact": contact
        }),
        success: function (res) {
            if (res.message == "Success") {
                alert("Customer Added");
                customerArray.push(Customer);
                loadAllCustomer();
                clear();
            } else {
                alert(res.data);
                console.log(res);
            }
        }
    });
});

loadAllCustomer();

function loadAllCustomer() {
    $('#tblCustomer').empty();
    $.ajax({
        type: 'get',
        url: 'http:///localhost:8080/Car_rent/api/v1/customer',
        contentType: 'application/json',
        dataType: 'json',
        success: function (res) {
            let data = res.data;
            console.log(res);
            for (var i in data) {
                let nicID = data[i].nicID;
                let licenseNO = data[i].licenseNO;
                let name = data[i].name;
                let address = data[i].address;
                let contact = data[i].contact;

                var row = `<tr><td>${nicID}</td><td>${licenseNO}</td><td>${name}</td><td>${address}</td><td>${contact}</td></tr>`;
                $('#tblCustomer').append(row);
                console.log(row);
            }
        }
    });
}

function clear() {
    $('#nicnumber').val("");
    $('#license').val("");
    $('#cusName').val("");
    $('#cusaddress').val("");
    $('#cusContact').val("");
    $('#nicnumber').focus();
}
