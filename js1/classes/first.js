// console.log("hello")
// // arithmeic opperator
// // 1.addition
// let sum = 10+2
// console.log(sum)

// // 2. substraction
// let diffrence=10-2
// console.log(diffrence)

// // 3. multiplcation
// let multiplication=10*2
// console.log(multiplication)

// // 4.division

// let division=21/3
// console.log(division)

// // 5. modulus
// // its give remainder and sign is (%)
// let modulus=21%2
// console.log(modulus)

// // how to check if a number is even or odd
// let num = 21%2
// if(num=0){
// console.log("even")
// }else{
//     console.log("odd")
// }
// // exponential
// let powerof2=2**2
// console.log(powerof2)

// // string templating
// // method 1

// let agentName="ashu"
// console.log("hi my name is agent",agentName)

// // method 2

// let agentName1='raghav'
// console.log(`Hi my name is Agent ${agentName1}`)

// // unary operators reffer as short hand just like shortcut
// // increment(++)
// let x=5
// x++;
// console.log(x)

// // post increment
// console.log(x++)

// // pre increment
// console.log(++x)

// // shardha didi tutorial

// let age =31
// console.log(age)
// console.log(typeof age)

// // object= collection of value and strore in (key:value) and try to use const to declare variables.
// const student={
//     fullName:"ashu",
//     age:22,
//     roll:11,
//     cgpa:8.9,
//     isPased:true,
// }
// console.log(student)    
// console.log(typeof student) 

// // to access particular key value we have 2 option to access
// // 1. object.key 2. object[key]
// console.log(student.age)
// console.log(student["roll"])

// // if we want to assign new value in object we can do by doing this

// student.roll=student.roll+1
//  console.log(student.roll)

// // or

// student["roll"]=student["roll"]+1
// console.log(student["roll"])

// // Q.1 create a const called "product" to store information shown in picture.

// const product={
//     items:"pen",
//     rating:5,
//     price:270,
//     colour:"black",
//     discount:5,
// }
// console.log(product)

// // 1.arithmeic operator
// {
//  let a=5
//  let b=2
//  console.log("a=",a, "& b=",b)
//  console.log("a+b=",a+b)//additon operator
//  console.log("a-b=",a-b)//substracton operator
//  console.log("a*b=",a*b)//multiplication operaor
//  console.log("a/b=",a/b)//division operatoe
//  console.log("a%b=",a%b) // modulus operator
//  console.log("a**b=",a**b) //exponentitation opertor
// }
// // unary operator
// // 1.increment(++)  2. decrement(--)
// {
// let c=5
// let d=2
// c++
// console.log(c)
// d--
// console.log(d)
// }
// // 2. assignment operator

// //1.(+=)
// {
//     let a=5
//     a+=4
//     console.log(a)
// }
// {
//     let a=5
//     a-=4
//     console.log(a)
// }
// {
//     let a=5
//     a*=4
//     console.log(a)
// }
// {
//     let a=5
//     a/=4
//     console.log(a)
// }
// {
//     let a=5
//     a%=4
//     console.log(a)
// }
// {
//     let a=5
//     a**=4
//     console.log(a)
// }
// // 3. comparison operator
// // equal to comperision operator(==), not equal to (!=)
// {
//     let a=4
//     let b=2
//     console.log(a==b)
//     console.log(a!=b)
// }
// {
//     let a=5 //here 5 is number
//     let b=("5" ) //but here 5 is string
//     console.log(a==b) // in this case output will be true because (==) operator only check value casually
//     console.log(a!=b)  // in this case output will be false because (!=) operator only check value casually
//         //    but if we want to check this this strictly we can use (===) and (!==) then only let b=("5") is treated as string
//     console.log(a===b)
//     console.log(a!==b)
// }
// // we have also <,<=,>,>=
// {
//     let a=3
//     let b=3
//     console.log(a<b)
//     console.log(a<=b)
//     console.log(a>b)
//     console.log(a>=b)
// }
// // 4.logical operator
// //  (i) logical and (&&)=in this operator both the expression should be true,then the output will be true f any expression is false then output will be false
// {
//     let a=5
//     let b=6    //(a>b)=true  and (a!=b)= true
//     console.log((a>b)&&(a!=b))
// }
// // (ii)logical or (||)= IN THIS OPERATOR ANY ONE CONDITION SHOULD BE TRUE.then the output will be true. 
// {
//     let a= 6
//     let b= 6
//     console.log((a!=b)||(a===b))
// }
// {
//     //(iii) logical not(!) in this we need only one expression if expression is true then output will be false if true hen output will be false simply it reurn opposite output.
//     let a= 6
//     let b= 6
//     con=(a!=b)
//     console.log(!(con))

