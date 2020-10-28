function calculatezaalt() {
  var myzaaltuildver1 = Number($("#zaaltuildver").val());
  var myzaaltuildver = Number($("#zaaltuildver").val());
  var myroad = Number($("#road").val());
  var myachaa = Number($("#achaa").val());
  var mytire = Number($("#tire").val());
  var mywindow = Number($("#window").val());
  var mylight = Number($("#light").val());
  var myfuellight = Number($("#fuellight").val());
  var mycondition = Number($("#condition").val());
  var mycoldengine = Number($("#coldengine").val());
  var mydriving = Number($("#driving").val());
  var myengineservice = Number($("#engineservice").val());
  var myenginesensor = Number($("#enginesensor").val());
  var myengineoil = Number($("#engineoil").val());
  var mywinternormal = Number($("#winternormal").val());
  var myhighland = Number($("#highland").val());

  myzaaltuildver = myzaaltuildver + (myzaaltuildver * myachaa) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * myroad) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * mytire) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * mywindow) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * mylight) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * myfuellight) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * mycondition) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * mycoldengine) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * mydriving) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * myengineservice) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * myenginesensor) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * myengineoil) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * mywinternormal) / 100;
  myzaaltuildver = myzaaltuildver + (myzaaltuildver * myhighland) / 100;

  $("#resultzaalt").html(myzaaltuildver.toFixed(2).toString());

  var mypercent = (myzaaltuildver * 100) / myzaaltuildver1 - 100;

  $("#resultiluu").html(mypercent.toFixed(1).toString() + " <small>%</small>");

  if (mypercent > 60) {
    //60%-аас илүү гарсан
    $("#resultiluu").css({ color: "#FFAE5D" });
  }

  switch (true) {
    case mypercent >= 0 && mypercent <= 60: //60 хүртэл хэвийн гэсэн үг
      $("#resultiluu").css({ color: "#000000" });
      $("#resulttailbar").html(
        "Таны машины шатахуун зарцуулалт хэвийн байна. Санаа зовох зүйлгүй."
      );
      $("#resulttailbar").removeClass();
      $("#resulttailbar").addClass("alert alert-success");
      break;
    case mypercent >= 61 && mypercent <= 120: //60-аас дээш байвал анхаарах ёстой
      $("#resultiluu").css({ color: "#FFAE5D" });
      $("#resulttailbar").html(
        "Таны машины шатахуун зарцуулалт байж болох хэмжээнээс илүү зарцуулалттай байна. Машиныхаа техник үйлчилгээнд анхаараарай."
      );
      $("#resulttailbar").removeClass();
      $("#resulttailbar").addClass("alert alert-warning");
      break;
    default:
      //120-оос их буюу аймаар их гэсэн үг.
      $("#resultiluu").css({ color: "#C25B56" });
      $("#resulttailbar").html(
        "Хэтэрхий их зарцуулалттай байна. Мэргэжлийн газарт хандаж оношлуулахыг зөвлөе."
      );
      $("#resulttailbar").removeClass();
      $("#resulttailbar").addClass("alert alert-danger");
      break;
  }
}
function calculatefuel01() {
  var myfuel_price = Number($("#fuel_price").val());
  var myroad_total = Number($("#road_total").val());
  var myfuel_total = Number($("#fuel_total").val());

  var myresult100 = (myfuel_total * 100) / myroad_total;
  $("#resultfuel01").html(
    myresult100.toFixed(2).toString() + " <small>литр/100 км</small>"
  );

  var myresult02 = myfuel_total * myfuel_price;
  $("#resultfuel02").html(
    myresult02.toFixed(2).toString() + " <small> төг</small>"
  );
}
