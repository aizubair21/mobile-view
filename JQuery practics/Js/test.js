



var d1 = $("#div1");
var d2 =  $();
console.log(d1)

d1.mouseover( e => {
  $("#result").html(`You are hovaring over a ${e.target.tagName} element. className is: ${e.target.className}. it is ${e.target.clientHeight} px height and ${e.target.clientWidth} px width.`);
 
});

var d2 = $("#div2");
d2.on("click", ( e => {
  console.log($("#div2").prop("textContent", 'click change innerText'));
  alert(e.target.textContent);
}));

$("#action-btn").on("click", e => {
  var value = e.target.value;

  $("textarea").show().html(`You clicked a ${e.target.tagName} ${e.target.type},,  name of button is: ${value}..  keep typing on input field, and it show you what you typed..`);
  $(":text").on("keyup", e => {
    $("textarea").html(e.target.value);
  });


});

