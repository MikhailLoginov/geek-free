/* 
Реализовать функцию перевода числа из одной системы счисления в другую.
На вход подается исходные число i и система счисления a и требуемая система счисления b.
0 <= i <= 10000
1 <= a, b <= 100
Пример

> node task.rb 7 10 2
> 111
*/

var i = parseFloat(process.argv[2]),
    a = parseFloat(process.argv[3]),
    b = parseFloat(process.argv[4]),
    normal = 0,
    result = "";

// if (i>=0&&i<=10000 && a>=1&&a<=100&& b>=1&&b<=100) {
for (let j=0; j<String(i).length; j++) {
  normal += +String(i)[j]*Math.pow(a, String(i).length-1-j);
}
console.log(normal);
  
while (normal>=b) {
  result = String(normal % b) + result;
  normal = Math.trunc(normal/b);
  console.log(normal);
}
result = normal + result;


  /*
  while (normal/b>=1) {
    result += String(Math.trunc(normal/b));
    normal -= Math.trunc(normal/b)*b;
  }
  result += String(normal);
  */
process.stdout.write(result);



