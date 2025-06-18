console.log("this is my first webpage" )
let a=20;
console.log(a)
let A=10;
console.log(A)
let name="pyari"
console.log(name)
let LastName="Moharana"
let _id=123;
console.log(_id)
let $FullName="pyarimohan Moharana"
console.log($FullName) 

//using var
var b=30;//global variable
console.log(b)// local level

{
    var B=11;
    console.log(B) //block level
}
function printvalue(){ // function level
    console.log(b)
}
printvalue()

//declare in block level using var
{
    var c=33;
    console.log(c)
}
console.log(c)
function A(){
    console.log(c)
}
A()

// Function level declartion
// 1.if you declared a variable inside the function
// you can't access out side of the function
function declareA(){
    var role="student"
    console.log(role)
}
declareA()
// console.log(role) (in outside not access)

// let declaration
//(global level)
let mark=50;
console.log('mark',mark)

// block level
{
    console.log(mark)
}

// blocl level declartion
{
    let xyz=st;
    console.log(xyz)
}
//console.log(xyz)

// function level
function printst(){
    let x="student"
    console.log(x)
}
printst()

//console.log(x)

// const declaration
//global level
const aa=11;
console.log(aa)

//block level
{
    const AA=123;
    console.log(AA)
}
// console.log(AA)

// function level
function pi(){
    const Y=111;
    console.log(Y)
}
pi()

// declaration and initialization
var d=12; //(declare)
d=17;     //(initialization)
var d=79; //(re-in)
console.log(d)

let e=9;
e=8;
//let e=11; 
console.log(e)

const f=6;
// f=5;
// const f=111;
console.log(f)