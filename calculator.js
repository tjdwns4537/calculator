var Calculator = (function(){
    var inputNum = [];
    var inputOperator = [];
    var resultValue = 0;
    var displayValue = ""
    var Num = document.querySelectorAll('.num');
    var Operator = document.querySelectorAll('.operator');
    var Period = document.querySelector('#period');
    var Output = document.querySelector('#output');
    var Cancel = document.querySelector('#cancel')
//    바인딩
var Binding = function(){
    Num.forEach(function(e1){
        e1.addEventListener('click',NumClick);
    },this);
    Operator.forEach(function(e1){
        e1.addEventListener('click',OperatorClick);
    },this);
    Period.addEventListener('click',PeriodClick);
    Cancel.addEventListener('click',CancelClick);
}

    var NumClick = function(e){
        var targetText = e.target.textContent;
        displayValue += targetText;
        printDisplay(targetText);
    }
    var OperatorClick = function(e){
        var targetText = e.target.textContent;
        printDisplay(targetText);
        if(targetText != ""){
          inputNum.push(displayValue);
          displayValue = '';
        }
        if(targetText == '='){
            calcOperator();
        }else{
            inputOperator.push(e.target.textContent);
        }
    }
    var PeriodClick = function(e){
        var targetText = e.target.textContent;
        displayValue += targetText;
        printDisplay(targetText);
    }
    var printDisplay = function(displayValue){
        Output.innerText += displayValue;
    }
    var CancelClick = function (){
            Output.innerText = ""
    }
    var calcOperator = function(a,b,c){
        resultValue = 0;
        for ( var i=0; i<inputOperator.length; i++){
            resultValue = calcResult(inputOperator[i], resultValue > 0 ? resultValue : Number(inputNum[i]) , Number(inputNum[i+1]))
        }
        inputNum = [resultValue.toString()];
        inputOperator = [];
        CancelClick();
        printDisplay(resultValue);
    }
    var calcResult = function ( a,b,c ){
        if ( a == '+'){
            return b+c;
        }else if ( a == '-'){
            return b-c;
        }else if ( a == '*'){
            return b*c;
        }else if ( a == '/'){
            return b/c;
        }
    }
    var resetOperator = function(){
     inputNum = [];
     inputOperator = [];
     resultValue = 0;
     displayValue = "";
     CancelClick();
    }
    Binding()
})
Calculator()