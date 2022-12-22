// let text = '18';
// let text2 = '40';

// text = text2;
// console.log(text);

// const user = {
//     name: 'Рашид',
//     age: 22,
//     message: 'Передаю привет будущему программисту'
// }
// console.log(user);

// user.age = 18;

// console.log(user);

// let eyeColor = 'голубые глаза';

// let user
// let userName = 'Вася';

// user = userName;

// console.log(user);

// let names = null;

// if(names == undefined){
//     console.log("нет определена");
// } else {
//     console.log("есть определение")
// }

// let mit = true;
// if(mit){
//     console.log('все правильно TRUE')
// } else {
//     console.log('False')
// }

// let age = 18;
// console.log(`возраст ${age}`)

// let user = {
//     name: "Рашид",
//     age: 18
// }
// console.log(user);

// let age = 28;
// age = String(age);
// console.log(age);
// console.log(typeof age)

// let num1 = num2 = num3 = 1 + 5;
// console.log(num1);

// num1--;
// num2++;
// console.log(num1,+" "+num2);

// let num4 = 9;
// ++num4;
// console.log(num4);

// console.log(5>9);
// console.log(5<9);
// console.log(5==9);
// console.log(5!=9);

// let num = 1;
// (num > 0) && console.log('Еба я программист');

// let num = 4;
// let text = "Все правильно"
// if(num > 1){
//     console.log(text);
// }

// let name = (9 < 1) ? 'Рашид' : 'Сакиша';
// console.log(name);

// let m = (92 > '11' && 58 < 100)?'истина':'лож';
// console.log(m);

// if (5 == '5'){
//     console.log('истина');
// } else {
//     console.log('лож');
// }

// let num = 5;

// // while (num){
// //     console.log('Привет '+num);
// //      num--;
// // }

// while (num) console.log(num--);

// let num;
// for(num = 0;num <= 5; num++){
//     console.log('цикл '+num);
// }

// let num1 = 3;
// for(;num1 <= 5; num1++){
//     console.log('Рашид '+num1);
// }

// let num = 0;
// for(; num < 5; num++){
//     console.log('Цикло с ограничением '+num);
//     if(num == 3) break;
// }

// let num = 0;
// while(num < 3){
//     console.log(`Число: ${num}`);
//     num++;
// }

// fir: for (let num = 0; num < 2; num++){

//     for(let size = 0; size < 3; size++){
//         console.log(size);
//         if(size == 1){
//           break fir;
//         }
//     }
// }

// document.addEventListener('keyup', search);
// function search() {
//     let input = document.getElementById("inputSearch");
//     let filter = input.value.toUpperCase();
//     let ul = document.getElementById("list");
//     let li = ul.getElementsByTagName("li");
 
//     // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
//     for (let i = 0; i < li.length; i++) {
//         let a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
            
//         } else {
//             li[i].style.display = "none";
           
//         }
//     }
// }

// function rashid (a = 5, b = 3){
//     let num = a+" "+b;
//     return num;
// }
// console.log(rashid());


// let userInfo = {
//     name: "Рашид",
//     age: 22,
//     adress:{
//         city:'izberbash',
//         street: 'poj',
//     }
// };

// console.log(userInfo.name);
// console.log(userInfo["age"]);
// console.log(userInfo.adress);

// let user ={
  
//         name:'rashid',
//         age:22,
    

// }

// delete user.name;
//     console.log(user);

// let user = {
//     name:'Rashid',
// }

// if('name' in user){
//     console.log(user.name);
// }else{
//     console.log('нету имени');
// }

// for(let key in user){
//     console.log(key);
// }

// showInfo() {
//     console.log(`меня зовут ${this.name}, мне ${this.age} года`);
// }

// user.showInfo();

// let num = Math.ceil(5.9);
// console.log(num);

// console.log(Math.max(4,100));
// console.log(Math.min(4,100));

// let text = `Привет`;
// console.log(`${text} я строка`);

// function num(a,b){
//     return a + b;
// }
// console.log(num(4,8));

// console.log(text.length);

// let first = text[3];
// console.log(first);

// console.log(text.slice(1,5));

// let arr = [`рашид`,`мухтар`,];
// console.log(arr[0]);

// arr.push(`сакиша`,`тазик`);
// console.log(arr);

// alert(`пидар`);