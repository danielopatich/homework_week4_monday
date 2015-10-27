//declaring varibles //

$(document).ready(function(){
   var num1;
   var num2;
   var operator;
   var $answer = $('.display');


$('.number').click(function(){
    var returnedNum = $(this).text();
    var initValue = $answer.val();
    var finalValue;
    if (initValue === '0'){
      finalValue=returnedNum;
    }

else {
    finalValue = initValue + returnedNum;
}

$answer.val(finalValue);

});

// creating a function to clear display if expression is not completed
function clearall(){
    num1= initValue;
    num2= finalValue;
    operator=null;
    $answer.val('0');
}

$(".operator").click(function(){
       operator = $(this).text();
       num1=parseFloat($answer.val());
       $answer.val("0");
});

$(".equals").click(function(){
       var total;

       num2 = parseFloat($answer.val());

       if (operator=== "+"){
               total = num1 + num2;
       }
       else if (operator === "-"){
               total = num1 - num2;
       }
       else if (operator === "*"){
               total = num1 * num2;
       }
       else if (operator === "/"){
               total = num1 / num2;
       }
   $answer.val(total);
});

$('.clear').click(function(){
    return $answer;
});

});
