$(document).ready(function() {
  $("form").submit(function(event) {
  
  
  var colorInput = $("input#color1").val();
  var foodInput = $("input#food1").val();
  var movieInput = $("input#movie1").val();
  //var messageBox  = document.getElementById("display");

  var myArray = [color, food, movie];
  myArray.push($("#drink1").val());
  
  console.log(myArray);

  $("#display").show();
  // $("#display").text(myArray);

  event.preventDefault();
  });
});