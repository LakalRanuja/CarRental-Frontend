function Customer(nicNO, licenseNO, name, email, password, address, contact) {
    var nicNo = nicNO;
    var licenseNO = licenseNO;
    var name = name;
    var email = email;
    var password = password;
    var address = address;
    var contact = contact;

    this.getnicNO = function () {
        return nicNO;
    };

    this.setnicNO = function (idVal) {
        nicNO = idVal;
    };
    this.getlicenseNO = function () {
        return licenseNO;
    };

    this.setlicenseNO = function (licenseVal) {
        licenseNO = licenseVal;
    };
    this.getname = function () {
        return name;
    };

    this.setname = function (nameVal) {
        name = nameVal;
    };

    this.getemail = function () {
        return email;
    };

    this.setemail = function (emailVal) {
        email = emailVal;
    };

    this.getpassword = function () {
        return password;
    };

    this.setpassowrd = function (passwordVal) {
        password = passwordVal;
    };

    this.getaddress = function () {
        return address;
    };

    this.setaddress = function (addressVal) {
        address = addressVal;
    };
    this.getcontact = function () {
        return contact;
    };

    this.setcontact = function (contactVal) {
        contact = contactVal;
    };
}