// }
//        // conditional statement
//       // (1) if statement

// {
//     let age = 19
//     if(age>=18){
//         console.log("you can vote")
//     }
// }
// {
//     let age = 16
//     if(age<18){
//         console.log("you can't vote")
//     }
// }
// {
//     let mode="dark"
//     let colour;
    
//     if(mode==="dark"){
//         colour="black"
//     }
//     {
//         if(mode ==="light"){
//             colour="white"
//         }
//     }
//     console.log(colour)
// }
// {
//     let mode="light"
//     let colour;
    
//     if(mode==="dark"){
//         colour="black"
//     }
//     {
//         if(mode ==="light"){
//             colour="white"
//         }
//     }
// } 
// var a=3
// var b=2
// console.log(a%b);

// var a=2
// var b=3
// console.log(a**b);

// var age = 23
// age+=1
// console.log(age);

// var age = 23
// age-=1
// console.log(age);

// var age = 6
// age/=2
// console.log(age);

// var age = 6
// age*=2
// console.log(age);

// var age = 6
// age**=2
// console.log(age);
//  var a=6
//  a/=2
//  console.log(a);

//  var a=2
//  a*=2
//  console.log(a);

//    var a=3
//  a**=3
//   console.log(a);

//   var a=4
//  a%=3
//  console.log(a);

// var y=366
// if(y%6==0){
//     console.log("leap year");
    
// }else{
//     console.log("not leap year");
    
// }
 
 
//  var age =21
//  age++
//  console.log(age);
 
//   var age =21
//  ++age
//  console.log(age);
 
//  var age=21
//  console.log(age++);
//  console.log(age);
//   var age=21
// console.log(age--);
//  console.log(age);
//    var age=21
// console.log(--age);
//  console.log(age);

// comparision operator
//  var a=5
//  var b=4
//  console.log(a==b);
 
// var a=5
// var b=5
//  console.log(a==b);

//  var a="5"
// var b=5
//  console.log(a==b);

//  var a="5"
// var b=5
//  console.log(a===b);
  
// not equal to

// var a=5
// var b=5
// console.log(a!=b);

// var a=5
// var b=4
// console.log(a!=b);

// var a="5"
// var b=5
// console.log(a!=b);

// var a="5"
// var b=5
// console.log(a!==b);
// var a=8
// var b=2
// var ep=(a>b)
// var ep1=(b<a)
// console.log(ep && ep1);

// var a=8
// var b=2

// console.log(a>b && b<a);

//  console.log(1 === true)
//  console.log(0 === true)
// console.log(0 === false)
//  console.log(23 === true)

// var a=2
// var b=1
// console.log(!a>b);
// var a=2
// var b=1
// console.log(!a<b);

// var age =18
// if(age>17){
//     console.log("allowed");
  
// }

// var age =18
// if(age<17){
//     console.log("allowed");
  
// }

// if(true){
//     console.log("hello jii");
    
// }
// if(!true){
//     console.log("hello jii");
    
// }
// if(false){
//     console.log("hello jii"); 
// }

// if(!false){
//     console.log("hello jii");
    
// }

// var age =19
// if(age>=18){
//     console.log("can vote");
    
// }else{
//     console.log("can't vote");
    
// }

// var age =18
// if(age>=18){
//     console.log("can vote");
    
// }else{
//     console.log("can't vote");
    
// }
// var age =17
// if(age>=18){
//     console.log("can vote");
    
// }else{
//     console.log("can't vote");
    
// }

// var marks = 82
// if(marks<0 || marks>100){
//     console.log("invalid input");
// }else if(marks>=90){
//     console.log("a")
// }else if(marks>=80){
//     console.log("b")
// }else if(marks>=70){
//     console.log("c")
// }else if(marks>=60){
//     console.log("d")
// }else{
//     console.log("fail");
    
// }
// var n=8
// if(n>0 && n%2==0){
//     console.log("positive even");
    
// }else if(n<0 && n%2!=0){
//     console.log("positive odd");
    
// }else if(n<0 && n%2==0){
//     console.log("negative even");
    
// }else if(n>0 && n%2!=0){
//     console.log("negative odd");
    
// }else{
//     console.log("zero");
    
// }

// var n=0
// if(n>0){
//     if(n%2==0){
//         console.log("positive even");   
//     }else{
//         console.log("positive odd");  
//     }
// }else if(n<0){
//      if(n%2==0){
//         console.log("negative even");  
//      }else{
//         console.log("negative odd");   
//      }
// }else{
//     console.log("zero");
// }

// var a=10
// var b=36

// if(a>b){
//   if(a%5==0){
//     console.log("a is greter and dvisible by 5");  
//   }else{
//     console.log("a is greter but not divisible by 5"); 
//   }
// }else if(b>a){
//      if(b%5==0){
//         console.log("b is greter and divisible by 5");
        
