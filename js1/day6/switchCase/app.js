var month=11
switch(month)
{
case 1:
    console.log(31);
    break;
case 2:
    console.log(28);
    break;
case 3:
    console.log(31);
    break;
case 4:
    console.log(30);
    break;
case 5:
    console.log(31);
    break;
case 6:
    console.log(30);
    break;
case 7:
    console.log(31);
    break;
case 8:
    console.log(31);
    break;
    
case 9:
    console.log(30);
    break;

case 10:
    console.log(31);
    break;

case 11:
    console.log(30);
    break;
case 12:
    console.log(31);
    break;
default:
    console.log("invalid input");
    
}


var month =1
switch(month)
{
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
 console.log(31);
    break
    case 4:
    case 6:  
    case 9:
    case 11:
 console.log(30);
 break
  case 2:
  console.log(28);
    break
    default:
  console.log("invalid input");
             
}

var m =99
switch(true){
    case m>=90 && m<=100:
        console.log('A');
        break
    case m>=80 && m<90:
        console.log("b");
        break
    case m>=70 && m<80:
        console.log("c");
        break  
         case m>=60 && m<70:
        console.log("d");
        break   
    case m<0 || m>100:
    console.log("invalid input");
     default:
        console.log("fail");
 
    
}
var n1=2
var n2=1
var operation= "+"

switch(operation)
{
   case "+":
    console.log(n1+n2);
    break
   case "-":
    console.log(n1-n2);
    break
   case "/":
    console.log(n1/n2);
    break
   case "*":
    console.log(n1*n2);
    break
    default :
    console.log("invalid");
    
}
