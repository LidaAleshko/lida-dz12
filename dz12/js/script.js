//1
/*
let name = prompt ('ваше имя');
console.log(name);
let age = prompt('возраст');
console.log(age);
let city = prompt ('город проживания');
console.log(city);
let phone = prompt('ваш номер телефона');
console.log(phone);
let email = prompt('ваша электронная почта');
console.log(email);
let company = prompt('компания в которой работаете');
console.log(company);
document.write('Меня зовут ', name, '.', ' Мне ', age, ' лет.', ' Я проживаю в городе ', city, ' и работаю в компании ', company, '.', ' Мои контактные данные: ', phone,', ', email, '.')

//2
let a = 2023 - age;
document.write(' ', name, ' родился в', a,' году.')
*/
//3
/*
let Str = '123456';
numStr = Number(Str);
console.log(numStr, typeof numStr);
if(Str[1] + Str[2] + Str[3] == Str[4] + Str[5] + Str[6]){
    console.log('Да')
}else {
    console.log('нет');
};
*/

//4
/*
let a = 1;
if(a > 0){
    console.log('Верно');
}else {
    console.log('Неверно');
};

let b = 0;
if(b > 0){
    console.log('Верно');
}else {
    console.log('Неверно');
};

let c = -3;
if(c > 0){
    console.log('Верно');
}else {
    console.log('Неверно');
};
*/

//5

let a = 10;
let b = 2;
console.log (a + b);
if ((a + b) > 1) console.log((a + b)* (a + b));
console.log (a - b);
console.log (a * b);
console.log (a / b);

//6
if (a > 2, a < 11 || b >= 6 && b < 14){
    console.log('Верно');
}else{
    console.log('Неверно');
};
 

//7
const n = 19;

switch(true) {
case n >= 0 && n < 15 :
    console.log('первая четверть часа');
    break;
    case n >=15 && n < 30 :
        console.log('вторая четверть часа');
        break;
        case n >= 30 && n < 45 :
            console.log('третья четверть часа');
            break;
            case n >= 45 && n <= 59 :
                console.log('четвертая четверть часа');
                break;
                default: console.log('error');
}

//8
/*
const day = 10;
switch (true) { 
    case day >= 1 && day < 11 :
console.log('первая декада');
break;
case day >= 11 && day < 21 :
console.log('вторая декада');
break;
case day >= 21 && day < 31 :
console.log('третья декада');
break;
default: console.log('ERROR');
};
*/

//9

 /*
let year = prompt('Сколько дней в году');

    if (year <= 364){
        console.log('«Меньше года»')
    }else if(year == 365) {console.log('верно')}else{
        console.log('<Больше года>')
    }
;
let month = prompt('сколько дней в месяце?');
if( month <= 30) {console.log ('меньше месяца')}
else if (month == 31){console.log('верно')}else{
    console.log('ERROR') 
};

let week = prompt('сколько дней в неделе?');
if( week <= 6){console.log('Меньше недели')}
else if (week == 7){console.log('верно')}else{
    console.log('ERROR')
};
let day = prompt('сколько часов в дне?');
if( day <= 23){console.log('Меньше дня')}
else if (day == 24){console.log('верно')}else{
    console.log('ERROR')
};
let hour = prompt('сколько минут в часу?');
if( hour <= 59){console.log('Меньше часа')}
else if (day == 60){console.log('верно')}else{
    console.log('ERROR')
};
let minute = prompt('сколько секунд в минуте?');
if( minute <= 59){console.log('Меньше минуты')}
else if (minute == 60){console.log('верно')}else{
    console.log('ERROR')
};

year == 12 * month == 52 * week == 365 * day;
second = 1;
minute = second * 60;
hour = minute * 60;
day = hour * 24;
week = day * 7;
month = day * 31;
year = day * 365; 
*/
//10

let mon = 10;
switch(mon){
    case 1:
        console.log('Январь, зима');
        break;
        case 2 :
        console.log('Февраль, зима');
        break;
        case 3:
        console.log('Март, весна');
        break;
        case 4:
        console.log('Апрель, весна');
        break;
        case 5:
        console.log('Май, весна');
        break;
        case 6:
        console.log('Июнь, лето');
        break;
        case 7:
        console.log('Июль, лето');
        break;
        case 8:
        console.log('Август, лето');
        break;
        case 9:
        console.log('Сентябрь, осень');
        break;
        case 10:
        console.log('Октябрь, осень');
        break;
        case 11:
        console.log('Ноябрь, осень');
        break;

        case 12:
        console.log('Декабрь, зима');
        break;
}





 
