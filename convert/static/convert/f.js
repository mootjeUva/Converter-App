function convert_units()
{
  var numOne, sum;
  numOne = parseInt(document.getElementById("first").value);
  sum = numOne / 2.54;
  document.getElementById("answer").value = sum;
}

function ts2()
{
  var numOne, sum, b, b2;
  numOne = parseInt(document.getElementById("first2").value);
  b = String(document.getElementById("b").value);
  b2 = String(document.getElementById("b2").value);
  if (b == "mm") {
    if (b2 == "mm") {
      sum = numOne;
    }
    if (b2 == "cm") {
      sum = numOne/100;
    }
    if (b2 == "meter") {
      sum = numOne/1000;
    }
    if (b2 == "km") {
      sum = numOne/10000;
    }
    if (b2 == "inch") {
      sum = 0.039*numOne;
    }
    if (b2 == "feet") {
      sum = 0.0032808*numOne;
    }
    if (b2 == "yard") {
      sum = 0.00109361*numOne;
    }
    if (b2 == "mile") {
      sum = numOne/1609344;
    }
  }
  else {
    sum = numOne / 2.54;
  }
  document.getElementById("answer2").value = sum;
}