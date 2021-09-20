let r_content = document.querySelector(".top-right .content");
let l_content = document.querySelector(".top-left-content");
let isNavClicked = false;

if (isNavClicked) {
  l_content.style.left = "-10px"
} else {
  l_content.style.left = "-500px"
}

function showContent(){
  if (l_content.style.left < "0px") {
    l_content.style.left = "-10px";
    r_content.style.right = "-300px"

  } else {
    l_content.left = "-500px"
  }
    
}

function hideContent(){
    l_content.style.left = "-500px";
}

function showRightContent(){

    if (r_content.style.right >= "-300px") {
      r_content.style.right = "-10px";
      l_content.style.left = "-500px"
    } else {
      r_content.style.right = "-300px"
    }
}

function hideRightContent(){
    r_content.style.right = "-300px"
}





// show active button on footer section when click to navigate

let footerItem = document.getElementsByClassName("bottom-btn");
$(".bottom-btn").on("click", function () {
  $(".bottom-btn").removeClass("active");
  $(this).addClass("active");
  hideContent();
});


$(".right-nav-item").on("click", function () {
  $(".right-nav-item").removeClass("active-nav");

  $(this).addClass("active-nav");
});



// show tabs
function showClock(e, itemName) {

  $(".tab-content").css("display","none");

  if (itemName === "d_clock") {
  document.getElementById(itemName).style.display = "block";
  };
}