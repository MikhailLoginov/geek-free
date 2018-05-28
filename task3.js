/*
Сложить 2 временных промежутка и вывести общую длительность в человекочитаемом виде.
В выводе использовать часы, минуты и секунды (при необходимости).
На вход подается два числа t1 и t2, разделенные пробелом. 1 <= t1, t2 <= 100000
Пример

> node task.rb 1 1
> 2 секунды

> node task.rb 3600 3599
> 1 час 59 минут 59 секунд
*/

var t1 = parseFloat(process.argv[2]);
var t2 = parseFloat(process.argv[3]);

if (t1>=1 && t1<=100000 && t2>=1 && t2<=100000) {
    var t = t1+t2;
    var hours = Math.trunc(t/3600);
    var minutes = Math.trunc((t - hours*3600)/60);
    var seconds = t%60;
}

console.log(hours,minutes,seconds);

// Привести к человеческому виду. Если разряд пропущен, то не выводить его вообще!

