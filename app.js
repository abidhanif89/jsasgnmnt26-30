/******QUESTION NO 1 */
// var userNum = +prompt("enter number")
// // userNum = Math.round(userNum)
// // userNum = Math.floor(userNum)
// userNum = Math.ceil(userNum)
// document.write(userNum)
// *********************************************

/*******QUESTION NO 2 */

// // var userNum = +prompt("enter number")
// // userNum = Math.round(userNum)
// // userNum = Math.floor(userNum)
// // userNum = Math.ceil(userNum)
// // document.write(userNum)
// *************************************************

/********* Question No 3 */

// // var userNum = +prompt("enter number")
// // var numAbsVal = Math.abs(userNum)
// // document.write(numAbsVal)
// ****************************************************

/************* Question no 4 */

var player1Name = prompt ("enter player 1 name")
var player2Name = prompt ("enter player 2 name")
var tossResult = Math.round(Math.random())
if(tossResult === 1){
    document.write ("<h1>"+  player1Name.toUpperCase() + (" ") +"Selected HEAD and" + (" ") + "won the toss")
}
else{
    document.write ("<h2>"+ player2Name.toUpperCase() + (" ") + "Selected Tail and" + (" ") + "won the toss")
}
// document.write (Math.ceil(tossResult))
red
/******** Question no 6 */

// var rdmNum = Math.floor((Math.random() * 100) + 1);
// document.write(rdmNum)
// ****************************************

/***** Question no 7 */

// var userWeight = +prompt("enter your weight in kgs")
// userWeight = (Math.floor(userWeight))
// document.write(userWeight + " " + "kilograms")
// ************************************************

// /****** Question no 8  */

// var secretNum = (Math.floor(Math.random()*10) + 1);
// var userSecretnum = + prompt("enter secret number from 1 to 10")
// if (userSecretnum === secretNum){
//     alert ("Congratulations You Won")
// }
// else {
//     alert ("Try Again ")
// }