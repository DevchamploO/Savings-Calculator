function evalSlider(){
  var rangeNum = document.getElementById('slider').value;
  document.getElementById('sliderVal').innerHTML = rangeNum;
  
}

function savings(){
  var init = parseFloat(document.getElementById('init').value);
  var amount = parseFloat(document.getElementById('annual').value);
  var wholeRate = parseFloat(document.getElementById('rate').value);
  var rate = wholeRate/100;
  var years = document.getElementById('sliderVal').innerHTML;
  var total = init*(1+rate)+amount;
    for(var i=years; i>1; i--){
      total = total*(1+rate)+amount;
      total = Math.round(total*100)/100;
    }
      document.getElementById('amnt').innerHTML = total;
}