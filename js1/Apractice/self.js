// practice question for conditional 

//Q1. Check Even or Odd

/*
let n=parseInt(prompt('enter value of n'))
if(n%2==0)
{
	console.log(`${n} is even`);
}else
{
	console.log(`${n} is odd`);
}
*/


//Q2. Positive, Negative ya Zero by taking user input

/*
let n=parseInt(prompt("enter value of n"))

if(n<0)
{
	console.log(`${n} is negative number`);
}
else if(n>0)
{
console.log(`${n} is positive number`);
}
else if(n===0)
{
	console.log(`${n} = zero `);
}else
{
	console.log(`${n} is not a number`);	
}

*/

// Q3. Vote Eligibility

// Age diya hai.
// Agar age 18 ya usse zyada hai → "Eligible"
// Warna → "Not Eligible"


/*
let age = parseInt(prompt("please enter age"))
if(isNaN(age))
{
    console.log(`${age} is not a valid age please enter valid age`);  
}
else if(age>=18)
{
    console.log(`${age} is eligible for vote`); 
}
else
{
    console.log(`${age} is not eligible for vote`); 
}

*/

//Q4. Largest of Two Numbers

// Do numbers diye gaye hain. Print karo kaunsa bada hai.

/*
let a=parseInt(prompt("enter value of a"))
let b=parseInt(prompt("enter value of b"))

if(isNaN(a)||isNaN(b))
{
console.log("PLEASE ENTER VALID INPUT");
}
else if (a>b)
{
    console.log(`${a} is greter than ${b}`);  
}
else if(b>a)
{
    console.log(`${b} is greter than ${a}`); 
}
else
{
    console.log(`${a} is equal to ${b}`);  
}

*/


// Q5. Divisible by 5 and 11

// Check karo number 5 aur 11 dono se divisible hai ya nahi.

/*
let n=parseInt(prompt("enter number"))
if(isNaN(n))
{
    console.log("please enter valid input");
    
}
else if(n%5==0 && n%11==0)
{
    console.log(`${n} is divisible by both 5 and 11`);
}
else if(n%5 ==0 && n%11 !==0)
{
console.log(`${n} is divisible by 5 but not divisible by 11`);
}
else if(n%11==0 && n%5!==0)
{
    console.log(`${n} is divisible by 11 but not divisible by 5`); 
}
else
{
 console.log(`${n} is not divisible by both 5 and 11`);
}

*/


// Q6. Grade System (else-if)

// Marks diye gaye hain:

// 90+ → A

// 75–89 → B

// 60–74 → C

// 40–59 → D

// Below 40 → Fail

// let marks=parseInt(prompt("enter student marks"))
// if(isNaN(marks) || marks<0 || marks>100)
// {
//     console.log("PLEASE ENTER VALID MARKS");  
// }
// else if(marks>=90)
// {
//     console.log("A");  
// }
// else if(marks>=75)
// {
//     console.log("B");  
// }
// else if(marks>=60)
// {
//     console.log("C"); 
// }
// else if(marks>=40)
// {
//     console.log("D");   
// }
// else
// {
//     console.log("FAIL"); 
// }


// Q7. Ternary Operator

// Check karo number even hai ya odd using ternary operator.

/*
let n=parseInt(prompt("enter value of n"))
n%2==0? console.log(`${n} is even`): console.log(`${n} is odd`);

*/


// Q8. Simple Calculator (switch)

// Do numbers aur ek operator (+ - * /) diya hai.
// Switch case use karke result print karo.

/*

let a=parseInt(prompt("enter value of a"))
let b=parseInt(prompt("enter value of b"))
let operator=prompt("enter +,-,*,/")

switch (operator)
 {
    case "+":
        console.log(a+b);
        break;

            case "-":
        console.log(a-b);
        break;
            case "*":
        console.log(a*b);
        break;
            case "/":
        console.log(a/b);
        break;
    default:
        console.log("entry is invalid");
        
        break;
}

*/
  // same question but another way

/*
let a=parseInt(prompt("please enter value of a"))
let b=parseInt(prompt("please enter value of b"))
let operator=prompt(" please enter any one operation  +,-,*,/")
if(isNaN(a) || isNaN(b))
{
    console.log("please enter valid input"); 
}
else
{
    switch(operator)
{
    case "+":
     console.log(a+b);
    break
    case "-" :
     console.log(a-b);
    break

    case "*":
     console.log(a*b);
    break

    case "/" :
     console.log(a-b);
    break
    
    default :
     console.log("invalid operator");
    
}
}
*/

// Q9. Leap Year

// Year diya hai. Check karo leap year hai ya nahi.

/*
let year=parseInt(prompt("enter year"))
if(year%4==0 && year%100 !=0 || year%400==0)
{
    console.log(`${year} is leap year`);  
}
else
{
    console.log(`${year} is not leap year`);
}

*/

// Q10. Find Largest of Three Numbers

// let a= parseInt(prompt("enter value of a"))
// let b= parseInt(prompt("enter value of b"))
// let c= parseInt(prompt("enter value of c"))

// if(isNaN(a) || isNaN(b) || isNaN(c))
// {
//     console.log("invalid input");  
// }
// else if(a>b && a>c)
// {
//     console.log(`${a} is greter than ${b} and ${c}`);
// }
// else if(b>a && b>c)
// {
//     console.log(`${b} is greter than ${a} and ${c}`);  
// }
// else
// {
//     console.log(`${c} is greer than ${a} and ${b}`);
// }  

// Q11. Temperature Condition

// Temp > 40 → "Very Hot"

// 30–40 → "Hot"

// 20–29 → "Normal"

// Below 20 → "Cold"

// let temp=parseInt(prompt("enter temperature"))

// if(isNaN(temp))
// {
//     console.log("invalid temperature");   
// }
// else if(temp>40)
// {
//     console.log("very hot"); 
// }
// else if(temp>=30)
// {
//     console.log("hot"); 
// }
// else if(temp>=20)
// {
//     console.log('normal'); 
// }else
// {
//     console.log("cold"); 
// }

// Q12. Character Check

// Ek character diya hai.
// Check karo vowel hai ya consonant.

// let char=prompt("enter char ")
 
// switch(char)
// {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//         console.log(`${char} is vowel`);
//     break
//     default :
//     console.log(`${char} is consonant`);  
// }


// let char=prompt("enter char ")
//  if(char.length===1)
//  {
//     char=char.toLowerCase()
// switch(char)
// {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":

//         console.log(`${char} is vowel`);
//     break
//     default :
//     console.log(`${char} is consonant`);  
// }
//  }
//  else
//  {
//     console.log('please enter single character');
//  }
 
// let ch = "a";


// if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"){
//     console.log("Vowel");
// }else{
//     console.log("Consonant");
// }





    //loop practise

//Multiplication Table Generator for 5 by taking input from user..

// let n=parseInt(prompt("enter a number to print it table"))
// if(isNaN(n))
// {
//     console.log("please enter valid number to print it table"); 
// }
// else
// {
//     let start = 1
//     while(start<=10)
//     {
//         console.log(n+" x " + start +" = "+n*start);
//         start++
//     }
// }

// You are given a number N. Print sum of all even numbers from 1 to N.
// let n=4
// let start=2
// let sum=0
// while(start<=n)
// {
//     if(start%2==0)
//     {
//         sum=sum+start
//     }
//     start++
// }
// console.log(sum);