//      }else{
//         console.log("b is greter but not divisible by 5");
        
//      }
// }else{
//     console.log('equal')
// }

// var id="justaashutosh"
// var password="@ashu999"
// if(id=="justaashutosh"){
//     if(password=="@ashu999"){
//         console.log("user logged in"); 
//     }else{
//         console.log("invalid password");  
//     }
// }else{
//     console.log("invalid credential");
// }




// var username = "admin"
// var password = "admin123"

// if(username == "admin")
// {
//     if(password == "admin123")
//     {
//         console.log("User Logged In")
//     }
//     else
//     {
//         console.log("Invalid credential")
//     }
// }
// else
// {
//     console.log("Invalid credential")
// }

// salary=5000
// if(salary>=50000){
//    if(salary>=75000){
//     console.log("boss"); 
//    }else{
//     console.log("senior");
//    }
// }else{
//     console.log("junior");
    
// }

// ternary operator

// var n=5
// n%2==0? console.log("even"):console.log("odd");

// var age =15
// age>=65?console.log("senior citizen"):
// age>=20 && age<=64?console.log("adult"):
// (age>=13 && age <=19?console.log("teenager"):
// console.log("child")
// )

//true && console.log("ashu");
// false && console.log("ashu");

// var age =34
// age<3 && console.log("ashu");

// var month = 29

// switch(month)
// {
//     case 1 :
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//  console.log("31")
//  break
//     case 4 :
//     case 6:
//     case 9:
//     case 11:
//  console.log("30");
//  break
//    case 2:
//     console.log(28);
//     break
//     default:
//     console.log("invalid input");
// }

// var n=8
// var start=1
// While(start<=10)
// {
//   console.log(n + "x"+ start+ "="+ (n*start))
//   start++
// }

// var apple=n
// var people=m
// var n=19
// var m=2
// if(n%m==0){
// console.log("1");
// }else{
//    console.log("0");
   
// }

// var n=8
// var start=1
// while(start<=10){
//   console.log(n+"x"+start+"="+n*start)
//   start++
// }
	// 	var start=2
	// var sum=0
	// while(start<=n)
   // {
   //    if(start%2==0)
	// 	{
	// 		sum+=start
	// 	}
	// 	start++
   // }
//  var sum = 0 
// var start = 2 


//     while(start <= n) 

//     { 

       

//         if(start % 2 == 0) 

//         { 

//             sum += start 

//         } 

//         start++ 

//     }



// let fact = 1;

// for (let i = 1; i <= n; i++) {
//     fact = fact * i;
// }

// console.log(fact);
// const naam="ashutosh kr singh"
// const age=21
// console.log(naam);
// console.log(age);

// console.log(count);
// var count=12
// console.log(null + 1); 
// console.log("5" + 3); 
// console.log("5" - 3); 
// console.log(true + false);

// console.log(typeof []);
// console.log(typeof null);
// console.log(typeof 123n);

// console.log(Boolean(0)); // falsy
// console.log(Boolean("0")); // truthy
// console.log(Boolean([])); // truthy
// console.log(Boolean(undefined));// falsy

// let n =32
// if(n%2==0)
// {
// 	console.log("even");
// }else
// {
// 	console.log("odd");
// }

// var num=34
// if(num%2==0)
// {
// 	console.log("even");
// }else
// {
// 	console.log("odd");
// }

// let x=9
// let y=8
// if(x>0 && y>0)
// {
// 	console.log(1);	
// }else if(x>0 && y<0)
// {
// 	console.log(2);	
// }else if(x<0 && y<0)
// {
// 	console.log(3);
// }else
// {
// 	console.log(4);
// }

// nested condition

// let n=-9

// if(n>0)
// {
// 	if(n%2==0)
// 	{
//         console.log("positive, even");
// 	}
// 	else
// 	{
//         console.log("positive, odd");
// 	}
// }
// else if(n<0)
// {
//     if(n%2==0)
// 	{
// 		console.log("negative , even");
// 	}
// 	else
// 	{
// 		console.log("negative , odd");
		
// 	}
// }	
// else
// {
// 	console.log("zero");
// }
// let a=0
// let b=0
// if(a>b)
// {
// 	if(a%5==0)
// 	{
// 		console.log("a is greter and divisible by 5");
// 	}
// 	else
// 	{
// 		console.log("a is greter but not divisible by 5");
// 	}
// }
// else if(b>a)
// {
// 		if(b%5==0)
// 	{
// 		console.log("b is greter and divisible by 5");
// 	}
// 	else
// 	{
// 		console.log("b is greter but not divisible by 5");
// 	}
// }
// else
// {
// 	console.log("equal");
// }

