let n = 2;

if (n > 0) {
  if (n % 2 == 0) {
    console.log("Positive, Even");
  } else {
    console.log("Positive, Odd");
  }
} else if (n < 0) {
  if (n % 2 == 0) {
    console.log("Negative, Even");
  } else {
    console.log("Negative, Odd");
  }
} else {
  console.log("Zero");
}


// q
var a=10
var b=36
if(a===b){
    console.log("equal")
}
else if(a>b){
    if(a%5==0){
        console.log("a is divisible by 5")
    }else{
        console.log("a not divisible by 5")
    }
}
else{
    if(b%5==0){
        console.log("b is divisible by 5")
    }else{
        console.log("b not divisible by 5")
    }
}


// question
let un="admin";
let pw = "admin123";

if (un == "admin") {
  if (pw == "admin123") {
    console.log("User Logged in")
  } else {
    console.log("Invalid password")
  }
} else {
  console.log("Invalid credentials")
}


let salary = 50000;

if (salary >= 50000) {
  if (salary >= 75000) {
    console.log("Boss")
  } else {
    console.log("Senior")
  }
} else {
  console.log("Junior")
}