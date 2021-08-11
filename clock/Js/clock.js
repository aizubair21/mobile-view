
 let watch = new Date();
 function timeShow () {
     let watch = new Date();
     document.getElementById("hour").innerHTML = `${watch.getHours()}: `;
     document.getElementById("minute").innerHTML = `${watch.getMinutes()}: `; 
     document.getElementById("second").innerHTML = watch.getSeconds();
 
   if (watch.getHours() < 10) {
     document.getElementById("hour").innerHTML = `0${watch.getHours()}: ` ;
   }
   if (watch.getSeconds() == 0) {
     document.getElementById("second").innerHTML = `6${watch.getSeconds()}` ;
   }
 
   if (watch.getSeconds() > 0 && watch.getSeconds() < 10) {
     document.getElementById("second").innerHTML = `0${watch.getSeconds()}` ;
   }
 
   if (watch.getMinutes() < 10) {
     document.getElementById("minute").innerHTML = `0${watch.getMinutes()}: ` ;
   }
   if (watch.getHours() > 12) {
     document.getElementById("day-light").innerHTML = "PM";

   } else {
    document.getElementById("day-light").innerHTML = "AM";
   }
   switch (watch.getHours()) {
     case  1:
      document.getElementById("hour").innerHTML = 01 ;
       break;
    case  2:
    document.getElementById("hour").innerHTML = 02 ;
       break;
    case 3:
      document.getElementById("hour").innerHTML = 03 ;
     break;
    case  4:
      document.getElementById("hour").innerHTML = 04 ;
      break;
    case  5:
      document.getElementById("hour").innerHTML = 05 ;
        break;
    case  6:
      document.getElementById("hour").innerHTML = 06 ;
        break;
    case  7:
      document.getElementById("hour").innerHTML = 07 ;
        break;
    case  8:
    document.getElementById("hour").innerHTML = 08 ;
      break;
    case  9:
      document.getElementById("hour").innerHTML = 09 ;
        break;
    case  10:
      document.getElementById("hour").innerHTML = 10 ;
        break;
    case  11:
      document.getElementById("hour").innerHTML = 11 ;
        break;
    case  12:
    document.getElementById("hour").innerHTML = 12 ;
        break;
    case 13:
      document.getElementById("hour").innerHTML = 01 ;
      break;
    case  14:
      document.getElementById("hour").innerHTML = 02 ;
      break;
    case  15:
      document.getElementById("hour").innerHTML = 03 ;
        break;
    case  16:
      document.getElementById("hour").innerHTML = 04 ;
        break;
    case  17:
      document.getElementById("hour").innerHTML = 05 ;
        break;
    case  18:
    document.getElementById("hour").innerHTML = 06 ;
      break;
    case  19:
      document.getElementById("hour").innerHTML = 07 ;
        break;
    case  20:
      document.getElementById("hour").innerHTML = 18 ;
        break;
    case  21:
      document.getElementById("hour").innerHTML = 09 ;
        break;
    case  22:
    document.getElementById("hour").innerHTML = 10 ;
        break;
    case 23:
      document.getElementById("hour").innerHTML = 11 ;
      break; 

     default:
      document.getElementById("hour").innerHTML = 12 ;
       break;
   }
 

 }


 function show_cal(time) {
   document.getElementsByClassName("show-cal").innerHTML = "time";
 }

  show_cal();
 
 function highlightWeek() {
   let toDay = watch.getDay()+1;
   let weekDay = document.getElementsByClassName("weeks");
   weekDay[toDay].style.backgroundColor = "green";
   weekDay[toDay].style.border = "none";
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
 // }
