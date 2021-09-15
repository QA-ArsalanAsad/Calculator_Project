// Calculator

//DOM variables
let expression = document.getElementById('expression');
let plusBtn = document.getElementById('plus-btn');
let minusBtn = document.getElementById('minus-btn'); 
let multiplyBtn = document.getElementById('multiply-btn');
let divideBtn = document.getElementById('divide-btn');
let sqrtBtn = document.getElementById('sqrt-btn');
let ansBtn = document.getElementById('ans-btn');
let acBtn = document.getElementById('ac-btn');
let calculateBtn = document.getElementById('calculate-btn');
let resultText = document.getElementById('result-text')


//Dummy var to store last result for storage and recall
let lastResult = NaN 

plusBtn.addEventListener('click',function() {
  expression.value += "+"
})

minusBtn.addEventListener('click',function() {
  expression.value += "-"
})

multiplyBtn.addEventListener('click',function() {
  expression.value += "*"
})

divideBtn.addEventListener('click',function() {
  expression.value += "/"
})

sqrtBtn.addEventListener('click',function(){
  if (expression.value != ""){
    sendExpression(expression.value += "^(1/2)")
  }
})

ansBtn.addEventListener('click',function(){
  expression.value = resultText.innerHTML
})

acBtn.addEventListener('click',function(){
  resultText.innerHTML = ""
})

calculateBtn.addEventListener('click',function() {
  // hit api with my expression
  sendExpression(expression.value)
  
})

function sendExpression(exprValue){
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);

      response = this.responseText

      if (response.length > 9 && response != "Math/Syntax error" && !response.includes(".")){
        response= "E"
      }

      if (response.includes(".")){
        response = parseFloat(response).toFixed(2)
      }

      resultText.innerHTML=response
    }
  });
  
  xhr.open("POST", "http://localhost:8081/calculate");
  xhr.setRequestHeader("Content-Type", "text/plain");
  
  xhr.send(exprValue);
}