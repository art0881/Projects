//  $("body").append("<h1>Привет Мир</h1>");
// $("h1").fadeOut(3000).fadeIn(3000);
// let friend = ["Курбан","Рашид"];
// for(let i = 0; i < friend.length;i++){
//     $("body").append("<p>"+friend[i]+"</p>").fadeOut(1000).fadeIn(1000);
// };
// let time = function(){
// alert("Привет");
// };
// setTimeout(time,10000);

// let sec = 5;
// let second = function(){
//     console.log("Вы смотрите уже "+sec+" секунд");
//     sec+=5;
// };
// var inter = setInterval(second,5000);
// clearInterval(inter);

// var leftOffset = 0;
//  var moveHeading = function () {
// $("#heading").offset({ left: leftOffset });
// leftOffset++;
//  if (leftOffset > 200) {

//     leftOffset = 0;
//  }
// };
//  setInterval(moveHeading, 30);

// function b (){
//     document.getElementById("heading").innerHTML="ПППП";
//     $("#heading").offset({left:400});
    
// };

// $("html").mousemove(function (event) {
//     let ni = offset({left: event.pageX, top: event.pageY})
//      $("#heading").click(ni);
//     });

// var getRandomNumber = function (size) {
//     return Math.floor(Math.random() * size);
//     };
//     // Вычислить расстояние от клика (event) до клада (target)
//     var getDistance = function (event, target) {
//     var diffX = event.offsetX - target.x;
//     var diffY = event.offsetY - target.y;
//     return Math.sqrt((diffX * diffX) + (diffY * diffY));
//     };
//     // Получить для расстояния строку подсказки
//     var getDistanceHint = function (distance) {
//         if (distance < 10) {
//             return "Обожжешься!";
//             } else if (distance < 20) {
//             return "Очень горячо";
//             } else if (distance < 40) {
//             return "Горячо";
//             } else if (distance < 80) {
//             return "Тепло";
//             } else if (distance < 160) {
//             return "Холодно";
//             } else if (distance < 320) {
//             return "Очень холодно";
//             } else {
//             return "Замерзнешь!";
//             }
//             };
//             // Создаем переменные
//             var width = 400;
//             var height = 400;
//             var clicks = 0;
//             // Случайная позиция клада
//             var target = {
//             x: getRandomNumber(width),
//             y: getRandomNumber(height)
//             };
//             // Добавляем элементу img обработчик клика
//            $("#map").click(function (event) {
//             clicks++;
//             // Получаем расстояние от места клика до клада
//             var distance = getDistance(event, target);
//             // Преобразуем расстояние в подсказку
//             var distanceHint = getDistanceHint(distance);
//             // Записываем в элемент #distance новую подсказку
//             $("#distance").text(distanceHint);
//             // Если клик был достаточно близко, поздравляем с победой
//             if (distance < 8) {
//             alert("Клад найден! Сделано кликов: " + clicks);
//             }
//             });

// let dog = {
//     name: "аппа",
//     age:34
// }

// console.log(dog);
// let bo = document.getElementById('box'),
// btns = document.getElementsByTagName('button');
// circles = document.getElementsByClassName('tt');

// const num = '100%';

// bo.style.cssText='background-color:red; color:white';
// bo.innerHTML="GGG";

// btns[0].style.borderRadius = `${num}`;

// circles[0].style.backgroundColor = 'red';

// const text = document.createTextNode('Текст из JS');

// bo.classList.add('border');

// const div = document.createElement('div');
// div.classList.add('dd');
// document.body.append(div);

// const btn = document.querySelector('button');
// // btn.onclick = function(){
// //     alert('Привет самый лучший программист');
// // }
// let i = 0;
// const doalert = (e) =>{
//     alert("Самый легендарный");
//     i++;
//     if(i==1){
//     btn.removeEventListener('click',doalert);
//     }
// }
// btn.addEventListener('click',doalert);

const btn = document.querySelectorAll('button');

btn[0].addEventListener('click', ()=>{
    // if(!btn[1].classList.contains('red')){
    //     btn[1].classList.add('red');
    // } else {
    //     btn[1].classList.remove('red');
    // }
    btn[1].classList.toggle('red');
})