function Vehicle(vID, vName, vPassengers, vTransmission, vType, fuelType, color, vPrice, status) {
    var vID= vID;
    var vName = vName;
    var vPassengers= vPassengers;
    var vTransmission = vTransmission;
    var vType= vType;
    var fuelType = fuelType;
    var color= color;
    var vPrice = vPrice;
    var status= status;

    this.getvID = function () {
        return vID;
    };

    this.setvID = function (idVal) {
        vID=idVal;
    };
    this.getvName = function () {
        return vName;
    };

    this.setvName = function (nameVal) {
        vName=nameVal;
    };
    this.getvPassengers = function () {
        return name;
    };

    this.setvPassengers = function (passengerVal) {
        vPassengers=passengerVal;
    };
    this.getvTransmission = function () {
        return vTransmission;
    };

    this.setvTransmission = function (transmissionVal) {
        vTransmission=transmissionVal;
    };
    this.getvType = function () {
        return vType;
    };

    this.setvType = function (vTypeVal) {
        vType=vTypeVal;
    };
    this.getfuelType= function () {
        return fuelType;
    };

    this.setvName = function (fuelTypeVal) {
        fuelType=fuelTypeVal;
    };
    this.getcolor = function () {
        return color;
    };

    this.setcolor = function (colorVal) {
        color=colorVal;
    };
    this.getvPrice = function () {
        return vPrice;
    };

    this.setvPrice = function (vPriceVal) {
        vPrice=vPriceVal;
    };
    this.getstatus = function () {
        return status;
    };

    this.setstatus = function (statusVal) {
        status=statusVal;
    };
}
