
// var clickIndex = 0;
// // clickFunction(clickIndex);

// function clickFunction(){
//     clickableFunction(clickIndex);
// }



// function clickableFunction(){
//     var btns = document.querySelectorAll("#bottom-btn");

//     for (var i = 0; i < btns.length; i++) {
//         btns[i].className = btns[i].className.replace( "active", " " );
//     } 

//     for(i = 0; i < btns.length; i++){
//         btns[0].className = "active";
//     }
// }


function showContent(){
    document.querySelector(".top-right .content").style.display = "none";
    var content = document.querySelector(".top-left-content");
    content.style.display = "block";
}

function hideContent(){
    var content = document.querySelector(".top-left-content");
    content.style.display = "none";
}

function showRightContent(){
    document.querySelector(".top-left-content").style.display = "none";
    let content = document.querySelector(".top-right .content");
    content.style.display = "block";
}

function hideRightContent(){
    let content = document.querySelector(".top-right .content")
    content.style.display = "none";
}






// let watch = new Date();
// // setInterval(watch, 1000)

// function timeShow () {
//     watch = new Date();
//     document.getElementById("hour").innerHTML = `${watch.getHours()}: `;
//     document.getElementById("minute").innerHTML = `${watch.getMinutes()}: `; 
//     document.getElementById("second").innerHTML = watch.getSeconds();

//   if (watch.getHours() < 10) {
//     document.getElementById("hour").innerHTML = `0${watch.getHours()}: ` ;
//   }
//   if (watch.getSeconds() == 0) {
//     document.getElementById("second").innerHTML = `6${watch.getSeconds()}` ;
//   }

//   if (watch.getSeconds() > 0 && watch.getSeconds() < 10) {
//     document.getElementById("second").innerHTML = `0${watch.getSeconds()}` ;
//   }

//   if (watch.getMinutes() < 10) {
//     document.getElementById("minute").innerHTML = `0${watch.getMinutes()}: ` ;
//   }
//   if (watch.getHours() > 12) {
//     document.getElementById("day-light").innerHTML = "PM";

//   } else {
//    document.getElementById("day-light").innerHTML = "AM";
//   }
//   switch (watch.getHours()) {
//     case  1:
//      document.getElementById("hour").innerHTML = "01" ;
//       break;
//    case  2:
//      document.getElementById("hour").innerHTML = "02" ;
//       break;
//    case 3:
//      document.getElementById("hour").innerHTML = "03" ;
//     break;
//    case  4:
//      document.getElementById("hour").innerHTML = "04" ;
//      break;
//    case  5:
//      document.getElementById("hour").innerHTML = "05" ;
//        break;
//    case  6:
//      document.getElementById("hour").innerHTML = "06" ;
//        break;
//    case  7:
//      document.getElementById("hour").innerHTML = "07" ;
//        break;
//    case  8:
//      document.getElementById("hour").innerHTML = "08" ;
//      break;
//    case  9:
//      document.getElementById("hour").innerHTML = "09" ;
//        break;
//    case  10:
//      document.getElementById("hour").innerHTML = "10" ;
//        break;
//    case  11:
//      document.getElementById("hour").innerHTML = "11" ;
//        break;
//    case  12:
//      document.getElementById("hour").innerHTML = "12" ;
//        break;
//    case 13:
//      document.getElementById("hour").innerHTML = "01" ;
//      break;
//    case  14:
//      document.getElementById("hour").innerHTML = "02" ;
//      break;
//    case  15:
//      document.getElementById("hour").innerHTML = "03" ;
//        break;
//    case  16:
//      document.getElementById("hour").innerHTML = "04" ;
//        break;
//    case  17:
//      document.getElementById("hour").innerHTML = "05" ;
//        break;
//    case  18:
//      document.getElementById("hour").innerHTML = "06" ;
//      break;
//    case  19:
//      document.getElementById("hour").innerHTML = "07" ;
//        break;
//    case  20:
//      document.getElementById("hour").innerHTML = "18" ;
//        break;
//    case  21:
//      document.getElementById("hour").innerHTML = "09" ;
//        break;
//    case  22:
//    document.getElementById("hour").innerHTML = "10" ;
//        break;
//    case 23:
//      document.getElementById("hour").innerHTML = "11" ;
//      break; 

//     default:
//      document.getElementById("hour").innerHTML = "12" ;
//       break;
//   }

//   if (watch.getHours() > 23) {
//       showDate();
//   }

// }
// function showDate() {
//     var month = watch.getMonth();
//     // console.log(month);
//     // document.querySelector(".current_month").innerHTML = month;
//     switch (month) {
//         case 0:
//             document.querySelector(".current_month").innerHTML = "January";
//             break;
//         case  1:
//             document.querySelector(".current_month").innerHTML = "February";
//             break;
//         case  2:
//                 document.querySelector(".current_month").innerHTML = "March";
//             break;
//         case 3:
//                 document.querySelector(".current_month").innerHTML = "April";
//             break;
//         case  4:
//                 document.querySelector(".current_month").innerHTML = "May";
//             break;
//         case  5:
//                 document.querySelector(".current_month").innerHTML = "June";
//             break;
//         case  6:
//                 document.querySelector(".current_month").innerHTML = "July";
//             break;
//         case  7:
//                 document.querySelector(".current_month").innerHTML = "August";
//             break;
//         case  8:
//                 document.querySelector(".current_month").innerHTML = "September";
//             break;
//         case  9:
//                 document.querySelector(".current_month").innerHTML = "Octobor";
//             break;
//         case  10:
//                 document.querySelector(".current_month").innerHTML = "November";
//             break;
//         case  11:
//                 document.querySelector(".current_month").innerHTML = "Desemver";
//             break;

//     }
//     var current_day = watch.getDate();
//     // console.log(current_day);
//     document.querySelector(".current_darikh"). innerHTML = current_day ;

//     var current_year = watch.getFullYear();
//     // console.log(current_year);
//     document.querySelector(".current_year"). innerHTML = current_year;

//     const weekDay = ["Satar","Sun","Mon","Tues","Wedness","Thurs","Fri"];
//     var week_day = watch.getDay();
//     // console.log(week_day);
//     var current_day = weekDay[week_day+1];
//     document.querySelector(".current_day").innerHTML = ` ${current_day}Day` ;



// }

// function dateCounter() {
//     // console.log(watch.getHours());
//     if (watch.getHours() > 23) {
//         showDate();
//     }
// }

// showDate();
// timeShow();
// setInterval(timeShow, 10);
// setInterval(dateCounter, 3600);

/* vue js practise star*/

$(".bottom-btn").on("click", function (e) {
  
  console.log();
  $('.bottom-btn').removeClass("active");

  $(this).addClass("active");
})

const app = new Vue ({
  el: "#middle_vue",
  created: function () {
    console.log("connected Vue !");
  },


  data: function () {
    return {
      input_title: '',
      todo_list_array: [
        {
          title: 'test for developer',
          checked: false,
        },
        {
          title: 'Zubair',
          checked: false,
        },
        {
          title: 'Water-Melon',
          checked: false,
        },
      
      ]
    }
  }, 

  methods: {
    data_pass_to_property: function () {
      console.log(this.input_title);
    },

    add_data_to_arrar: function () {
      let data = {
        title: this.input_title,
        checked: false,
      }
      if ( this.input_title){
        this.todo_list_array.push(data);
        this.input_title = '';
      }
    },

    delet_array_item: function (index) {
      this.todo_list_array.splice(index, 1);
    },
    alert_for_verify: function () {
      alert(" Unverified data can't be deleted !");
    }
    
  },
})

