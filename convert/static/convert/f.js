function unit_converter()
{
  var num1, base, result, unit_from, unit_to;
  num1 = parseFloat(document.getElementById("num1").value);
  unit_from = String(document.getElementById("unit_from").value);
  unit_to = String(document.getElementById("unit_to").value);
  if (unit_from == "mm") {
    base = num1;
  } else if (unit_from == "cm") {
    base = num1*10;
  } else if (unit_from == "meter") {
    base = num1*1000;
  } else if (unit_from == "km") {
    base = num1*1000**2;
  } else if (unit_from == "inch") {
    base = 25.4*num1;
  } else if (unit_from == "feet") {
    base = num1*304.8;
  } else if (unit_from == "yard") {
    base = 914.4*num1;
  } else if (unit_from == "mile") {
    base = num1*1609344;
  }
  if (unit_to == "mm") {
    result = base;
  } else if (unit_to == "cm") {
    result = base/10;
  } else if (unit_to == "meter") {
    result = base/1000;
  } else if (unit_to == "km") {
    result = base/1000**2;
  } else if (unit_to == "inch") {
    result = base/25.4;
  } else if (unit_to == "feet") {
    result = base/304.8;
  } else if (unit_to == "yard") {
    result = base/914.4;
  } else if (unit_to == "mile") {
    result = base/1609344;
  }
  result = Number((result).toFixed(10));
  if ( isNaN(num1)) {
    document.getElementById("answer").value = "" ;
  }
  else {
    document.getElementById("answer").value = result;
  }
}


function temp_converter()
{
  var temp1, base, result, temp_from, temp_to;
  temp1 = parseFloat(document.getElementById("temp1").value);
  temp_from = String(document.getElementById("temp_from").value);
  temp_to = String(document.getElementById("temp_to").value);
  if (temp_from == "C") {
    base = temp1;
  } else if (temp_from == "F") {
    base = (temp1 - 32)*(5/9);
  } else if (temp_from == "K") {
    base = temp1 - 273.15;
  } else if (temp_from == "R") {
    base = (temp1 - 491.67)*(5/9);
  }
  if (temp_to == "C") {
    result = base;
  } else if (temp_to == "F") {
    result = (9/5)*base + 32;
  } else if (temp_to == "K") {
    result = base + 273.15;
  } else if (temp_to == "R") {
    result = (9/5)*base + 491.67;
  }
  result = Number((result).toFixed(4));
  if ( isNaN(temp1)) {
    document.getElementById("temp_answer").value = "" ;
  }
  else {
    document.getElementById("temp_answer").value = result;
  }
}

function mass_converter()
{
  var mass1, base, result, mass_from, mass_to;
  mass1 = parseFloat(document.getElementById("mass1").value);
  mass_from = String(document.getElementById("mass_from").value);
  mass_to = String(document.getElementById("mass_to").value);
  if (mass_from == "mg") {
    base = mass1;
  } else if (mass_from == "g") {
    base = mass1*1000;
  } else if (mass_from == "kg") {
    base = mass1*1000**2;
  } else if (mass_from == "oz") {
    base = mass1*28349.523125;
  } else if (mass_from == "lb") {
    base = mass1*453592.37;
  } else if (mass_from == "st") {
    base = mass1*6350293.18 ;
  } else if (mass_from == "t") {
    base = mass1*10**9 ;
  }

  if (mass_to == "mg") {
    result = base;
  } else if (mass_to == "g") {
    result = base/1000;
  } else if (mass_to == "kg") {
    result = base/1000**2;
  } else if (mass_to == "oz") {
    result = base/28349.523125;
  } else if (mass_to == "lb") {
    result = base/453592.37;
  } else if (mass_to == "st") {
    result = base/6350293.18;
  } else if (mass_to == "t") {
    result = base/10**9;
  }
  result = Number((result).toFixed(10));
  if (isNaN(mass1)) {
    document.getElementById("mass_answer").value = "" ;
  }
  else {
    document.getElementById("mass_answer").value = result;
  }
}
