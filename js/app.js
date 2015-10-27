//declaring varibles //

$(document).ready(function(){
   var num1;
   var num2;
   var operator;
   var $answer = $('#display');

   // creating a function to clear display if expression is not completed
   function clearall(){
       num1= initValue;
       num2= finalValue;
       operator=null;
       $answer.val('0');
   }


// replacing event listener //
$('.number').click(function(){
    var initValue = $answer.val();
    var finalValue;
    var returnedNum = $(this).text();
//
    if (initValue === '0'){
      finalValue=returnedNum;
    }
//
else {
    finalValue = initValue + returnedNum;
}

$answer.val(finalValue);

});


$(".operator").click(function(){
       operator = $(this).text();
       num1=parseFloat($answer.val());
       $answer.val("0");
});

$(".equals").click(function(){
       var result;

       // trying parseint because i couldn't figure out how to work in the decimal for parsefloat //
       num2 = parseInt($answer.val(result));

       if (operator=== "plus"){
               result = num1 + num2;
       }
       else if (operator === "minus"){
               result = num1 - num2;
       }
       else if (operator === "multiply"){
               result = num1 * num2;
       }
       else if (operator === "divide"){
               result = num1 / num2;
       }
   $answer.val(result);
});


$('.equal').click(function(){
    return $answer;
});

});
