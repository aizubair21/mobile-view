


let watch = new Date();
// setInterval(watch, 1000)

function timeShow () {
    watch = new Date();
    document.getElementById("hour").innerHTML = `${watch.getHours()} `;
    document.getElementById("minute").innerHTML = `${watch.getMinutes()} `; 
    document.getElementById("second").innerHTML = watch.getSeconds();

  if (watch.getHours() < 10) {
    document.getElementById("hour").innerHTML = `0${watch.getHours()} ` ;
  }
  if (watch.getSeconds() == 0) {
    document.getElementById("second").innerHTML = `6${watch.getSeconds()}` ;
  }

  if (watch.getSeconds() > 0 && watch.getSeconds() < 10) {
    document.getElementById("second").innerHTML = `0${watch.getSeconds()}` ;
  }

  if (watch.getMinutes() < 10) {
    document.getElementById("minute").innerHTML = `0${watch.getMinutes()} ` ;
  }
  if (watch.getHours() > 12) {
    document.getElementById("day-light").innerHTML = "PM";

  } else {
   document.getElementById("day-light").innerHTML = "AM";
  }
  switch (watch.getHours()) {
    case  1:
     document.getElementById("hour").innerHTML = "01" ;
      break;
   case  2:
     document.getElementById("hour").innerHTML = "02" ;
      break;
   case 3:
     document.getElementById("hour").innerHTML = "03" ;
    break;
   case  4:
     document.getElementById("hour").innerHTML = "04" ;
     break;
   case  5:
     document.getElementById("hour").innerHTML = "05" ;
       break;
   case  6:
     document.getElementById("hour").innerHTML = "06" ;
       break;
   case  7:
     document.getElementById("hour").innerHTML = "07" ;
       break;
   case  8:
     document.getElementById("hour").innerHTML = "08" ;
     break;
   case  9:
     document.getElementById("hour").innerHTML = "09" ;
       break;
   case  10:
     document.getElementById("hour").innerHTML = "10" ;
       break;
   case  11:
     document.getElementById("hour").innerHTML = "11" ;
       break;
   case  12:
     document.getElementById("hour").innerHTML = "12" ;
       break;
   case 13:
     document.getElementById("hour").innerHTML = "01" ;
     break;
   case  14:
     document.getElementById("hour").innerHTML = "02" ;
     break;
   case  15:
     document.getElementById("hour").innerHTML = "03" ;
       break;
   case  16:
     document.getElementById("hour").innerHTML = "04" ;
       break;
   case  17:
     document.getElementById("hour").innerHTML = "05" ;
       break;
   case  18:
     document.getElementById("hour").innerHTML = "06" ;
     break;
   case  19:
     document.getElementById("hour").innerHTML = "07" ;
       break;
   case  20:
     document.getElementById("hour").innerHTML = "18" ;
       break;
   case  21:
     document.getElementById("hour").innerHTML = "09" ;
       break;
   case  22:
   document.getElementById("hour").innerHTML = "10" ;
       break;
   case 23:
     document.getElementById("hour").innerHTML = "11" ;
     break; 

    default:
     document.getElementById("hour").innerHTML = "12" ;
      break;
  }

  if (watch.getHours() > 23) {
      showDate();
  }

}
function showDate() {
    var month = watch.getMonth();
    // console.log(month);
    // document.querySelector(".current_month").innerHTML = month;
    switch (month) {
        case 0:
            document.querySelector(".current_month").innerHTML = "January";
            break;
        case  1:
            document.querySelector(".current_month").innerHTML = "February";
            break;
        case  2:
                document.querySelector(".current_month").innerHTML = "March";
            break;
        case 3:
                document.querySelector(".current_month").innerHTML = "April";
            break;
        case  4:
                document.querySelector(".current_month").innerHTML = "May";
            break;
        case  5:
                document.querySelector(".current_month").innerHTML = "June";
            break;
        case  6:
                document.querySelector(".current_month").innerHTML = "July";
            break;
        case  7:
                document.querySelector(".current_month").innerHTML = "August";
            break;
        case  8:
                document.querySelector(".current_month").innerHTML = "September";
            break;
        case  9:
                document.querySelector(".current_month").innerHTML = "Octobor";
            break;
        case  10:
                document.querySelector(".current_month").innerHTML = "November";
            break;
        case  11:
                document.querySelector(".current_month").innerHTML = "Desemver";
            break;

    }
    var current_day = watch.getDate();
    // console.log(current_day);
    document.querySelector(".current_darikh"). innerHTML = current_day ;

    var current_year = watch.getFullYear();
    // console.log(current_year);
    document.querySelector(".current_year"). innerHTML = current_year;

    const weekDay = ["Satar","Sun","Mon","Tues","Wedness","Thurs","Fri"];
    var week_day = watch.getDay();
    // console.log(week_day);
    var current_day = weekDay[week_day+1];
    document.querySelector(".current_day").innerHTML = ` ${current_day}Day` ;



}

function dateCounter() {
    // console.log(watch.getHours());
    if (watch.getHours() > 23) {
        showDate();
    }
}

showDate();
timeShow();
setInterval(timeShow, 1000);
setInterval(dateCounter, 3600);


// show calender function

function show_cal(time) {
  document.getElementsByClassName("show-cal").innerHTML = "time";
}

 show_cal();

function highlightWeek() {
  let w_day = watch.getDay()+1;
  let weekDay = document.getElementsByClassName("weeks");
  weekDay[w_day].style.backgroundColor = "green";
  weekDay[w_day].style.color = "white";
  weekDay[w_day].style.border = "none";;
}



timeShow();
highlightWeek();
setInterval(timeShow, 10);
// let element = "";
// for (let index = 0; index < 32; index++) {
//     element = index;
//   console.log(element);

//   var list = document.createElement("li");
//   var text = document.createTextNode (element);
//   list.appendChild(text);
//   document.getElementById("days").appendChild(list);
// 

var toDate = watch.getDate();
// console.log(toDate);
var monthChild = document.getElementById("month").children[toDate-1];
monthChild.style.backgroundColor = "green";
monthChild.style.color = "white";
monthChild.style.borderRadius = "25px";