/*
Рассчитать количество дней до нового года.
На вход поадется дата в формате d m y
1 <= d <= 31
m in [января февраля марта апреля мая июня июля августа сентября октября ноября декабря]
1 <= y <= 2999
Пример

> node task.rb 4 июля 2018
> 180
*/

var d = parseFloat(process.argv[2]);
var m = process.argv[3];
var y = parseFloat(process.argv[4]);
var counter = 0;

if (d>=1 && d <=31 && y>=1 && y <= 2999) {
        switch (m) {
            case "января":
                if ((y%4)==0) {
                    counter++;
                }
                counter += 365-d;
                break;
            case "февраля":
                if ((y%4)==0) {
                    counter++;
                }
                counter += 365-31-d;
                break;
            case "марта":
                counter += 365-31-28-d;
                break;
            case "апреля":
                counter += 365-31-28-31-d;
                break;
            case "мая":
                counter += 365-31-28-31-30-d;
                break;
            case "июня":
                counter += 365-31-28-31-30-31-d;
                break;
            case "июля":
                counter += 365-31-28-31-30-31-30-d;
                break;
            case "августа":
                counter += 31+30+31+30+31-d;
                break;
            case "сентября":
                counter += 30+31+30+31-d;
                break;
            case "октября":
                counter += 31+30+31-d;
                break;
            case "ноября":
                counter += 30+31-d;
                break;
            case "декабря":
                counter += 31-d;
                break;
        }
        process.stdout.write(String(counter));
    }
