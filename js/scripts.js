$(document).ready(function() {
  $("form").submit(function(event) {
  
  
  var colorInput = $("input#color1").val();
  var foodInput = $("input#food1").val();
  var movieInput = $("input#movie1").val();
  var myArray = [color, food, movie];
 
  $(".color1").text(colorInput);
  $(".food1").text(foodInput);
  $(".movie1").text(movieInput);


  $("#display").show();
  

  event.preventDefault();
  });
});
// console.log(myArray);


// myArray.push($("#drink1").val());