// let username="admin"
// let password="admin123"

// if(username=="admin")
// {
// 	if(password=="admin123")
// 	{
// 		console.log("user logged in");
// 	}
// 	else
// 	{
// 		console.log("invalid credential");
// 	}
// }
// else
// {
// 	console.log("invalid credential");
// }

// let age=2
// age>=18? console.log("can vote") : console.log("can't vote")

// let n=32
//  n%2==0? console.log("even") : console.log("odd")

// age=3

// age>=65?console.log("senior citizen"):
// age>=20 && age<=64?console.log("adult"):
// age>=13 && age<=19?console.log("teenager"):console.log("child");

// let n = 0
// n>0 && n%2==0? console.log("positive, even"):
// n>0 && n%2!=0?console.log("positive,odd"):
// n<0 && n%2==0?console.log("negative,even"):
// n<0 && n%2!=0?console.log("negative, odd"):console.log("zero")
// n=-1
// n>= -9 && n<=9?console.log("single digit"):console.log("multi  digit");


// let a=99
// let b=11
// a>b?console.log("a is greter"):console.log("b is greter");

// let age=43
// age>=33 && console.log("adult");

// let age=4
// age>=43 && console.log("adult");

// let age=18
// switch(age)
// {
// 	case 18:
// 		console.log("adult");
// 	case 65:
// 		console.log("senior citizen");	
// }

// let num=45
// switch (num%2==0)
// {
// 	case true:
// 		console.log("num is even");
// 		break;
// 	case false:
// 		console.log("num is odd");	
// 		break;	
// }

// var month =9
// switch (month)
// {
// 	case 1:
//     case 3:
// 	case 5:
// 	case 7:
// 	case 8:
// 	case 10:
// 	case 12:
// 		console.log('31 days');
// 		break;
// 	case 4:
// 	case 6:
// 	case 9:
// 	case 11:
// 		console.log("30 days");
// 		break;
// 	case 2:
// 		console.log("28 days");
// 		break;
// 	default:
// 		console.log("invalid month");			
// }

//loop

// var count=1
// while(count<=100)
// {
// 	console.log(count);
// 	count++
// }

// var count=100
// while(count>=1)
// {
// 	console.log(count);
// 	count--
// }

// let n=500
// let start=1
// while(start<=n)
// {
// 	console.log("ashu love rishu");
// 	start++
// }

// let n=8
// let start=1
// while(start<=10)
// {
// 	console.log(n+ " x " + start + " = "+ n*start)
// 	start++
// }

// var name =["ashu","amit","ramesh","sagar"]
// console.log(name);

// let arr =["apple","mango","papaya","grapes"];
//  let n=arr.length
// for ( let i =0; i<n; i++){
// 	console.log(arr[i]);
// }

// let n =5
// while(n>0)
// {
// 	console.log('ASHU');
// 	n--
// }

// var input = 8
// var start = 1
// while(start<=10)
// {
// 	console.log(input + "x" + start + "=" + input*start);
// 	start++
// }

// var count=10
// var start=1
// while(start<=count)
// {
// 	console.log(start);
// 	start++
// }

//without using extra variable

// var start=1
// while(start<=10)
// {
// 	console.log(start);
// 	start++
// }

// function sayhii(name)
// {
// 	console.log(`HELLO ${name}`);
// }
// sayhii('ASHU')

// function fullname(first , last )
// {
// 	console.log(first , last );
// }
// fullname("ashu", "singh")

// function fullname(firstname,lastname)
// {
// 	console.log(firstname,lastname);
// }
// fullname()
 
// function fullname(firstname="user", lastname="name")
// {
// 	console.log(firstname,lastname);
// }
// fullname()

// function fullname(firstname,lastname)
// {
// 	console.log(firstname,lastname);
// }
// fullname("singh")

// function fullname(firstname="ashu",lastname)
//  {
//  	console.log(firstname,lastname);
//  }
//  fullname( "singh")

// function fullname(firstname,lastname="singh")
// {
// 	console.log(firstname,lastname);
// }
// fullname("ashu")

// Check if a number is positive or negative
// // let number = "n"
// let n = 11

// if(n<0)
// {
// 	console.log("num is negative");
// }else if(n>0)
// {
// 	console.log("num is positive");
// }else
// {
// 	console.log("num is zero");
// }

// Check if a number is even or odd
// let number = n
// let n=21
// if(n%2==0)
// {
// 	console.log(`${n} is even`);
// }else
// {
// 	console.log(`${n} is odd`);
// }

//Check if a number is greater than 10