// 1️⃣ Print 1 to 10


// let n=10
// let start=1
// while(start<=10)
// {
//     console.log(start);
//     start++
// }


// 2️⃣ Print 10 to 1

// let n=10
// let start=1
// while(start<=n)
// {
//     console.log(n);
//     n--
// }


//3️⃣ Print even numbers from 1 to 50

// let n=50
// let start=2
// while(start<=n)
// {
//     console.log(start);
//     start+=2
// }

// another way
// let n=50
// let start=2
// while(start<=n)
// {
//     if(start%2==0)
//     {
//         console.log(start); 
//     }
//     start++
// }

// 4️⃣ Print odd numbers from 1 to 50


// let n=50
// let start=1
// while(start<=n)
// {
//     console.log(start);
//     start+=2
// }

// another way
// let n=50
// let start=1
// while(start<=n)
// {
//     if(start%2!==0)
//     {
//         console.log(start); 
//     }
//     start++
// }

// 5️⃣ Print table of 7

// let num=7
// let start=1
// while(start<=10)
// {
//     console.log(num*start);
//     start++
// }

// 6️⃣ Sum of numbers from 1 to 50

// let n=50
// let start=1
// let sum=0
// while(start<=n)
// {
//   sum+=start
//   start++
// }
// console.log(sum);

//7️⃣ Count numbers divisible by 5 from 1 to 100
// let n=100
// let start=5
// let count=0
// while(start<=n)
// {
//     if(start%5==0)
//     {
//         count++
//     }
//     start+=5
// }
// console.log(count);

//8️⃣ Print square of numbers from 1 to 15
// let n=15
// let start=1
// while(start<=n)
// {
//     console.log(start*start);
//     start++
// }

//9️⃣ Print cube of numbers from 1 to 10

// let n=10
// let start=1
// while(start<=n)
// {
//     console.log(start*start*start);
//     start++
// }

// 🔟 Find sum of even numbers from 1 to 100

// let n=100
// let start=2
// let sum=0
// while(start<=n)
// {
//     sum+=start
//     start+=2
// }
// console.log(sum);

// another way

// let n=100
// let start=2
// let sum=0
// while(start<=n)
// {
//     if(start%2==0)
//     {
//         sum+=start
//     }
//     start++
// }
// console.log(sum);

// 1️⃣1️⃣ Reverse a number

// let n =4356
// let rev=0
// while(n>0)
// {
//     let ld=n%10
//     rev=rev*10+ld
//     n=Math.floor(n/10)
// }
// console.log(rev);

//1️⃣2️⃣ Count digits in a number

// let n=1234567
// let count=0
// while (n>0)
//  {
//     n=Math.floor(n/10)
//     count++
// }
// console.log(count);


//1️⃣3️⃣ Sum of digits

// let n=12345
// let sum=0
// while(n>0)
// {
//     let ld=n%10
//     sum+=ld
//     n=Math.floor(n/10)
// }
// console.log(sum);

// 1️⃣4️⃣ Find largest digit in a number

// let n=146427854
// let gd=0
// while(n>0)
// {
//     let ld =n%10
//     n=Math.floor(n/10)
//     if(ld>gd)
//     {
//         gd=ld
//     }
// }
// console.log(gd);

// 1️⃣5️⃣ Check palindrome number

// let n=1321
// let cn=n
// let rev=0
// while(n>0)
// {
//     ld=n%10
//     rev=rev*10+ld
//     n=Math.floor(n/10)
// }
// if(rev===cn)
// {
//     console.log("yes number is palindrome");
// }else
// {
//     console.log("no number is not palidrome"); 
// }

// 6️⃣ Sum of numbers from 1 to 50
// let n=50
// let start=1
// let sum=0
// while(start<=50)
// {
//     sum+=start
//     start++
// }
// console.log(sum);


// 7️⃣ Count numbers divisible by 5 from 1 to 100
// let n=100
// let start=5
// let count=0
// while(start<=n)
// {
//     start+=5
//     count++
// }
// console.log(count);

// 2nd way

// let n=100
// let start=1
// let count=0
// while(start<=n)
// {
//     if(start%5==0)
//     {
//         count++
//     }
//     start++
// }
// console.log(count);

// 8️⃣ Print square of numbers from 1 to 15
// let n=15
// let start=1

// while(start<=n)
// {
//     console.log(start*start);
//     start++
// }

// 9️⃣ Print cube of numbers from 1 to 10

// let n=10
// let start=1
// while(start<=n)
// {
//     console.log(start*start*start);
//     start++
// }


// 🔟 Sum of even numbers from 1 to 100
// let n=100
// let start=2
// let sum=0
// while(start<=n)
// {
//     sum+=start
//     start+=2
// }
// console.log(sum);

// another way to do 

// let n=100
// let start=1
// let sum=0
// while(start<=n)
// {
//     if(start%2===0)
//     {
//         sum+=start
//     }
//     start++
// }
// console.log(sum);

// 1️⃣ Reverse a number
// let n=123
// let rev=0
// while(n>0)
// {
//     let ld=n%10
//     rev=rev*10+ld
//     n=Math.floor(n/10)
// }
// console.log(rev);

// 2️⃣ Count digits in a number
// let n=1235445
// let count=0
// while(n>0)
// {
//     n=Math.floor(n/10)
//     count++
// }
// console.log(count);

// 3️⃣ Sum of digits

// let n=1234
// let sum=0
// while(n>0)
// {
//     let ld=n%10
//     sum+=ld
//     n=Math.floor(n/10)
// }
// console.log(sum);

// 4️⃣ Find largest digit
 
// let n =23467246
// let gd=0
// while(n>0)
// {
//    let ld=n%10
//    n=Math.floor(n/10)
//    if(ld>gd)
//    {
//     gd=ld
//    }
// }
// console.log(gd);


// 5️⃣ Check palindrome

// let n=1234321
// let cn=n
// let rev=0
// while(n>0)
// {
//     let ld=n%10
//     rev=rev*10+ld
//     n=Math.floor(n/10)
// }
// if(cn==rev)
// {
//     console.log("yes palindrone");  
// }else
// {
//     console.log("not palindrone");  
// }

// find 5 facorial
// let n=5
// let start=1
// let factorial=1
// while(start<n)
// {
//     factorial*=start
//     start++
// }
// console.log(factorial);


//    using break keyword

// print 1 to 10 but stop printing after 7 

// let n=10
// let start=1
// while(start<=n)
// {
//     console.log(start);
//     start++
//     if(start==7)
//     {
//         break
//     }
    
// }

// using continue keyword

//print 1 to 10 but skip printing  7
 
// let n=10
// let start=1
// while(start<=n)
//  {
//     console.log(start);
//     start++
//     if(start==7)
//     {
//         start++
//         continue
//    }
    
//  }


  // loop practice on 14/02/2026

// table generator of 5 in format 5x1=5

// let n=5
// let start=1
// while(start<=10)
// {
//     console.log(n+"x"+start+"="+n*start);
//     start++
// }

// sum of even number from 1 to 10
// let n=10
// let start=2
// let sum=0
// while(start<=n)
// {
//     sum+=start
//     start+=2
// }
// console.log(sum);

//   another way of doing this 

// let n=10
// let start=1
// sum=0
// while(start<=n)
// {
//     if(start%2===0)
//     {
//         sum+=start
//     }
//     start++
// }
// console.log(sum);

// factorial of 5
// let n=5
// let start=1
// let product=1
// while(start<=n)
// {
//     product*=start
//     start++
// }
// console.log(product);

// same thing using for loop

// let n=5
// let product=1
// for(let i=1;i<=n;i++)
// {
//     product*=i
// }
// console.log(product);


// Calculate Power Without Built-in Method
// Two numbers are entered through the keyboard. 
// Write a program to find the value of one number raised to the power of another.
//  (Do not use Java or C++ built-in method)

// let a=2
// let b=3
// let start=1
// let power=1
// while(start<=b)
// {
//     power*=a
//     start++ 
// }
// console.log(power);

// Check Prime
// Write a program that inputs a positive integer N. 
// It should then output a message indicating whether the number is a prime number or not.

// let n=6
// let start=2
// var isPrime=true
// while(start<n)
// {
//     if(n%start==0)
//     {
//         isPrime=false
//     }
//     start++
// }

// if(isPrime==true)
// {
//     console.log(`${n} is a prime number`);
// }
// else
// {
//     console.log(`${n} is not a prime number`); 
// }


// NOW TO MAKE THIS UPPER CODE MORE EFFICIENT by using break 

// let n=6
// let start=2
// var isPrime=true
// while(start<n)
// {
//     if(n%start==0)
//     {
//         isPrime=false
//         break
//     }
//     start++
// }
// if(isPrime==true)
// {
//     console.log(`${n} is a prime number`); 
// }
// else
// {
//     console.log(`${n} is not a prime number`);
// }


// make this code more efficient by making n/2

// let n=6
// let start=2
// var isPrime=true
// while(start<n/2)
// {
//     if(n%start==0)
//     {
//         isPrime=false
//         break
//     }
//     start++
// }

// if(isPrime==true)
// {
//     console.log(`${n} is a prime number`);
// }
// else
// {
//     console.log(`${n} is not a prime number`); 
// }

// make it more efficient by changing while condition 


// let n=6
// let start=2
// var isPrime=true
// while(start*start<n)
// {
//     if(n%start==0)
//     {
//         isPrime=false
//         break
//     }
//     start++
// }

// if(isPrime==true)
// {
//     console.log(`${n} is a prime number`);
// }
// else
// {
//     console.log(`${n} is not a prime number`); 
// }



// Prime Numbers Range
// Given an integer n, print all prime numbers between 1 and n (both inclusive).

// let n=20
// let start=1
// while(start*start<=n)
// {
//     let isprime=true
//     if(n%start==0)
//     {
//         isprime=false
//         start++
//     }
//     if(isprime==true)
//     {
//         console.log(start);  
//     }
   
// }

// function isPrime(n){
//     if(n<2) return false

//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             return false
//         }
//     }
//     return true
// }

// let nums=20;

// for(let i=0;i<=nums;i++){
//     if(isPrime(i)){
//     console.log(i);
    
//     }
// }

// function averagegrade(arr)
// {
//     let n=arr.length
//     let sum=0
//     for(let item of arr)
//     {
//         sum+=item
//     }
//     return Math.floor(sum/n)
// }
// console.log(averagegrade([1,2,3,4,5,6]));



// let arr=[1,2,3,4,5]
// newarr=[]
// newarr[0]=arr[0]*arr[1]

// for(let i=1;i<arr.length;i++)
// {
//     newarr[i]=arr[i-1]*arr[i+1]
// }
// newarr[newarr.length-1]=arr[arr.length-1]*arr[arr.length-2]

// console.log(newarr)









// Digit Frequency Counter
// Given a number N and find total digit 

// let n=1234543234
// let count=0
// for(let i=1;n>0;i++)
// {
//    n=Math.floor(n/10)
//    count++
// }
// console.log(count);























//                   //function practice
//// this is normal function syntax

// function abc()
// {
//     console.log("ashu");
//     return age=24
// }
// console.log(abc());

//// this s funcional expression syntax
// let fn=function()
// {
//     console.log("asu");
//     return 24
// }
// fn()
// console.log(fn());

//// this is arrow function syntax
// let fn=()=>{console.log("abc");
// }
// fn()





// ✅ Q1. Create a function that prints "Hello World"
// function abc()
// {
//     console.log("hello world");
    
// }
// abc()

//       or by functional expression

// let fn= function()
// {
//     console.log("hello world"); 
// }
// fn()

//      or by arrow function

// let abc = ()=>console.log("hello world");
// abc()

//✅ Q2. Create a function that prints your name.

// function fullName(name)
// {
//     console.log(name);
// }
// fullName("Ashutosh kr singh")

//     or by functional expression

// let fullname=function(name)
// {
//     console.log(name);
    
// }
// fullname("ashutosh kr singh ")

//    or by arrow function

// let fullname=(name)=>console.log(name);
// fullname("ashutosh kr singh")

// ✅ Q3. Create a function that prints numbers from 1 to 5.

// function abc()
// {
//     let n=5
//     let start=1

//     while(start<=n)
//     {
//          console.log(start);
//         start++
//     }
// }
// abc()

//// same question by using for loop 

// function abc(n)
// {    
//     let ans=[]
//     for(let i=1;i<=n;i++)
//     {
//     //   ans.push(i)
//     console.log(i)  
//     }
//     // return ans
// }
// // let ans =abc(5)
// // console.log(ans);
// abc(5)



//     or by funcional expression

// let fn=function(n)
// {
//     let start=1
//     while(start<=n)
//     {
//         console.log(start);
//         start++  
//     }
// }
// fn(5)
    

// ✅ Q5. Create a function that adds two numbers.

// function add(a,b)
// {
//     console.log(a+b);
// }
// add(2,3)

// //    or by functional expression
// let fn=function(a,b)
// {
//     console.log(a+b);
// }
// fn(2,4)

// // or by arrow function
// let add=(a,b)=>console.log(a+b);
// add(4,6)

//   using return

// function add(a,b)
// {
//     return (a+b)
// }
// let result=add(3,4)
// console.log(result);

// Q6. Create a function that subtracts two numbers.
// function sub(a,b)
// {
//     return(a-b)
// }
// let ans=sub(6,2)
// console.log(ans);

//   or by functional expression
// let fn=function(a,b)
// {
//     return(a-b)
// }
// let ans=fn(4,2)
// console.log(ans);

// or by arrow function
// let fn=(a,b)=>{
//     return(a-b)
// }
// let sub=fn(9,4)
// console.log(sub);
 
//     or 
// let fn=(a,b)=>a-b
// console.log(fn(8,5));

//✅ Q7. Create a function that multiplies two numbers.

// const fn=(a,b)=>a*b
// console.log(fn(2,4));

// //Q8. Create a function that finds square of a number.
// let fn=a=>a*a
// console.log(fn(3));

//✅ Q9. Create a function to check even or odd number
// function check(a)
// {
//     if(a%2===0)
//     {
//         return "even"
//     }
//     else{
//         return "odd"
//     }
// }
// console.log(check(6));

// Q10. Create a function to check if a number is positive, negative, or zero.
// const fn=n=>
// {
//     if(n<0)
//     {
//         return "negative"
//     }
//     else if(n>0)
//     {
//         return "positive"
//     }
//     else{
//         return "zero"
//     }
// }
// console.log(fn(9));

//✅ Q11. Create a function to check largest of two numbers.
// let fn=(a,b)=>a>b? `${a} is greter then ${b}` :`${b} is greter than ${a}`
// console.log(fn(9,99));


//     just for fun question by self


// function valentine()
//  {
//     let answer = prompt("Will you be my valentine? (yes/no)");

//     if(answer === "yes") {
//         console.log("Thanks ❤️");
//     } else {
//         console.log("nikal bsdk");
//     }
// }

// valentine();



// ✅ Q12. Create a function that returns the sum of 1 to n.

// function add(n)
// {
//    let sum=0
//    let start=1
//    while(start<=n)
//    {
//     sum+=start
//     start++
//    }
//     return sum
// }
// console.log(add(5));

// or by functional expression


// let fn=function(n)
// {
//     let start=1
//     let adds=0
//     while(start<=n)
//     {
//         adds+=start
//         start++
//     }
//     return adds
// }
// console.log(fn(5));

// //✅ Q13. Create a function that returns factorial of a number.
// function abc(n)
// {
//     let factorial=1
//     let start=1
//     while(start<=n)
//     {
//         factorial*=start
//         start++
//     }
//     return factorial
// }
// console.log(abc(5));

// ✅ Q14. Create a function to check if a number is prime.

// function abc(n)
// {
//     if(n%n===0 && n%1==0)
//     {
//         return `${n} is prime`
//     }
//     else
//     {
//       return `${n} is not prime`
//     }
// }
// console.log(abc(12));


////----------------- array revsion by own-------------------------
////------------push method----------
// let arr=[1,2,3,4,5]
// arr.push(11)
// console.log(arr);

//// return by push method that what is push returning and ans is length of new array after pushing elememt


// let arr=[1,2,3,4,5]
// let ret=arr.push(11)
// console.log(arr);
// console.log(ret);

////-----------pop method----------
// let arr=[1,2,3,4,5]
// arr.pop()
// console.log(arr);

//// return by pop method what is return by pop method and ans is deleted element 

// let arr=[1,2,3,4,5]
// let ret=arr.pop()
// console.log(arr);
// console.log(ret);

//// their is lots of method in arr that is push,pop,unshift,shift,includes,join,concat,splice,slice,index of...

//// join method 
// let arr=["hey","my","name","is","ashu"]
// let ret=arr.join(" ")
// console.log(arr);
// console.log(ret);

//// concat method

// let arr=[1,2,3,4,5,6]
// let arr2=[9,8,7,6,5]
// let arr3=[-9,6,4,-1]
// let arr4=arr.concat(arr2,arr3)
// console.log(arr4);


/////---------slice method------

// let arr=[11,12,13,14,15,16,17,18,19,20]
// let ret=arr.slice(2,7)
// console.log(arr);
// console.log(ret);


////----------------splice mehod

// let arr=[11,12,13,14,15,16,17,18,19,20]
// let ret=arr.splice(2,6,119,116,1141)
// console.log(arr);
// console.log(ret);





















//             array practice question by assigment


// ------------------count digit in array

//// ----------includes method-------
// let arr=[1,2,3,4,5]
// let ret=arr.includes(32)
// console.log(arr);
// console.log(ret);

////-------------indexof method--------
// let arr=[1,2,3,4,5,1,2]
// let ret=arr.lastIndexOf(2)
// console.log(arr);
// console.log(ret);

////-------------join method-------------//
// let arr=["ashu","kashu","monu","sonu"]
// let ret=arr.join("-")
// console.log(arr);
// console.log(ret);
// console.log(typeof ret);

//// ------------join method on number----------//
// let arr=[1,2,3,4,5,6]
// let ret=arr.join(" ")
// console.log(arr);
// console.log(ret);
// console.log(typeof ret);

////----------------reverse an array--------
// let arr=[1,2,3,4,5]
// //// using for loop
// for(let i=arr.length-1;i>=0;i--)
// {
//     console.log(arr[i])
// }
// //// now using while loop
// let start=arr.length-1
// while(start>=0)
// {
//     console.log(arr[start]);
//     start--
// }
// //// now using direct reverse method
// arr.reverse()
// console.log(arr);


// let arr=[2,36,90,3,67,43,8,2,87,76]
// let start=0
// let count=0
// while(start<arr.length)
// {
//     if(arr[start]>35)
//     {
//         count++
//     }
//     start++
// }
// console.log(count);

//------------------------------- sum of array

// let arr=[1,2,3,4,5]
// let start=1
// let  sum=0
// while(start<=arr.length)
// {
//     sum+=start
//     start++
// }
// console.log(sum);


//     ----------------- or

// let arr=[1,2,3]
// let sum=0
// for(let item of arr)
// {
//     sum+=item
// }
// console.log(sum);

// product of array

// let arr=[1,2,3,4]
// let start=1
// let product=1
// while(start<=arr.length)
// {
//     product*=start
//     start++
// }
// console.log(product);

//-----------------------------   or
// let arr=[1,2,3,4,5]
// let product=1
// for(let item of arr)
// {
//     product*=item
// }
// console.log(product);

////------------------------------------question----------------------------------

// You are working on a project for a local school. 
// The school has a list of student grades, stored in an array.
//  Your task is to create a function that takes in an array of grades and returns the average grade.

// let arr=[20,30,40,50]
// let sum=0
// for(let item of arr)
// {
//     sum+=item
// }
// let avg=sum/(arr.length)
// console.log(avg);

// Given an array of N elements, your task is to update every element with multiplication of previous and next elements with following exceptions:-
//  a) First element is replaced by multiplication of first and second.
//  b) Last element is replaced by multiplication of last and second last.

// let arr=[1,2,3,4,5]
// let newarr=[]
// newarr[0]=arr[0]*arr[1];
// let n=arr.length;
// newarr[n-1]=arr[n-1]*arr[n-2];
// for(let i=1;i<n-1;i++){
//     newarr[i]=arr[i-1]*arr[i+1]
// }
// console.log(newarr);

// function abc(A,T)
// {
//     for(let i=0;i<A.length;i++)
//     {
//         if(A[i]===T)
//         {
//             return i
//         }

//     }
//     return -1
// }
// console.log(abc([1,2,3,4,5,6,7,8],5));
// console.log(abc([1,2,3,4,5,6,7,8],9));

// Write a program to count the elements in an array which are greater than 35.
// function abc(A)
// {
//     let count=0
//     for(let i=0;i<A.length;i++)
//     {
//         if(A[i]>35)
//         {
//             count++
//         }
//     }
//     return count
// }
// console.log(abc([5,12,67,89,16,23]));



// Comparing Array Sums

//Write a program to find out the difference between sum of all the elements in two arrays arr1 and arr2.
// If sum of all elements in arr1 is larger then, the output should be First array is larger,
// if sum of all elements in arr2 is larger then, the output should be Second array is larger,
// otherwise the output should be Both are equal.

// function abc(A1,A2)
// {
//     let sum1=0
//     for(let i=0;i<A1.length;i++)
//     {
//         sum1+=A1[i]
        
//     }

//     let sum2=0
//     for(let i=0;i<A2.length;i++)
//     {
//         sum2+=A2[i]
        
//     }
//     if(sum1>sum2)
//     {
//         return " first array is larger"
//     }
//     else if(sum2>sum1)
//     {
//         return "second array is larger"
//     }
//     else{
//         return "both are equal"
//     }
// }
// console.log(abc([1,2,3,4,5],[1,2,3,4,5]))

//  make it short

// function abc(A1,A2)
// {
//     let sum1=0
//      let sum2=0
//     for(let i=0;i<A1.length;i++)
//     {
//         sum1+=A1[i]
//         sum2+=A2[i]
//     }
//     if(sum1>sum2)
//     {
//         return " first array is larger"
//     }
//     else if(sum2>sum1)
//     {
//         return "second array is larger"
//     }
//     else{
//         return "both are equal"
//     }
// }
// console.log(abc([1,1,2,3,4,5],[1,2,3,4,5,2]))


// Product of Array
// Given an array of integers, return the product of all the elements.

// function abc(A)
// {
//     let product=1

//     for(let i=0;i<A.length;i++)
//     {
//         product*=A[i]
//     }
//     return product
// }
// console.log(abc([4,1, 2, 3 ,-1]));

// count number greter than 35
// let arr=[1,2,35,36,78,98,3,52]
// let count=0
// for(let item of arr)
// {
//     if(item>35)
//     {
//        count++
//     }
// }
// console.log(count);

// sum of array by using for of loop.

// let arr=[1,2,3,4,5,6]
// let sum=0
// for(let item of arr)
// {
//     sum+=item
// }
// console.log(sum);

// sum of array by using for loop

// let arr=[1,2,3,4,5,6,9]
// let sum=0
// for(let i=0;i<arr.length;i++)
// {
//     sum+=arr[i]
// }
// console.log(sum);


 //Array Sum, Average and Maximum
// Given an array arr of size n, Write a program to find the below 3 values.

// Sum of all the elements in the array.

// Average of all the elements in the array (Give the floor value).

// Maximum element in the array.

// let arr=[1,2,3,5,23,65,87]
// let sum=0
// let max=0
// for(let i=0;i<arr.length;i++)
// {
//     sum+=arr[i]
//     if(max<arr[i])
// {
//     max=arr[i]
// }
// }
// let avg=sum/arr.length
// console.log(sum);
// console.log(avg);
// console.log(max);



//-----JS PRACTICE----//
// function ticketprice(age,isweekend)
// {
//     let price=0

//     if(age>=0 && age <=12)
//     {
//         if(isweekend==true)
//         {
//             price=120
//         }
//         else
//         {
//             price=100
//         }
//     }
//     else if(age>=13 && age <=17)
//     {
//         if(isweekend==true)
//         {
//             price=180
//         }
//         else
//         {
//             price=150
//         }
//     }
//     else if(age>=18 && age <=59)
//     {
//         if(isweekend==true)
//         {
//             price=240
//         }
//         else
//         {
//             price=200
//         }
//     }
//     else if(age>=60)
//     {
//         if(isweekend==true)
//         {
//             price=144
//         }
//         else
//         {
//             price=120
//         }
//     }
//     else
//     {
//         price="invalid input"
//     }

//     return price
// }
// console.log(ticketprice(13,false));


//------ternaryoperator--------//
// let a=1
// let b=2
// a>b?console.log("a is greter"):console.log('B IS GRETER');

// let age=3
// age>=18?console.log("can vote"):console.log("can't vote");

//------switch case------//
// let num=7
// switch(num%2==0)
// {
//     case true:
//     console.log(`${num} is even`);
//     break

//     case false:
//     console.log(`${num} is odd`);
//     break

//     default:
//    console.log("invalid input");     
// }


//------loop question-----//

// let n=5
// let factorial=1
// for(let i=1;i<=n;i++)
//     {
//         factorial*=i
//     }
//     console.log(factorial);

// let a=2
// let b=3
// let start=1
// let power=1
// while(start<=b)
// {
//     power*=a
//     start++
// }
// console.log(power);

//-----break keyword----//

// let n=10
// let start=1
// while(start<=n)
// {
//     console.log(start);
//     start++
//     if(start===7)
//     {
//         break
//     }
    
// }

//----contine keyword-----//

// let n=10
// let start=1
// while(start<=n)
// {
//     console.log(start);
//     start++
//     if(start===7)
//     {
//       start++
//      continue
    
//     }
    
// }

//-------prime number concept --------//

// let num=19
// let start=2
// let isprime= true
// while(start*start<=num)
// {
//     if(num%start==0)
//     {
//         isprime=false
//          break
//     }
//     start++
// }
// if(isprime==true)
// {
//     console.log(`${num} is prime`);
// }
// else
// {
//     console.log(`${num} is not prime`);
// }


// function sum()
// {
//     let a=Number(prompt("enter number 1"))
//     let b=Number(prompt("enter number 2"))
//     console.log(a+b)
// }
// sum()

// let obj={
//     name:"ashu",
//     age:21,
// }  
// for(let item in obj)
// {
//     console.log(obj[item]) 
// }

// let obj={
//     name:"ashu",
//     age:21,
//     ispresent:true,
// } 
// delete obj.age
// console.log(obj);

// let obj={
//     name:"ashu",
//     age:21,
//     ispresent:true,
//     desination:"pilot",
//     myfn:function(){
//        return "hello"
//     }
// } 
// // console.log(obj.myfn())
// console.log(obj.hasOwnProperty("desination"));
// // if(!obj.hasOwnProperty("desination"))
// // // {
// // //     obj.desination="software enginer"
// // // }
// // // console.log(obj);

// let n=100
// for(let i=1;i<=n;i++)
// {
//     if(i%2==0)
//     {
//         console.log(`number is even ${i}`);
        
//     }
//     else
//     {
//         console.log(`number is odd ${i}`);
//     }
// }

// let n=100
// let evenCount=0
// let oddCount=0
// for(let i=1;i<=n;i++)
// {
//     if(i%2==0)
//     {
//         evenCount++  
//     }
//     else
//     {
//         oddCount++ 
//     }
// }
// console.log(evenCount);
// console.log(oddCount);



// function calculateGrade(marks)
// {
//     if(marks<0 || marks >100 || isNaN(marks))             
//     {
//         return "invalid marks"
//     }
//     else if (marks>=90 && marks <=100)
//     {
//         return "A+"
//     }
//     else if(marks<90 && marks>=80)
//     {
//         return "A"
//     }
//         else if(marks<80 && marks>=70)
//     {
//         return "B"
//     }
//         else if(marks<70 && marks >=60)
//     {
//         return "C"
//     }
//         else if(marks<60 && marks>=50)
//     {
//         return "D"
//     }
//         else if(marks<50)
//     {
//         return "F"
//     }
// }
// console.log(calculateGrade("kkk"));

// function abc(word)
// {
//     let vowelcount=0
//     let consonantcount=0
//     let vowel="aeiou"
    
