let count = new Map();
count.set(0, "zero")
     .set(1, "one")
     .set(2, "two")
     .set(3, "three")
     .set(4, "four")
     .set(5, "five")
     .set(6, "six")
     .set(7, "seven")
     .set(8, "eight")
     .set(9, "nine")
     .set(10, "ten")
     .set(11, "eleven")
     .set(12, "twelve")
     .set(13, "thirteen")
     .set(14, "fourteen")
     .set(15, "fifteen")
     .set(16, "sixteen")
     .set(17, "seventeen")
     .set(18, "eighteen")
     .set(19, "nineteen")
     .set(20, "twenty")   
     .set(30, "thirty") 
     .set(40, "forty") 
     .set(50, "fifty") 
     .set(60, "sixty") 
     .set(70, "seventy") 
     .set(80, "eighty") 
     .set(90, "ninety");  

module.exports = function toReadable (number) {
  if (number < 21) {
      let i = number;
      return count.get(i);
  };

  let sotni = Math.trunc(number / 100); // считаем сотни в числе
  let tens = Math.trunc((number - sotni * 100) / 10) * 10; //считаем десятки в числе и умножаем на 10 !выпадает 10!
  let edinits = number - sotni * 100 - tens; //считаем единицы в числе
  if (sotni === 0 && edinits === 0) {
    return count.get(tens); //выводит чистые десятки
  } else if (sotni === 0 && tens > 10 && edinits > 0) { // двузначные числа от 20
    return `${count.get(tens)} ${count.get(edinits)}`;
  } else if (sotni > 0 && tens === 0 && edinits === 0) { // чистые сотни
    return `${count.get(sotni)} hundred`;
  } else if (sotni > 0 && tens > 10 && edinits === 0) { //сотни и десятки без единиц
    return `${count.get(sotni)} hundred ${count.get(tens)}`;
  } else if (sotni > 0 && tens === 10 && edinits > 0) { // сотни и teen'ы
      let teen = +tens + +edinits;
      return `${count.get(sotni)} hundred ${count.get(teen)}`; 
  } else if (sotni > 0 && tens === 10 && edinits === 0) { //сотни и 10
    return `${count.get(sotni)} hundred ${count.get(tens)}`;
  } else if (sotni > 0 && tens === 0 && edinits > 0) { //сотни и единицы
      return `${count.get(sotni)} hundred ${count.get(edinits)}` 
  } else return `${count.get(sotni)} hundred ${count.get(tens)} ${count.get(edinits)}`; //сотни, десятки и единицы
  //
}
