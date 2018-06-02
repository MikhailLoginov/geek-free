/* 
Реализовать функцию перевода числа из одной системы счисления в другую.
На вход подается исходные число i и система счисления a и требуемая система счисления b.
0 <= i <= 10000
1 <= a, b <= 100    // новая версия - 1 <= a, b <= 36
Пример

> node task.rb 7 10 2
> 111
*/

var i = process.argv[2],
    a = parseFloat(process.argv[3]),
    b = parseFloat(process.argv[4]),
    normal = 0,
    result = "",
    numberTranslation = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', "G", 
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// if (i>=0&&i<=10000 && a>=1&&a<=100&& b>=1&&b<=100) {
for (let j=0; j<i.length; j++) {
  let number;
  for (number=0; number<numberTranslation.length & i[j] != numberTranslation[number]; number++) {};
  normal += +number*Math.pow(a, String(i).length-1-j);
}
  
while (normal>=b) {
  result = String(numberTranslation[normal % b]) + result;
  normal = Math.trunc(normal/b);
}
result = numberTranslation[normal] + result;

process.stdout.write(result);
