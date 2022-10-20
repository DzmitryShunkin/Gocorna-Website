// "use strict";
// alert("hello");
// console.log(1);
// const myObject = {
//   x: 10,
//   y: true,
//   z: "abx"
// };
// for (const q in myObject) {
//   console.log(q, myObject[q]);
// }
// console.log(myObject);
// myObject["Q"] = 25;
// console.log(myObject);
// const qwert = (xa,ya)=>{

// }
// const qwert = [1, 2, 3, 4];
// for (const key of qwert) {
//   console.log(key * 2);
// }
// qwert.forEach(el => console.log(el * 3));
// const y = qwert.map(el => el * 3);
// console.log(y);
// const result = confirm("are you here!");
// console.log(result);
// for (const i = 4; i <= 10; i++) {
//   console.log(i);

// for (const i = 20; i > 10; i--) {
//   if (i === 13) break;
//   console.log(i);
// }
// function secondTask() {
//   for (let i = 20; i >= 10; i--) {
//     if (i === 13) break;
//     console.log(i);
//   }
// }

// for (let i = 5; i < 11; i++) {
//   console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
//   if (i === 13) break;
//   console.log(i);
// }
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }
// let i > 1;
// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }

// function fourthTask() {
//   let i = 2;

//   while (i <= 16) {
//     if (i % 2 === 0) {
//       i++;
//       continue;
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// }

// fourthTask();

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// function fourthTask() {
//   let i = 2;

//   while (i <= 16) {
//     if (i % 2 === 0) {
//       i++;
//       continue;
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// }
// const array = []
// array[0]=5;
// // array[5]=10
// for(array[0]=5;array.length<10;array[]++){
//     console.log(array)
// }
//--------------------------------------------------------------------------------------------
// let numberOfFilms;
// function start() {
//   numberOfFilms = +prompt("how many movies did you watch?");
//   while (
//     numberOfFilms == "" ||
//     numberOfFilms == null ||
//     numberOfFilms == isNaN(numberOfFilms)
//   ) {
//     numberOfFilms = +prompt("how many movies did you watch?");
//   }
// }
// start();

//  const personalMoviesDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
//  };
// function rememberMyFilm() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("watch is your favorite movies ?");
//     const b = +prompt("watch the mark does this movie have ?");
//     personalMoviesDB.movies[a] = b;
//   }
// }
// rememberMyFilm();

// console.log(personalMoviesDB);

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMoviesDB);
//   }
// }
// showMyDB(personalMoviesDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i < 4; i++);
//   genre = prompt(`your favorite genre ${i}`);
//   personalMoviesDB.genres[i - 1] = genre;
// }
// writeYourGenres();
// console.log(writeYourGenres());

//-----------------------------------------------------------------------------------------------

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 'shopping', 8, 16, 20, 23,'done', 50];
//     const result = [];
//    for (let i=0; i<arr.length;i++){
//        if (typeof (arr[i])==='string'){
//            return arr[i]=`${arr[i]}${':done'}`
//        }
//        if(typeof (arr[i])=== 'number'){
//           return arr[i]= arr[i]*2
//        }
//    }
//    console.log(arr);
//    return arr;

// function secondTask() {
//   const data = [5, 10, "Shopping", 20, "Homework"];

//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       data[i] = data[i] * 2;
//     } else if (typeof data[i] === "string") {
//       data[i] = `${data[i]} - done`;
//     }
//   }

//   console.log(data);
//   return data;
// }

// function secondTask() {
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   result=[];

//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       data[i] = data[i] * 2;
//     } else if (typeof data[i] === "string") {
//       data[i] = `${data[i]} - done`;
//     }
//   }

//   console.log(data);
// }

// secondTask();

// function ssecondTask() {
//     const data = [5, 10, "Shopping", 20, "Homework"];
//     result=[];
//     for(let i = 0; i < data.length; i--){
//         result
//     }

// const name = "string";
// function qwer(name) {
//   return `Hello,${name}!`;
// }
// qwer("ANTON");

// function sayHello(name) {
//   return `Привет, ${name}!`;
// }

// sayHello("Alex");

// function asd(number) {
//   return [number - 1, number, number + 1];
// }
// asd(5);

// function returnNeighboringNumbers(num) {
//   return [num - 1, num, num + 1];
// }

// console.log(returnNeighboringNumbers(5));
// function qwe(a,b){
//     for(let i =0 , i<b , i=+a)
// }

// function calcylate(a) {
//   if (a === null || typeof a === "string") {
//     return "При вычислении произошла ошибка";
//   }
//   const V = a * a * a;
//   const S = 6 * a * a;
//   return `Обьём куба: ${V},площадь${S}`;
// }
// calcylate(3);
// console.log(calcylate(2.2));
// array = [1, 23, 45];
// array2 = array.map(el => el);
// console.log(array2);
// console.log(array);
// array2[1] = 34;
// console.log(array2);


//  const personalPlanPeter = {
//      name: "Peter",
//      age: "29",
//      skills: {
//          languages: ['ru', 'eng'],
//          programmingLangs: {
//              js: '20%',
//              php: '10%'
//          },
//          exp: '1 month'
//      }
//  };
// showExperience(c){
//     for(let key in object c){
//         if(key===exp){
//             return personalPlanPeter[key]
//         }
//     }
// };
// showExperience(personalPlanPeter)

// showAgeAndLangs(){
//     const{js,php}=personalPlanPeter.skills.programmingLangs

// };
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     arr.foreach(i=>i)
//     return`Семья состоит из: ${arr[i]}
    
// }

const person2 ={
    height:187,
    penis:16,
    weight:83,
    typePerson:'normal',
    opq :{
        first:'to be beatiful',
        second:'to be small'
    }
};

    for (let key in person){
        console.log(`object ${person} have propertie:      ${key} with meaning     ${person[key]}`)
    };
//____________-----------------------------------------------------------------------------
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };


    const person = {
        height:187,
        penis:16,
        weight:83,
        typePerson:'normal',
        opportyenities : {
            first:'to be beatiful',
            second:'to be small'
        }
    };

    let counter = 0
        for (let key in person){
            
        //     if(typeof(person[key])==="object"){
        //         for (let i in person[key]){
        //             console.log(`object ${person[key]} have propertie:${i} with meaning${person[key][i]}`)
        //     }
          
            
            
        // }  else{console.log(`object ${person} have propertie:${key} with meaning${person[key]}`)}
//         counter++
//     }
  
// console.log(counter)


// let qweras=[1,3,5,3,7]
// const x=qweras.join("z")
// console.log(x)
// qweras.sort()
// console.log(qweras)

// let qweras2=['a','b','1','3','5','string',3,7]
// qweras2.sort()
// console.log(qweras2)

// let zsx=[]
// let asdf="9876543";
// const z =asdf.split('');
// console.log(z);

const cats=[ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]
function countCats(cats2){
    numberCates=[]
    cats2.forEach(function(el,i){
        if(typeof(el)==='array'){
            el[i].forEach(function(el2,i2){
                if (el2[i2]==='^^'){
                   numberCates[t]=el2[i2]
                };
            }
        }  
    })
     return numberCates.length
}
countCats(cats)
console.log(countCats(cats))





// countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ])