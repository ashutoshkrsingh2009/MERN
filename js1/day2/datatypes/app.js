// two type of data type
// (i)non-primitive data type   (ii) primitive data type
//    number                         arrays
//    string                         objects
//    boolean                        maps
//    BigInt                         sets
//    null
//    undefined
//    symbols
//    NaN 
// number 

var a=32
var b=-10
var c=99.95
console.log(a);
console.log(b);
console.log(c);

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
// 2nd way to  write
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

var num=45.555
console.log(num.toFixed(7));

// string

var a= 'ashu'
var b="ashutosh"
var c='888997889'
var d= `kgh`
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(typeof(a))
console.log(typeof c);

var naam= "ashutosh kr singh"
var age=21
console.log(`hello my name is ${naam} and my age is ${age}`);  // here we are concatinate (hello my name is and my age is) with the help of (backtrik` `) and(dollar sigh $)
console.log(typeof naam);

//boolean
var x=true
var y=false

console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);

// null
var a=null
console.log(a);

// undefined
var u;
console.log(u);

//some important operation on string.

var s = "hello world"
var s2= "i love"

var lcAns=(s2.toLowerCase())
console.log(lcAns)

console.log(s.toLowerCase()); // this function convert into lower case
console.log(s.toUpperCase());// this function convert into upper case
console.log(s.includes("H")); // includes function is checking that is given is present or not if present then output will be true else false
console.log(typeof (s.includes("H")));  // type is boolean

console.log(s.concat(s2));  // this function add s and s2 with the help of concat function

console.log(s.concat(" ").concat(s2))









