$(function () {
  $("#questionnaire").submit(function (event) {
    event.preventDefault();
    $('#result1').hide();
    $('#result2').hide();
    $('#result3').hide();
    

    //Read the values from the page
    var a1 = parseInt($('#answer1').val());
    var a2 = parseInt($('#answer2').val());
    var a3 = parseInt($('#answer3').val());
    


    //Add those values together
var resultAnswer = a1+a2+a3
    //Branch which answer to show
if(resultAnswer >= 30){
  $('#result1').show();
}else if(resultAnswer >= 20){
  $('#result2').show();
  
}else{
  $('#result3').show();
  
}
    //Show that result
  });
});