//     for(let i=0;i<word.length;i++)
//     {
//         let char=word[i]
//         if((char>="a"&&char<="z")||(char>="A"&&char<="Z"))
//         {
//             if(vowel.includes(char.toLowerCase()))
//             {
//                 vowelcount++
//             }
//             else{
//                 consonantcount++
//             }
//         }
//     }
//     return {
//         length:word.length,
//         vowelcount:vowelcount,
//         consonantcount:consonantcount,
//         firstChar:word[0],
//         lastchar:word[word.length-1],
//         reverse:word.split("").reverse().join("")
//     }
// }
// console.log(abc("hello"));

// function analyzeword(word)
// {
//     if(typeof word !="string")
//     {
//         return "invalid input"
//     }
//     let vowelcount=0
//     let consonantcount=0
//     let lcword=word.toLowerCase(word)
//     for(let item of lcword)
//     {
//         if(item=="a" || item=="e" || item=="i" || item=="o" || item=="u")
//         {
//             vowelcount++
//         }
//         else
//         {
//             consonantcount++
//         }
//     }
//     return{
//         length:word.length,
//         vowelcount:vowelcount,
//         consonantcount:consonantcount,
//         firstchar:word[0] || '',
//         lastchar:word[word.length-1] || "",
//         rev:word.split("").reverse().join("")
//     }
// }
//  console.log(analyzeword("ashu"));


// const products = [
// { name: "Laptop", price: 50000, quantity: 1, category: "electronics" },
// { name: "Mouse", price: 500, quantity: 2, category: "electronics" },
// { name: "Notebook", price: 50, quantity: 5, category: "stationery" },
// { name: "Pen", price: 20, quantity: 10, category: "stationery" }
// ];
//  function processCart(products) 
//  {
//     let totalitem=0
//     let subtotal=0
//     let totaldiscount=0
//     let mostexpensive=products[0]

//     for(let item of products)
//     {
//         totalitem=totalitem+item.quantity
//         subtotal=subtotal+item.price*item.quantity

//         if(item.category=="electronics")
//         {
//             totaldiscount=totaldiscount+item.price*item.quantity*0.10
//         }
//         if(item.category=="stationery")
//         {
//             totaldiscount=totaldiscount+item.price*item.quantity*0.05
//         }
//         if(item.price*item.quantity>mostexpensive.price)
//         {
//             mostexpensive=item.name
//         }
//     }
//     return{
//         totalitem:totalitem,
//         subtotal:subtotal,
//         totaldiscount:totaldiscount,
//         finalAmount:subtotal-totaldiscount,
//         mostexpensive:mostexpensive
//     }
//  }
//  console.log(processCart(products));
 

// function calculateTicketPrice(age, isWeekend)
// {  
//     if(typeof age !== "number" || typeof isWeekend !== "boolean" || age < 0)
//     {
//         return "Invalid input"
//     }
//    else if(age>=0 && age <=12)
//     {
//         if(isWeekend==true)
//         {
//             return 100 +(100*0.20)
//         }
//         return 100
//     }
//        else if(age>=13 && age <=17)
//     {
//         if(isWeekend==true)
//         {
//             return 150+(150*0.20)
//         }
//         return 150
//     }
//            else if(age>=18 && age <=59)
//     {
//         if(isWeekend==true)
//         {
//             return 200 + (200*0.20)
//         }
//         return 200
//     }
        
//        else if(age>=60)
//     {
//         if(isWeekend==true)
//         {
//             return 120 +(120*0.20)
//         }
//         return 120
//     }
// }
// console.log(calculateTicketPrice(25, "yes"));


// function checkpassword(password)
// {    
//     let lowercase=false
//     let uppercase=false
//     let special=false
//     let number=false

//     for(let item of password)
//     {
//         if(item>="a" && item<="z")
//         {
//             lowercase=true
//         }
//         if(item>="A" && item<="Z")
//         {
//             uppercase=true
//         }
//         if(item>="0" && item<="9")
//         {
//             number=true
//         }
//         if(item=="!" || item=="@" || item=="#" || item=="$" || item=="%" || item=="^" || item=="&" || item=="*")
//         {
//             special=true
//         }
//     }

//         let strength="strong"
//         let truecount=[lowercase,number,uppercase,special].filter(Boolean).length

//         if(password.length>=8 && lowercase==true && number==true && special==true && uppercase==true )
//         {
//             strength="strong"
//         }
//         else if(password.length>=6 && truecount>=2)
//         {
//             strength="medium"
//         }
//         else{
//             strength="weak"
//         }
    
//     return{
//         length:password.length,
//         uppercase:uppercase,
//         lowercase:lowercase,
//         special:special,
//         hasnumber:number,
//         strength:strength
//     }
// }
// console.log(checkpassword("hello1"));




// const employees = [
// { name: "Amit", department: "IT", salary: 50000, yearsWorked: 3 },
// { name: "Priya", department: "HR", salary: 45000, yearsWorked: 5 },
// { name: "Rahul", department: "IT", salary: 60000, yearsWorked: 2 },
// { name: "Sneha", department: "Finance", salary: 55000, yearsWorked: 4 }
// ]

// function generateReport(employees)
// {

// let totalEmployees = 0
// let totalSalary = 0
// let totalBonus =  0

// //highest paid initialization
// let highestPaid =employees[0]

// for(let item of employees)
// {
//     // for highest paid employee
//     if(item.salary>highestPaid.salary)
//     {
//         highestPaid = item.name
//     }

//     // total employees
//     totalEmployees++

//     //totalsalary
//     totalSalary = totalSalary + item.salary

//     //bonus
//     // let bonus = 0

//     if(item.yearsWorked<=2)
//     {
//         totalBonus = totalBonus+item.salary*0.05
//     }

//     else if(item.yearsWorked<=4)
//     {
//         totalBonus = totalBonus+item.salary*0.10
//     }
//     else if(item.yearsWorked>=5)
//     {
//         totalBonus = totalBonus+item.salary*0.15
//     }
    

//     //total bonus
//     // totalBonus = totalBonus + bonus

// }


// let totalpayout = totalSalary + totalBonus

// let averageSalary = totalSalary/totalEmployees


// return {
//     totalEmployees : totalEmployees,
//     totalSalary : totalSalary,
//     totalBonus : totalBonus,
//     totalpayout : totalpayout,
//     highestPaid : highestPaid,
//     averageSalary : averageSalary
// }
// }

// let result = generateReport(employees)

// console.log(result);

// function findMax(arr)
// {
//     let Maximum=-Infinity
//     for(let item of arr)
//     {
//         if(item>Maximum)
//         {
//             Maximum=item
//         }
//     }
//     return Maximum
// }
// console.log(findMax([3,9,2,7]));

// function reverseArray(arr)
// {    let start=0
//     let end=arr.length-1
//     while(start<end)
//     {
//     if(arr[start]!=arr[end])
//     {
//         let temp=arr[start]
//         arr[start]=arr[end]
//         arr[end]=temp
//     }
//     start++
//     end--
//     }
//     return arr
// }
// console.log(reverseArray([1,2,3,4,5]));
// let obj={
//     a:10,
//     b:20,
//     c:30
// }
// function sumValues(obj)
// {
//     let sum=0
//     for(let item in obj)
//     {
//         sum+=obj[item]
//     }
//     return sum
// }
// console.log(sumValues(obj));


//-------continue keyword-------
//--------loop revision
// let n=12345
// let count=0
// while(n>0)
// {
//     n=Math.floor(n/10)
//     count++
// }
// console.log(count);

//------------------------digit frequency counter--------------------

