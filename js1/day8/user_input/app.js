let a = Number(prompt("enter number 1"))
let b = Number(prompt("enter number 2"))
let operation=prompt("enter operation : +, -, *, /")

if(isNaN(a) || isNaN(b))
{
    console.log("Invalid Input")
}
else
{
    switch(operation)
    {
        case "+":
            console.log(a + b)
            break

        case "-":
            console.log(a - b)
            break

        case "*":
            console.log(a * b)
            break

        case "/":
            console.log(a / b)
            break

        default:
            console.log("Invalid Operation")

    }
}

// let a=parseInt(prompt("enter number 1"))
// let b=parseInt(prompt("enter number 2"))


// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// let a=parseInt(prompt("enter number 1"))
// let b=parseInt(prompt("enter number 2"))
// let operation=prompt("enter operator :+,-,*,/")
// switch(operation)
// {
//     case "+"  :
//     console.log(a+b);
//     break

//     case "-"  :
//     console.log(a-b);
//     break

//     case "*"  :
//     console.log(a*b);
//     break

//     case "/"  :
//     console.log(a/b);
//     break
// }

// Check Even or Odd

// let n=parseInt(prompt('enter value of n'))
// if(n%2==0)
// {
// 	console.log(`${n} is even`);
// }else
// {
// 	console.log(`${n} is odd`);
// }

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