// let n = 10
// if(n>10)
// {
// 	console.log(`${n} is greter than 10`);
// }else if(n<10)
// {
// 	console.log(`${n} is smaller than 10`);
// }else
// {
// 	console.log(`${n} is equal to 10`);
// }

// //Check if two numbers are equal
// let a= 22
// let b = 21
// if(a===b)
// {
// 	console.log("both are equal");
// }else
// {
// 	console.log(" both are not equal");
// }

//Check if a person is eligible to vote (age ≥ 18)
// let age = 1
// if(age>=18)
// {
// 	console.log("person is eligible to vote");
// }else
// {
// 	console.log("person is not eligible to vote");
// }

//Check if a character is a vowel or consonant

// let characters = "a"

// let vowel = "aeiouAEIOU";

// if(vowel.includes(characters))
// {
// 	console.log(`${characters} is vowel`);
// }else
// {
// 	console.log(`${characters} is consonant`);
// }


// let character = "H";

// let vowels = "aeiouAEIOU";

// if (vowels.includes(character)) {
//     console.log(`${character} is vowel`);
// } else {
//     console.log(`${character} is consonant`);
// }

//Check if a number is divisible by 5
// let number = 29
// if(number % 5===0)
// {
// 	console.log(`${number} is divisible by 5`);
// }else
// {
// 	console.log(`${number} is not divisible by 5`);
// }

//Check if temperature is hot (>30) or normal

// let temp = 3
// if(temp>30)
// {
// 	console.log(`${temp} is hot`);
// }else
// {
// 	console.log(`${temp} is normal`);
// }

// Check if a number is zero or non-zero

// let number = 99
// if (number===0)
// {
// 	console.log("number is zero");	
// }else
// {
// 	console.log("number is non zero");
// }

// find greater of two numbers

// let a=8
// let b=9
// if(a>b)
// {
// 	console.log(`${a} is greter than ${b}`);
// }else
// {
// 	console.log(`${b} is greter than ${a}`);
// }

// let str = ""
// if(str =="" || '' || ``)
// {
// 	console.log("string is empty");
// }else 
// {
// 	console.log("string is not empty");
// }

// let time =19
// if(time>=5 && time<=16)
// {
// 	console.log("good morning");
// }else
// {
// 	console.log("good evening");
// }

//Find largest of 3 numbers
// let a =7
// let b =9
// let c =9
// if(a>=b && a>=c)
// {
// 	console.log("a is greter");
// }else if(b>=a && b>=c)
// {
// 	console.log("b is greter");
// }else
// {
// 	console.log("c is greter")	
// }

// Check grade based on marks

// 90+ → A

// 75+ → B

// 50+ → C

// else → Fail

// let marks = 90
// if(marks>90)
// {
// 	console.log("A");
// }else if(marks>75)
// {
// 	console.log("B");
// }else if (marks>50)
// {
// 	console.log("C");
// }else
// {
// 	console.log("fail");
// }

// let year =1900

// if(year%4==0 && year %100 !== 0||(year%400==0))
// {
// 	console.log(`${year} is leap year`)	
// }else 
// {
// 	console.log(`${year} is not leap year`);
// }

// let day = 7

// if (day==1)
// {
// 	console.log('monday');
// }else if (day ==2)
// {
// 	console.log("tuesday");
// }else if (day ==3)
// {
// 	console.log("wednesday");
// }else if (day ==4)
// {
// 	console.log("thrusday");
// }else if (day ==5)
// {
// 	console.log("friday");
// }else if (day ==6)
// {
// 	console.log("saturday");
// }else if (day ==7)
// {
// 	console.log("sunday");
// }else
// {
// 	console.log("invalid data");
// }

// let m = 'january'

// if(m=='january' || m=='march' || m=='may' || m== 'july' || m== 'august' || m=='october' || m== 'december')
// {
// 	console.log("31 day");
// }else if(m== 'april' || m== 'june' || m=="september" || m== "november")
// {
// 	console.log("30 day");	
// }else if (m== "february")
// {
// 	console.log("28 or 29 day");
// }else
// {
// 	console.log("invalid month name");
// }

// TERNARY OPERATOR
// find number is even or odd by ternary operator

// let num=22
// num%2==0 ? console.log("even"):console.log("odd");

// find number is positive or negative

// let num=-7
// num <0 ? console.log("negative"): console.log("positive");

// find eligible to vote or not

// let age = 18
// age>=18 ? console.log("can vote"): console.log("can't vote");

// find greter of two number 
// let a=4
// let b=1
// a>b ? console.log("a is greter"):console.log("b is greter");

// check if student is pass of fail 

// let marks = 36
// marks>=33 ? console.log("pass"):console.log("fail");