// let n=12131451611
// let d=1
// let count=0
// while(n!=0)
// {
//     let ld=n%10
//     n=Math.floor(n/10)
//     if(ld==d)
//     {
//         count++
//     }
// }
// console.log(count);


//-------------check if a number is palindrome or not ---------------

// let n=1212121214
// let temp=n
// let rev=0
// while(n!=0)
// {
//     let ld=n%10
//     rev=rev*10+ld
//     n=Math.floor(n/10)
// }
// if(temp==rev)
// {
//     console.log("yes palindrome");
// }
// else
// {
//     console.log("no not a palimdrome"); 
// }

//---------------function revision---------------------

// function iseven(num)
// {
//     if(num%2==0)
//     {
//         return "even"
//     }
//     return "odd"
// }
// console.log(iseven(24));

// function maximum(a,b)
// {
//     if(a>b)
//     {
//         return a
//     }
//     else if(a==b)
//     {
//         return "both equal"
//     }
//     return b
// }
// console.log(maximum(8,6));

//---------------same by arrow function-----------------

// const max=(a,b)=>Math.max(a,b)
// console.log(max(4,2));

// function Count(str)
// {
//     return str.length
// }
// console.log(Count("ashutosh"));

//-------------BY ARROW FUNCTION------------

// const count=(str)=>str.length
// console.log(count("ashu"));

//---------------------rest operator---------------------//

// function sum(a,b,c)
// {
//     console.log(a+b+c);
    
// }
// sum(2,4)
// this is wrong becasuse here we are giving only 2 argument but need 3 so we can make it correct by using rest operator
// find sum of number
// function sum(...nums)
// {
//     let sum=0
//     for(let item of nums)
//     {
//         sum+=item
//     }
//     console.log(sum); 
// }
// sum(22,3,1,3,1,5,3)

////-----------------------object revision --------------
// const obj={
//     name:"ashu",
//     age:21,
//     // abc:"mkd"
// }
// // console.log(obj.hasOwnProperty("abc"))
// if(obj.hasOwnProperty("abc"))
// {
//     // obj.abc="aks"
// }
// else
// {
//      obj.abc="aks"
// }
// console.log(obj);

// let str=["hello world"]
// let ans={}
// for(let item of str)
// {
//     if(ans.hasOwnProperty(item))
//     {
//         ans[item]= ans[item]+1
//     }
//     else
//     {
//         ans[item]=1
//     }
// }
// console.log(ans);

/////---------------object question---------
// let users=[
//     {id:1,name:"ashu",city:"delhi"},
//     {id:2,name:"riya",city:"mumbai"},
//     {id:3,name:"karan",city:"delhi"},
//     {id:4,name:"neha",city:"pune"},
// ]
//  let ans=[]
// for (let item of users)
// {
//     if(item.city=="delhi")
//     {
//         ans.push(item.name)
//     }
// }
// console.log(ans);

// let users=[
//     {id:1,name:"ashu",city:"delhi"},
//     {id:2,name:"riya",city:"mumbai"},
//     {id:3,name:"karan",city:"delhi"},
//     {id:4,name:"neha",city:"pune"},
// ]
//  function findtarget(users,targetid)
//  {
//     for(let item of users)
//     {
//         if(item.id==targetid)
//         {
//             return item
//         }
//     }
//     return {}
//  }
// console.log(findtarget(users,22));

// let users=[
//     {id:1,name:"ashu",city:"delhi"},
//     {id:2,name:"riya",city:"mumbai"},
//     {id:3,name:"karan",city:"delhi"},
//     {id:4,name:"neha",city:"pune"},
// ]

// function findcity(users,targetcity)
// {
//     ans=[]
//     for(let item of users)
//     {
//         if(item.city==targetcity)
//         {
//             ans.push(item.name)
//         }
//     }
//     return ans
// }
// console.log(findcity(users,"delhi"));


//   const products = [
//   { id: 1, name: "Mouse", price: 500 },
//   { id: 2, name: "Keyboard", price: 1500 },
//   { id: 3, name: "Monitor", price: 12000 },
//   { id: 4, name: "iPhone", price: 80000 },
//   { id: 5, name: "Laptop", price: 60000 },
//   { id: 6, name: "Tablet", price: 200000 }
// ];

// function price(products,targetprice)
// {
//     for(let item of products)
//     {
//         if(item.price>targetprice)
//         {
//             return item
//             break
//         }
//     }
//     return{}
// }
// console.log(price(products,50000));


// const users1 = [
//  {id:1, name:"Aman", age:26, city:"Delhi"},
//  {id:2, name:"Riya", age:28, city:"Mumbai"},
//  {id:3, name:"Karan", age:30, city:"Delhi"}
// ];
// function find(users1,targetage,targetcity)
// {
//     for(let item of users1)
//     {
//         if(item.age >targetage && item.city==targetcity)
//         {
//             return item
//         }
//     }
//     return {}
// }
// console.log(find(users1,25,"Delhi"));

// const users1 = [
//  {id:1, name:"Aman", age:26, city:"Delhi"},
//  {id:2, name:"Riya", age:28, city:"Mumbai"},
//  {id:3, name:"Karan", age:30, city:"Delhi"}
// ];
// function find(users1)
// {
//     let ans=[]
//     for(let item of users1)
//     {
//         if(item.age >25 && item.city=="Delhi")
//         {
//             ans.push(item)
//         }
//     }
//     return ans
// }
// console.log(find(users1));


// const items = [
//  {id:1, name:"TV", category:"electronics"},
//  {id:2, name:"Shirt", category:"clothing"},
//  {id:3, name:"Phone", category:"electronics"},
//  {id:4, name:"Laptop", category:"electronics"}
// ];
// function find(items,category)
// {
//     for(let i=items.length-1;i>=0;i--)
//     {
//         if(items[i].category=="electronics")
//         {
//             return items[i]
//             break
//         }
//     }
//     return {}
// }
// console.log(find(items,"electronics"));

////---------reverse a number --------------
// let num=1346225
// let str=String(num)
// let Reverse=str.split("").reverse().join("")
// console.log(str.split("").reverse().join(""));


// console.log(num);
// console.log(str);
// console.log(Reverse);

// let str="abcd"
// let revstr=" "
// for(let i=str.length-1;i>=0;i--)
// {
//     revstr+=str[i]
// }
// console.log(revstr);

// let str="ashu"
// let revstr=" "
// for(let i=0;i<str.length;i++)
// {
//     revstr=revstr+str[str.length-i-1]
// }
// console.log(revstr);

//// reverse an array 
// let arr=[2,3,4,5,87,23]
// let start=0
// let end=arr.length-1
// while(start<end)
// {
//     let temp=arr[start]
//     arr[start]=arr[end]
//     arr[end]=temp
//     start++
//     end--
// }
// console.log(arr);

////-----------or---------

// let arr=[2,3,4,5,87,23]
// arr.reverse()
// console.log(arr);

// let arr=[
//     {
//         name:"mohan",
//         age:12
//     },
//     {
//         name:"ashish",
//         age:22
//     },
//     {
//         name:"raju",
//         age:15
//     },
//     {
//         name:"aayushi",
//         age:12
//     },
// ]
// let start=0
// let end=arr.length-1
// while(start<end)
// {
//     let temp=arr[start]
//     arr[start]=arr[end]
//     arr[end]=temp
//     start++
//     end--
// }
// console.log(arr);


