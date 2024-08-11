//#1 START//
var day = +prompt('Введите свой возраст')

if(day<=18 && day>0){
    alert('Вы еще молоды, Вам нужно учиться')
} else if (day<=50 && day>18){
    alert('Вам нужно работать')
} else if (day<=59 && day>50){
    alert('Вам скоро на пенсию')
} else if (day<=100 && day>59){
    alert('Вы пенсионер')
}else{
    alert('Что-то пошло не так')
}
//#1 END//


//#2 START//
var time = +prompt('Введите время')

switch(time) {
    case 0:
        alert('Полночь');
        break;
    case 1:
        alert('1 час ночи');
        break;
    case 2:
        alert('2 часа ночи');
        break;
    case 3:
        alert('3 часа ночи');
        break;
    case 4:
        alert('4 часа ночи');
        break;
    case 5:
        alert('5 часов ночи');
        break;
    case 6:
        alert('6 часов ночи');
        break;
    case 7:
        alert('7 часов утра');
        break;
    case 8:
        alert('8 часов утра');
        break;
    case 9:
        alert('9 часов утра');
        break;
    case 10:
        alert('10 часов утра');
        break;
    case 11:
        alert('11 часов дня');
        break;
    case 12:
        alert('Полдень');
        break;
    case 13:
        alert('1 час дня');
        break;
    case 14:
        alert('2 часа дня');
        break;
    case 15:
        alert('3 часа дня');
        break;
    case 16:
        alert('4 часа дня');
        break;
    case 17:
        alert('5 часов дня');
        break;
    case 18:
        alert('6 часов вечера');
        break;
    case 19:
        alert('7 часов вечера');
        break;
    case 20:
        alert('8 часов вечера');
        break;
    case 21:
        alert('9 часов вечера');
        break;
    case 22:
        alert('10 часов вечера');
        break;
    case 23:
        alert('11 часов вечера');
        break;
    default:
        alert('Что-то пошло не так');
        break;
}
//#2 END//


//#3 START//
var num1=+prompt('Введите 1 число')
var num2=+prompt('Введите 2 число')
var num3=+prompt('Введите 3 число')

if ((num1>num2 && num1<num3) ||(num1<num2 && num1>num3) ){
    alert(num1)
} else if ((num2>num1 && num2<num3) ||(num2<num1 && num2>num3) ){
    alert(num2)
}else if ((num3>num2 && num3<num1) ||(num3<num2 && num3>num1) ){
 alert(num3)
}
else{
    alert('что-то пошло не так')
}
//#3 END//