// let a=4
// let b=8
// let c=8
// a>=b && a>=c ? console.log("a is greter"):
// b>=a && b>=c ? console.log("b is greter"):
// console.log("c is greter");

// given a number n find all possibilities either number is positive odd,positive even,negative odd,negative even, or zero

// let n= 99
// n>0 && n%2==0 ? console.log("positive even"):
// n>0 && n%2 !=0?console.log("positive odd"):
// n<0 && n%2==0?console.log("negative even"):
// n<0 && n%2 !=0?console.log("negative odd"): console.log("zero");

// same question by nested if else 

// let n=0

// if(n>0)
// {
// 	if(n%2==0)
// 	{
// 		console.log("positive even");	
// 	}else
// 	{
// 		console.log("positive odd");	
// 	}
// }else if(n<0)
// {
// 	if(n%2==0)
// 	{
// 		console.log("negative even");
// 	}else
// 	{
// 		console.log("negative odd");
// 	}
// }else
// {
// 	console.log("zero");
// }

// let a=0
// let b=0
// if(a>b)
// {
// 	if(a%5==0)
// 	{
// 		console.log("a is greter and divisible by 5");
// 	}else
// 	{
// 		console.log("a is greter but not divisible by 5");
// 	}
// }else if (b>a)
// 	{
// 	if(b%5==0)
// 	{
// 		console.log("b is greter and divisible by 5");
// 	}else
// 	{
// 		console.log("b is greter but not divisible by 5");
// 	}
// }else
// {
// 	console.log("both are equal");
// }


// let username="admin"
// let password="admin123"

// if(username=="admin")
// {
// 	if(password=="admin123")
// 	{
// 		console.log("user logged in");
// 	}else
// 	{
// 		console.log("invalid password");
// 	}
// }else
// {
// 	console.log("invalid username");
// }

// switch case

// var age = 18

// switch(age)
// {
// 	case(18):
// 	console.log("teenager");
// 	break

// 	case(45):
// 	console.log("adult");
// 	break

// 	case(65):
// 	console.log("senior citizen");
// 	break

// 	default:
// 		console.log('invalid entry');	
// }

// another way and perfect way to do this thing

// var age = 80
// switch(true)
// {
// 	case(age>=0 && age<=17):
// 	console.log("teenager");
// 	break
// 	case(age>=18 && age<=59):
// 	console.log("adult");
// 	break
// 	case(age>=60):
// 	console.log("senior citizen");
// 	break
// 	default:
// 		console.log("invalid input");	
// }

// let num=23
// switch(num%2==0)
// {
// 	case(true):
// 	console.log("num is even");
// 	break
// 	case(false):
// 	console.log("num is odd");	
// 	break
// }

// let mark= 107

// switch(true)
// {
// 	case(mark>=90 && mark<=100):
// 	console.log("A+");
// 	break

// 	case(mark>=80 && mark<90):
// 	console.log("B+");
// 	break

// 	case(mark>=70 && mark<80):
// 	console.log("C+");
// 	break

// 	case(mark>=60 && mark<70):
// 	console.log("D+");
// 	break
	
// 	case(mark>=50 && mark<60):
// 	console.log("E+");
// 	break

// 	case( mark<50):
// 	console.log("fail");
// 	break
	
// 	default:
// 	console.log("invalid marks");
// }

// var month = 2
// switch(month)
// {
// 	case 1:
// 	case 3:
// 	case 5:
// 	case 7:
// 	case 8:
// 	case 10:
// 	case 12:
// 	console.log("month have 31 days");
// 	break

// 	case 4:
// 	case 6:
// 	case 9:
// 	case 11:
// 	console.log("month have 30 days");
// 	break

// 	case 2:
// 	console.log("month have eiher 28 days or 29 days");
// 	break

// 	default:
// 	console.log("invalid month");
// }

// let n1 =20
// let n2 = 30
// let operation = "multiply"

// switch(operation)
// {
// 	case "plus" :
// 	console.log(n1+n2);
// 	break

// 	case "minus" :
// 	console.log(n1-n2);
// 	break

// 	case "divide":
// 	console.log(n1/n2);
// 	break

// 	case "multiply":
// 	console.log(n1*n2);
// 	break
// 	default:
// 	console.log("invalid input");		
// }

// loop
// while loop

// var count = 1
// while(count<=10)
// {
//    console.log("ashu");
//    count++
// }

// // print all number from 1 to n ,where n=999
// let start=1
// let n = 999
// while(start<=n)
// {
// 	console.log(start);
// 	start++
// }

// print all number from n to 1, where n =999

// let n=999
// while(n>=1)
// {
// 	console.log(n);
// 	n--
// }

// print eight table in formate 8x1=8

// let num=8
// let start=1
// while(start<=10)
// {
// 	console.log(num + "x" + start + "=" + num*start);
// 	start++
// }