////---------sort ----------------
// let arr=[1,4,33,66,55,88,33]
// arr.sort((a,b)=>{
//     return a-b
// })
// console.log(arr);

// let arr=[1,4,33,66,55,88,33]
// arr.sort((a,b)=>{
//     return b-a
// })
// console.log(arr);

// let str=["subham","mohan","kashi","aashu","ayush"]
// str.sort()
// console.log(str);

// let arr=[
//     {
//         name:"mohan",
//         age:12
//     },
//     {
//         name:"ashish",
//         age:22
//     },
//     {
//         name:"raju",
//         age:15
//     },
//     {
//         name:"aayushi",
//         age:12
//     },
// ]
// arr.sort((a,b)=>{
//     return a.age-b.age
// })
// console.log(arr);

//// now on the basis of name 

//  arr.sort((a,b)=>{
//     return a.name.localeCompare(b.name)
// })
// console.log(arr);

////-------------rest vs spread operator-------------
///q- make a function that sum 3 number

// function sum(a,b,c)
// {
//     console.log(a+b+c);
// }
// sum(2,2,2)


/// rest operator

// function sum(...num)
// {
//     console.log(num);
// }
// sum(1,3,4,5,6,7,8)

//// q- make a function that sum all the number 

// function add(...num)
// {
//     let sum=0
//     for(let item of num)
//     {
//         sum=sum+item
//     }
//     console.log(sum);  
// }
// add(1,2,3,4,5,6,7,8,9,10)

//// same things

// function sum(...num)
// {
//     let sum=0
//     for(let item of num)
//     {
//         sum+=item
//     }
//     console.log(sum);
// }
// sum(1,2,3,4,5)


//// q 1st ,2nd ,3rd rank student alag alag but aur sab student in singlr line

// function rank(first,second,third,...rest)
// {
//     console.log(`${first} is first`);
//     console.log(`${second} is second`);
//     console.log(`${third} is third`);
//     console.log(`${rest} is rest`);
// }
// rank("raju","mohan","sohan","ashu","umang","ranjan","aliya","dilbar")

//// q- find number is even or odd without using conditional......

// let num=29
// let arr=["even","odd"]
// console.log(arr[num%2]);

////-----------destructure of array

// let arr=[1,2,3,4,5,6,7]
// const[a,b,c,d,e,f,g]=arr
// console.log(arr);

/// now do destructure using rest operator
// let arr=[1,2,3,4,5,6,7]
// let[...something]=arr
// console.log(something);
// console.log(arr==something);

//// destructre of object

// let obj={
//     name:"ashu",
//     age:21,
//     city:"goa"
// }
// const{name,age,city}=obj  /// this part is destructure 

// console.log(name);
// console.log(age);
// console.log(city);

//// now destructure using rest operator


// let obj={
//     name:"ashu",
//     age:21,
//     city:"goa"
// }
// const{...something}=obj
// console.log(something);

//// practice question on rest operator

////1.

// function test(...nums) {
//   console.log(nums);
// }
// test(10, 20, 30);

////2.

// let arr = [1, 2, 3, 4];
// let [a, ...b] = arr;

// console.log(a);
// console.log(b);

////3.
// function test(...nums) {
//   console.log(typeof nums);
// }
// test(1, 2, 3);

// function test(a, b, ...rest) {
//   console.log(rest.length);
// }
// test(1, 2);


// let arr = [10, 20, 30, 40, 50];
// let [a, b, ...rest] = arr;

// console.log(rest);

// let arr=[1,2,3,4,5]
// console.log(typeof arr);

// function test(...nums) {
//   nums[0] = 100;
//   console.log(nums);
// }
// test(1, 2, 3);

// let arr = [1, 2, 3, 4, 5];
// let [...a] = arr;

// a.push(100);

// console.log(arr);
// console.log(a);

///--------spread operator-------
// let arr=[1,2,3,4,5,6,7]
// console.log(arr);
// console.log(...arr); //// spread all element from an array

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=[...arr1,...arr2,]
// console.log(arr3);

// let obj={
//     name:"ashu",
//     age:21
// }
// let obj1={
//     city:"goa",
//     roll :21
// }
// console.log({...obj,...obj1});

////shallow copy and deep copy----

/// shallow copy

/// first make copy normally

// let arr=[1,2,3,4,5,6,7]
// let copy=arr
// console.log(arr);
// console.log(copy);
// copy.push(101) /// when make copy normally and after that try to push element to copy automatically pushed to original array.
// console.log(arr);
// console.log(copy);

//// using spread operator make copy-----

// let arr=[1,2,3,4]
// let copy=[...arr]
// console.log(arr);
// console.log(copy);
// copy.push(101)  //// now when we use spreaad operator to make copy only copy part pushed 101 not in original array
// console.log(arr);
// console.log(copy);

// let arr=[1,2,3,[4,5,6]]
// let copy=[...arr]
// console.log(arr);
// console.log(copy);
// // copy.pop() //// this pop remove last array because this is nested array and index is 3 
// // console.log(arr);
// // console.log(copy);

// copy.push(99) /// here also work good because push used to add element at first so no nested at first but start no working when we try to push element in nesed element 
// console.log(arr);
// console.log(copy);

// copy[3].push(-5)
// console.log(arr); /// in orignal array -5 is also pushed so we can say shallow copy work only on normal array not on nested array
// console.log(copy);

////----------deep copy----------
////--------------JSON ON OBJECT---------------
// let car={
//     tyre:4,
//     brand:"byd",
//     colors:["black","white","pink","red","blue"]
// }
// let ret=JSON.stringify(car)
// let usabledata=JSON.parse(ret)
// console.log(car);
// console.log(ret);
// console.log(typeof car);
// console.log(typeof ret);
// console.log(usabledata);


//// JSON ON ARRAY
// let arr=[1,2,3,4,true,false,"ashu"]
// let ret=JSON.stringify(arr)
// let usabledata=JSON.parse(ret)
// console.log(arr);
// console.log(ret);
// console.log(typeof arr);
// console.log(typeof ret);
// console.log(usabledata);


//////---------------now deep copy---------

// let person1={
//     name:"ashu",
//     age:21,
//     language:["englsh","hindi"]
// }
// let str=JSON.stringify(person1)
// let person2=JSON.parse(str)
// person1.language.push("urdu")
// person2.language.push("java","python")
// console.log(person1);
// console.log(person2);

////---------deep copy by using  structuredclone

// let person1={
//     name:"ashu",
//     age:21,
//     language:["englsh","hindi"]
// }
// let person2=structuredClone(person1)
// person2.language.push("java")
// console.log(person1);
// console.log(person2);
// console.log();

//// object assisgement question-------


// let data=[
//   {"name": "John", "id": 123, "marks": 98},
//   {"name": "Baba", "id": 101, "marks": 23},
//   {"name": "yaga", "id": 200, "marks": 45},
//   {"name": "Wick", "id": 115, "marks": 75}
// ]

// function StudentRecords(data) {
//  let ans=[]
//  for(let item of data)
//  {
//   if(item.marks>50)
//   {
//     ans.push(item)
//   }
//  }
//  return ans
// }
// console.log(StudentRecords(data));


















