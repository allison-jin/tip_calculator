document.getElementById('container').onchange = function(){
  var bill = Number(document.getElementById('billTotal').value);
  // alert(bill);
  var tipPercent = document.getElementById('tipInput').value;
  // alert(tipPercent);
  var split = document.getElementById('splitInput').value;
   // alert(splitInput);
   var tipValue = bill*(tipPercent / 100);
   var newBillEach = (bill + tipValue) / split;
   var tipEach = tipValue / split;

  
   document.getElementById('tipOutput').innerHTML = tipPercent + " %";
   document.getElementById('splitOutput').innerHTML = split + " People";
   document.getElementById('newBill').innerHTML = "$ "+ newBillEach.toFixed(2) + " per person";
   document.getElementById('tipEach').innerHTML = "$ "+ tipEach.toFixed(2) + " per person";

}
