
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
 

 }


 function show_cal(time) {
   document.getElementsByClassName("d-month").innerHTML = "time";
 }

  
 
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
