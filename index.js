/*first project to print hello or any name*/
// import { parse } from "path";
// let a = 2;
// console.log(a);
// `waqas`;
// console.log(`waqas`);
// /*check krne k liye typeof ka istimal*/
// let testvariable = 2;
// console.log(typeof testvariable);
// let testvariable1 = "waqas";
// console.log(typeof testvariable1);
/*hm type change nhii kr skte hain*/
// let a = 3;
// console.log(a + 2);
/*STARTING OPERATORS*/
/*Arithmetic operators*/
// addition
// let n1 = 3;
// let n2 = 3;
// console.log(n1 + n2); 
/*str means k hm jo bhi values str me put krte hain str unko ek sth likhta ha*/
// let str1 = "1";
// let str2 = "2";
// console.log(str1 + str2); 
// ○ Subtraction
//  let n1 = 9;
// let n2 = 7;
// console.log(n1 - n2); 
// ○ Multiplication
//  let n1 = 5;
// let n2 = 2;
// console.log(n1 * n2); 
// ○ Division
//  let n1 = 10;
// let n2 = 2;
// console.log(n1 / n2);
// ○ Exponentiation ko hm double staric k sth denote krte hain is ka mtlb ha k power
//  let n1 = 3;
// let n2 = 3;
// console.log(n1 ** n2); 
// ○ Modulus find kre k liye hm % ka sign use krte hain
//  let n1 = 10;
// let n2 = 3;
// console.log(n1 % n2); 
// Assignment operators:
// ○ Assignment operator are used to assigning values to variables.
//  let n = 10;
// console.log(n); 
// n += 5;
// console.log(n); 
// n -= 5;
// console.log(n); 
// Comparison operators:
// ○ Comparison operator are used to compare values of variables.
//  let n = 10;
// console.log(n == 5); //
// console.log(n === 5); //
// console.log(n != 5); //
// console.log(n > 8); //
// console.log(n < 8); //
// console.log(n >= 8); //
// console.log(n <= 8); //
// Logical operators:
// ○ Logical operator are used to combine multiple conditions in one.
// let n = 5;
// console.log(n >= 5 && n < 10); //
// console.log(n > 5 && n < 10); //
// console.log(n >= 5 || n < 10); //
// console.log(n > 5 || n < 10); //
// console.log(!(n < 10)); //
// console.log(!(n > 10)); // 
// let myCountry = "Pakistan";
// let myCity = "Karachi";
// let myName = "Waqas";
// let myAge = 20;
// let mySiblings = "four";
// if (myCountry === "Pakistan") {
//     console.log("next");
// } else {
//     console.log("close");
// }
// if (myCity = "Karachi") {
//     console.log("Next");
// } else {
//     console.log("wrong Answer");
// }
// if (myName = "Waqas") {
//     console.log("Next");
// } else {
//    console.log("wrong Answer") ;
// }
// if (myAge = 20) {
//     console.log("Next");
// } else {
//     console.log("wrong answer");
// }
// if (mySiblings == "four") {
//     console.log("Next");
// } else {
//     console.log("wrong Answer");
// }
//  let a = 2;
// console.log(a);
// if (myCountry === "Pakistan") {
//     if ( myCity = "Karachi"){
//         if(myName = "Azeem"){
//             if(myAge >= 18){
//                 if(mySiblings = "Three"){
//                     console.log("Next")                              
//                 } else {
//                     console.log("wrongcountryName");
//                 }                                        
/*Ticketing system*/
// let country = prompt("Where do you live");
// let age = Number (prompt("What's your age?"));
// let Class = prompt("Select your Class == "Economy Class" || Class == "Business Class"");
// let PaymentMethod = prompt("Cash or online transaction");
// if (country === "pakistan") {
//     if (age >= 18)
//     {
//         console.log("Here is your ticket")
//         } else {
//         console.error("Age restriction")
//         }
//        } else {
//         console.log("Invalid country")
//        }
//     if ( country === "pakistan") {
//         if (age >= 18) {
//             if (Class == "Economy Class" || Class == "Business Class" ) {
//                 if (PaymentMethod = "Cash or online transaction") {
//                     console.log("Here is your ticket") 
//                 } else {
//                     console.error("Age restriction")
//                 } 
//             } else {
//                 console.log("Invalid country")
//             }
//         } else {
//             console.log("No any other Class")
//         }
//     } else {
//         console.log("Choose another payment Method")
//     }
/* Start using Array.. Array Means we can store a multiple type of data in one line  */
// let Fruits = ["apple","banana","stawbery","grapes","ppomegrant","mango","much more thousands of fruits"]
// Fruits.pop();
// console.log(Fruits);
// console.log(Fruits[6]);
// Fruits.push("admore");
// console.log(Fruits);
/* Hm bna rahe hain papers result*/
// // let englishMarks :number = 78;
// let mathMarks :number = 58;
// let physicsMarks :number = 48;
// let urduMarks :number = 98;
// let chemistryMarks :number = 28;
// let percentage = (englishMarks+mathMarks+physicsMarks+chemistryMarks+urduMarks)/500*100;
// let grade;
// if (percentage >= 90){
//    grade ="A+1";
// } else if (percentage >= 80){
//    grade ="A+";
// }else if (percentage >= 70){
//    grade ="A";
// }else if (percentage >= 60){
//    grade ="B";
// }else if(percentage >= 50){
//    grade ="C";
// }else {
//    grade = "Fail";
// }
// console.log(`your Grade is ${grade}`);
// console.log(`your Percentage is ${percentage}`);
// export {};
// parseInt kiya krta ha propmt hamesha string return ke ga is liye is k sth paresint use krte hain ta k ye nodeTest. return kre
// const prompt = require('prompt-sync')();
// let englishMarks :number = parseInt(prompt("enter your englishMarks : "));
// let mathMarks :number = parseInt(prompt("enter your mathMarks : "));
// let physicsMarks :number = parseInt(prompt("enter your physicsMarks : "));
// let urduMarks :number = parseInt(prompt("enter your urduMarks : "));
// let chemistryMarks :number = parseInt(prompt("enter your chemistryMarks : "));
// let sindhiMarks :number = parseInt(prompt("mention your sindhiMarks : "));
// let islamiatMarks :number = parseInt(prompt("mention your islamiatMarks : "));
// let bioMarks :number = parseInt(prompt("mention your bioMarks : "));
// let drawaingMaks :number = parseInt(prompt("mention your drawingMarks : "));
// let percentage = (englishMarks+mathMarks+physicsMarks+chemistryMarks+urduMarks+sindhiMarks+islamiatMarks+bioMarks+drawaingMaks)/900*100;
// let totalMarks =(englishMarks+mathMarks+physicsMarks+chemistryMarks+urduMarks+sindhiMarks+islamiatMarks+bioMarks+drawaingMaks);
// let outofMArks :number = 900;
// let grade;
// if (percentage >= 90){
//    grade ="A+1";
// } else if (percentage >= 80){
//    grade ="A+";
// }else if (percentage >= 70){
//    grade ="A";
// }else if (percentage >= 60){
//    grade ="B";
// }else if(percentage >= 50){
//    grade ="C";
// }else {
//    grade = "Fail";
// }
// console.log(`outofMArks is ${900}`);
// console.log(`your totalMarks is ${totalMarks}`);
// console.log(`your Grade is ${grade}`);
// console.log(`your Percentage is ${percentage}`);
// export {};
// const prompt1 = require('prompt-sync')();
// let sindhiMarks :number = parseInt(prompt1("mention your sindhiMarks : "));
// let islamiatMarks :number = parseInt(prompt1("mention your islamiatMarks : "));
// let bioMarks :number = parseInt(prompt1("mention your bioMarks : "));
// let drawaingMaks :number = parseInt(prompt1("mention your drawingMarks : "));
// let percentage1 = (sindhiMarks+islamiatMarks+bioMarks+drawaingMaks)/400*100
// let grade1;
// if (percentage1 >= 90){
//    grade1 ="A+1";
// } else if (percentage1 >= 80){
//    grade1 ="A+";
// }else if (percentage1 >= 70){
//    grade1 ="A";
// }else if (percentage1 >= 60){
//    grade1 ="B";
// }else if(percentage1 >= 50){
//    grade1 ="C";
// }else {
//    grade1 = "Fail";
// }
// console.log(`your Grade is ${grade1}`);
// console.log(`your Percentage is ${percentage1}`);
// let fruits :string[] = ["apple","mango","grapes","pomigrant","banana","watermalon"];
// /*use of to push in array when u put any value in push you will see it at end end of array*/
// fruits.push("pineapple");
// /*use of to unshift in array when u put any value in unshift you will see it at start of array*/
// fruits.unshift("bigApple");
// /*use of to splice in array when u put any value in splice you can adjust it on  any no.*/
// fruits.splice(3,2, "longGrapes") 
// console.log(fruits);
/*claculate discount 100,49*/
// function discountPercentage (productPrice:number , discountPercentage:number):void{
// let discountAmount :number = productPrice *(discountPercentage/100);
// let finalPrice:number = productPrice - discountAmount;
// if (discountPercentage >=50){
//    console.log(`your percentage is invalid`);
// }else {
//    console.log(`Your Original Price is ${productPrice}$`);
//    console.log(`Your Discount percentage is ${discountPercentage}%`);
//    console.log(`Your Discount Amoount is ${discountAmount}$`);
//    console.log(`Your Final Amount is ${finalPrice}$`);
// }
// }
// discountPercentage(1000 , 40)
// function discountPercentage(productPrice:number , discountPercentage:number):void{
//   let discountAmount:number = productPrice * (discountPercentage/100);
//    let finalPrice:number = productPrice - discountAmount;
//    if (discountPercentage >=50){
//       console.log(`your percentage is invalid`);
//    }else {
//       console.log(`Your Original Price is ${productPrice}$ `);
//       console.log(`Your Discount percentage is ${discountPercentage}%`);
//       console.log(`Your Discount Amount is ${discountAmount}$ `);
//       console.log(`Your Final Amount is ${finalPrice}$`);
//    }
// }
// discountPercentage(1000 , 48);
// function discountPercentage(productPrice:number ,discountPercentage:number)
// function discountPercentage(productPrice:number , discountPercentage:number):void{
//   let discountAmount:number = productPrice * (discountPercentage/100);
//    let finalPrice:number = productPrice - discountAmount;
//    if (discountPercentage >=50){
//       console.log(`your percentage is invalid`);
//    }else {
//       console.log(`Your Original Price is ${productPrice}$ `);
//       console.log(`Your Discount percentage is ${discountPercentage}%`);
//       console.log(`Your Discount Amount is ${discountAmount}$ `);
//       console.log(`Your Final Amount is ${finalPrice}$`);
//    }
// }
// discountPercentage(1000 , 48);
// function discountPercentages(productPrice:number , discountPercentage:number):void{
//    let discountAmount:number = productPrice *(discountPercentage/100);
//    let finalPrice:number = productPrice - discountAmount;
//    if (discountPercentage >= 50){
//       console.log('your percentage is invalid');
//    }else {
//       console.log(`your original price ofthe product is ${productPrice}$`);
//       console.log(`your discountPercentage of the the product is ${discountPercentage}%`);
//       console.log(`your discount amount of the product is${discountAmount}$ `);
//       console.log(`your final price of the product is ${finalPrice}$`);
//    }
// }
0;
// discountPercentages(10000 , 20);
// function discountPercentage(productPrice:number , discountPercentage:number):void{
//    let discountAmount:number = productPrice*(discountPercentage/100);
//    let finalPrice:number = productPrice - discountAmount;
//    if (discountPercentage >=50){
// console.log(`your percentage is invalid`)
//    }else{
//       console.log(`your original price is ${productPrice}$`);
//       console.log(`your discoutnPercentage is ${discountPercentage}%`);
//       console.log(`your discount Amount is ${discountAmount}$`);
//       console.log(`your final price is ${finalPrice}$`);
//    }
// }
// discountPercentage(900 , 23)
// function discountPercentages(productPrice:number , discountPercentage:number):void{
//    let discountAmount:number = productPrice*(discountPercentage/100);
//    let finalPrice:number = productPrice - discountAmount;
//    if(discountPercentage >= 50){
//       console.log(`your percentage is invalid`);
//    }else{
//       console.log(`your original price is ${productPrice}$ `)
//       console.log(`your discountPercentage  is ${discountPercentage}%`)
//       console.log(`your discountAmount  is ${discountAmount}$ `)
//       console.log(`your  finalprice is ${finalPrice}$ `)
//    }
// }
// discountPercentages(800 , 45)
// function factorial(num:number):number{
//    let result = 1;
//    for(let i = 1 ; i <= num ; i++ ){
//       result *= i;
//       console.log(result)
//    }
//    return result;
//    }
// factorial(10);
// function factorial(num:number):number{
//    let result = 1;
//    for ( let i = 1; i <= num ;i++ ){
//       result *= i;
//       console.log(result , "*");
//    }return result
// }
// factorial(5);
// function factorial1(num:number):number{
//    let result = 1;
//    for ( let i = 1 ; i <=num ; i++){
//       result *= i;
//       console.log(result , "*");
//    } return result 
// }
// factorial(6);
// function factorial2(num:number):number{
// let result = 1;
// for (let i = 1 ; i <=num ; i++){
// result*=i;
// console.log(result , "*");
// } return result
// }
// factorial(8)
// function factorial(num:number):number{
//    let result = 1;
//    for(let i = 1 ; i <=num ; i++){
//    result*=i;
//    console.log(result , "*");
// }return result
// }
// factorial(9)
// function factorial4(num:number):number{
//    let result = 1;
//    for(let i = 1 ; i <=num ; i++){
//       result*=i;
//       console.log(result , "*");
//    }return result
// }
// factorial4(8);
// function factorial5(num:number):number{
// let result = 1;
// for(let i = 1 ; i<=num ; i++){
//    result*=i;
//    console.log(result , "*");
// }return result
// }
// factorial(7);
// function factorial(num:number):number{
//    let result = 1;
//    for(let i = 1 ; i <=num ; i++){
//        result*=i;
//        console.log(result , "*");
//    }return result;
// }
// factorial(4);
// function factorial(num:number):number{
//   let result = 1;
//   for(let i = 1 ; i <=num ; i++){
//     result *= i;
//     console.log(result , "*");
//   }return result;
// }
// factorial(5)
// function factorial(num:number):number{
//   let result = 1;
//   for(let i = 1 ; i <= num ; i++){
//     result *= i;
//     console.log(result , "*");
//   }
//   return result;
// }
// factorial(9);
// function factorial2(num:number):number{
//   let result = 1;
//   for(let i = 1 ; i <= num ; i++){
//     result *=i;
//     console.log(result , "*");
//   }
//   return result;
// }
// factorial(6);
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// var numElements = cleanestCities.length;
// var matchFound = false;
// for (var i = 0; i < numElements; i++) {
//  if ("Islamabad" === cleanestCities[i]) {
//  matchFound = true;
//  console.log("It's one of the cleanest cities");
//  break;
//  }
// }
// if (matchFound === false) {
//  console.log("It's not on the list");
// }
// let cleanestcities : string[] = ["karachi","lahore","islamabad","abbottabad"];
// let numElements :number = cleanestcities.length;
// let matchfound :boolean = false;
// for(let i = 0 ; i < numElements ; i++){
//  if ("islamaabad" === cleanestcities[i]){
//    matchfound  = true;
//    console.log('islamabad is the cleanest cities ');
//    break;
//  }  
// }
// if (matchfound === false){
//    console.log("islambad is not found");
// }
import chalk from "chalk";
console.log(chalk.bgRed.green.bold("Hello World"));
let myAge;
myAge = 16;
;
console.log(myAge);