// by using for loop
// let num=8
// for(start=1;start<=10;start++)
// {
// 	console.log(num + "x" + start + "=" + num*start);

// }

// sum of all even number from 1 to n , where n= 12
// let n =12
// let start = 2
// let sum = 0
// while(start<=n)
// {
// 	if(start%2==0)
// 	{
// 		sum+=start
// 	}
// 	start++
// }
// console.log(sum);

// let n= 12
// let start = 2
// let sum = 0
// while(start<=n)
// {
//  sum+=start
//  start+=2
// }
// console.log(sum);

// by using for loop

// let n=12
// let sum=0
// for(start=2;start<=n;start+=2)
// {
//  sum+=start
// }
// console.log(sum);

// factorial of 5
// let n=5
// let start=2
// let factorial=1
// while(start<=n)
// {
// 	factorial*=start //factorial=factorial * start
// 	start++
// }
// console.log(factorial);

// by using for loop
// let n = 5
// let factorial=1
// for(start=1;start<=n;start++)
// {
// 	factorial*=start
// }
// console.log(factorial);

//power of two number by using while loop
// let a=5
// let b=4
// let ans=1
// let start=1
// while(start<=b)
// {
// 	ans*=a
// 	start++
// }
// console.log(ans);

// same by using for loop
// let a=5
// let b=4
// let ans=1
// for(start=1;start<=b;start++)
// {
// 	ans*=a
// }
// console.log(ans);

// let n= 12345678
// let sum=0
// while(n>0)
// {
// 	let ld=n%10
// 	sum+=ld
// 	n=Math.floor(n/10)
// }
// console.log(sum);

// user input
// let a=parseInt(prompt("enter number 1"))
// let b=parseInt(prompt("enter number 2"))
// console.log(a+b)

// function 

// function sayHi()
// {
// 	console.log("hello ashu");
// }
// sayHi()

// function sayHi(name)
// {
// 	console.log(`hello ${name}`);
// }
// sayHi('ashu')
// sayHi('amit')
// sayHi('subham')

// function sayHi(name)
// {
// 	console.log(`welcome ${name}`)	
// }
// sayHi()


// function sayHi(name="user")
// {
// 	console.log(`welcome ${name}`)	
// }
// sayHi()

// function sum(a,b)
// {
// 	console.log(a+b);	
// }
// sum(2,4)

// function fullName(firstname,lastname)
// {
// 	console.log(`welcome ${firstname} ${lastname}`);
// }
// fullName()

// function fullName(firstname,lastname)
// {
// 	console.log(`welcome ${firstname} ${lastname}`);
// }
// fullName("Ashutosh","singh")

// function fullName(firstname,lastname)
// {
// 	console.log(`welcome ${firstname} ${lastname}`);
// }
// fullName("ashu")

// function fullName(firstname,lastname="singh")
// {
// 	console.log(`welcome ${firstname} ${lastname}`);
// }
// fullName('Ashu')

// function fullName(firstname,lastname="singh")
// {
// 	console.log(`welcome ${firstname} ${lastname}`);
// }
// fullName()

// function sum(a,b)
// {
// 	parseInt(prompt("enter value of a"))
// 	parseInt(prompt("enter value of b"))
// }
// console.log(a+b);


//arrays

// let arr=[1, "qwerty", true, undefined, null, function(){}, []]
// console.log (arr[0])
// console.log (arr[1])
// console.log (arr[2])
// console.log (arr[3])
// console.log (arr[4])
// console.log (arr[5]())
// console.log (arr[6])
// console.log(arr.length);
// console.log (arr[(arr.length-5)])



// let arr1=[ function(){console.log("ASHU");return "SINGH"}]

// console.log (arr1[0]())


// let arr=[1,2,3,4,5,6]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

//same things using loop
// let arr=[1,2,3,4,5,6]
// let i=0
// while(i<6)
// {
// 	console.log(arr[i]);
// 	i++	
// }

// let arr=[1,2,3,4,5,6,7,8]
// let i=0
// while(i<arr.length)
// {
// 	console.log(arr[i]);
// 	i++
// }


// let arr=[1,2,3,4,5,6,7,8]
// let i=arr.length-1
// while(i>=0)
// {
// 	console.log(arr[i]);
// 	i--
// }

// let arr=[1,2,3,4,5,6]
// for(i=0;i<=arr.length-1;i++)
// {
// 	console.log(arr[i]);
// }

// let arr=[1,2,3,4,5,6,77,76,76,22]
// for(let item of arr)
// {
// 	console.log(item);
// }

// let arr=[1,2,3,4]
// arr.push(22,88)
// console.log(arr);



