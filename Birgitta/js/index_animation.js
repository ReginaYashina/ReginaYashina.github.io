$(function(){

$(".white-item").hide(); 
$(".second-index").hide(); 
$(".main-down").click(
  function(){
  $("#item_1").slideDown(500);
  $("#item_2").delay(100).slideDown(500);
  $("#item_3").delay(200).slideDown(500);
  $("#item_4").delay(300).slideDown(500);
  $("#index").delay(350).hide(500); 
  $(".second-index").delay(400).fadeIn(500); 
  $(".white-item").delay(500).hide(500); 

});




















})