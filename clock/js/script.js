
 let watch = new Date();
 function timeShow () {
     let watch = new Date();
     document.getElementById("d-hour").innerHTML = `${watch.getHours()}: `;
     document.getElementById("d-minute").innerHTML = `${watch.getMinutes()}: `; 
     document.getElementById("d-secound").innerHTML = watch.getSeconds();
 
   if (watch.getHours() < 10) {
     document.getElementById("d-hour").innerHTML = `0${watch.getHours()}: ` ;
   }
   if (watch.getSeconds() == 0) {
     document.getElementById("d-secound").innerHTML = `6${watch.getSeconds()}` ;
   }
 
   if (watch.getSeconds() > 0 && watch.getSeconds() < 10) {
     document.getElementById("d-secound").innerHTML = `0${watch.getSeconds()}` ;
   }
 
   if (watch.getMinutes() < 10) {
     document.getElementById("d-minute").innerHTML = `0${watch.getMinutes()}: ` ;
   }
 
 
 
 }
 timeShow();
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
 
 
 function highlightWeek() {
   let toDay = watch.getDay()+1;
   let weekDay = document.getElementsByClassName("weeks");
   weekDay[toDay].style.backgroundColor = "green";
   weekDay[toDay].style.border = "none";
 }
 highlightWeek();
 
 let 