// let arr=[1,2,3,4]
// let newlen=arr.push(22,88)
// console.log(arr);
// console.log(newlen);


//pop method

// let arr=[1,2,3,4]
// arr.pop()
// console.log(arr);

// let arr=[1,2,3,4]
// let deletedarr=arr.pop()
// console.log(arr);
// console.log(deletedarr); 

//unshift

// let arr=[1,2,3,4,5,6,7]
// arr.unshift(0)
// console.log(arr);

// let arr=[1,2,3,4,5,6,7]
// let newarr=arr.unshift(0)
// console.log(arr);
// console.log(newarr);

// let arr=[1,2,3,4,5,6,7]
// let newarr=arr.unshift(0,-1,-2,-3,-4)
// console.log(arr);
// console.log(newarr);


// let arr=[1,2,3,4,5,6,7]
// arr.shift()
// console.log(arr);

// let arr=[1,2,3,4,5,6,7]
// let newarr=arr.shift()
// console.log(arr);
// console.log(newarr);

// let arr = [1,2,3,4]
// let arrinc=arr.includes(8)
// console.log(arr);
// console.log(arrinc);

// let arr = [1,2,3,4]
// let arrinc=arr.includes(3)
// console.log(arr);
// console.log(arrinc);


// let arr =["my","name","is","ashu"]
// arr.join("=>")
// console.log(arr);

/*
let arr =["my","name","is","ashu"]
let arrn=arr.join("=>")
console.log(arr);
console.log(arrn);
*/
// let arr =["my","name","is","ashu"]
// let arrn=arr.join(" ")
// console.log(arr);
// console.log(arrn);

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=arr1.concat(arr2)

// console.log(arr3);

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=arr1.concat(arr2,7,8,9)

// console.log(arr3);

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=arr1.concat(arr2,7,8,9)

// console.log(arr3);
// console.log(arr3.length);

// let arr=[1,2,3,4,5,6,7]
// let newarr=arr.indexOf(7)
// console.log(arr);
// console.log(newarr);

// let arr=[1,2,7,3,4,5,6,7]
// let newarr=arr.indexOf(7)
// console.log(arr);
// console.log(newarr);


// let arr=[1,2,3,4,5,6,7]
// let newarr=arr.indexOf(99)
// console.log(arr);
// console.log(newarr);

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let ret=arr.slice(5)
// console.log(arr);
// console.log(ret);


// let arr=[1,2,3,4,5,6,7,8,9,10]
// let ret=arr.slice(5,7)
// console.log(arr);
// console.log(ret);

// let arr=[1,2,3,4,5,6,]
// let ret=arr.slice(-5)
// console.log(arr);
// console.log(ret);


// let arr=[1,2,3,4,5,6,]
// let ret=arr.slice(-4,-1)
// console.log(arr);
// console.log(ret);

// let arr=[1,2,3,4,5,6,]
// let ret=arr.slice(-1)
// console.log(arr);
// console.log(ret);
 

// let arr=[1,2,3,4,5,6]
// let deletedelement=arr.splice(3)
// console.log(arr);
// console.log(deletedelement);

// let arr=[11,21,31,41,51,61]
// let deletedelement=arr.splice(3)
// console.log(arr);
// console.log(deletedelement);

// let arr=[11,21,31,41,51,61,71,81,91]
// let deletedelement=arr.splice(3,5)
// console.log(arr);
// console.log(deletedelement);
// let num=123
// let sum=0
// while(num>0)
// {
//   let digit=num%10
//   sum=sum+digit*digit
//   num=Math.floor(num/10)
// }
// return sum

//Q1. Check Even or Odd


// let n=parseInt(prompt('enter value of n'))  //(using user input run on console only)


// let n=20  //(this is normal code)
// if(n%2==0)
// {
// 	console.log(`${n} is even`);
// }else
// {
// 	console.log(`${n} is odd`);
// }

// Q2. Positive, Negative ya Zero

// let n=parseInt(prompt("enter value of n"))
// if(n<0)
// {
// 	console.log(`${n} is negative number`);
// }
// else if(n>0)
// {
// console.log(`${n} is positive number`);
// }
// else if(n===0)
// {
// 	console.log(`${n} = zero `);
// }else
// {
// 	console.log(`${n} is not a number`);	
// }


// let n = 0

// if(n<0)
// {
// 	console.log(`${n} is negative number`);
// }
// else if(n>0)
// {
// console.log(`${n} is positive number`);
// }
// else if(n===0)
// {
// 	console.log(`${n} = zero `);
// }else
// {
// 	console.log(`${n} is not a number`);	
// }

// let n=10
// let start=1
// while(start<=n)
// {
//     console.log(start*start*start);
//     start++
// }


