"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  // код для задачи №1 писать здесь
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [(-b + Math.sqrt(d))/(2*a)];
  } else {
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a) ;
    arr.push(x1, x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, countMonths)
{
 let totalAmount = 0;
 let monthlyPercent = percent / 100 / 12;
 let payment = amount - contribution;
 let monthlyPayment = payment * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
 totalAmount = monthlyPayment * countMonths;
 return parseFloat(totalAmount.toFixed(2));
}