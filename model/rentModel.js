function Rent(rID, date, custID, vehicleID) {

     var rID = rID;
     var date = date;
     var custID = custID;
     var vehicleID = vehicleID;

     this.getrID = function () {
          return rID;
     };

     this.setrID = function (rIDVal) {
          rID=rIDVal;
     };
     this.getdate = function () {
          return date;
     };

     this.setdate = function (dateVal) {
          date=dateVal;
     };
     this.getcustID = function () {
          return custID;
     };

     this.setcustID = function (custIDVal) {
          custID=custIDVal;
     };
     this.getvehicleID = function () {
          return vehicleID;
     };

     this.setvehicleID = function (vehicleIDVal) {
          vehicleID=vehicleIDVal;
     };

}
