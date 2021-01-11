function Driver(dID, dName, dAddress, dContact) {
    var dID = dID;
    var dName = dName;
    var dAddress = dAddress;
    var dContact = dContact;

    this.getdID = function () {
        return dID;
    };

    this.setdID = function (dIDVal) {
        dID=dIDVal;
    };
    this.getdName = function () {
        return dName;
    };

    this.setdName = function (dNameVal) {
        dName=dNameVal;
    };
    this.getdAddress = function () {
        return dAddress;
    };

    this.setdAddress = function (dAddressVal) {
        dAddress=dAddressVal;
    };
    this.getdContact = function () {
        return dContact;
    };

    this.setdContact = function (dContactVal) {
        dContact=dContactVal;
    };

}
