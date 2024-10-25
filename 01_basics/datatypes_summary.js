//primitive

// 7 types : String , Number , Boolean , null , undefined , symbol , BigInt



// Refference(non-primitive)

// Array,Object,Function.

/*
 ->JavaScript is dynamically typed. This means that in JavaScript,
 you don't need to specify the type (like number, string, or boolean) 
 of a variable when you create it. The type is determined automatically 
 based on the value you assign to it.

 For e.g:-

let x = 10;       // x is a number.
x = "Hello";      // now x is a string.

*/

//Array
const heros=["Shaktiman" , " naagraj " , "doga" ];
//Obj
let myObj={
    name: "Hitesh",
    age:  22,
}

//Function

const myFunction=function(){
    console.log("Hello World");

}
console.log("Hello World");
console.log(typeof bigNumber);//special case undefined aata h bigint ka

//baki sbka ok rhta h 
console.log(typeof null);
console.log(typeof null);
/*
Type of val                                                Result
Undefined                                                  "undefined"
Null                                                       "object"
Boolean                                                    "boolean"
Number                                                     "number"
String                                                     "string"
Object (native and does not implement [[Call])             "object"
Object (native or host and does not implement [[Call])     "function"
Object (host and does not implement [[Call]])                Implementation-defined except may not be "undefined",
                                                   "boolean", "number", or "string".
*/