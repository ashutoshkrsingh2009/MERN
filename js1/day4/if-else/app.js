var marks=90
if(marks<0 || marks>100){
    console.log("invalid marks"); 
}
else if(marks>=90){
    console.log("A")
}else if(marks>=80){
    console.log("B")
}else if(marks>=70){
    console.log("C");
    
}else if(marks>=60){
    console.log("D");
    
}else{
    console.log("fail");
    
}

var marks = -900
if(marks < 0 || marks > 100)
{
    console.log("Invalid Input")
}
else if(marks < 60)
{
    console.log("Fail")
}
else if(marks < 70)
{
    console.log("D")
}
else if(marks < 80)
{
    console.log("C")
}
else if(marks < 90)
{
    console.log("B")
}
else if(marks < 100)
{
    console.log("A")
}

//Four friends are in a mystery room and they aim to get out of the mystery room by cracking the final trail. The mystery room is divided into four chambers and each chamber will have two boxes storing balls. Now if both the boxes have blue balls, it must belong to chamber 1. Similarly if the first box has red balls and second box has blue balls, they must belong to chamber 2. If both the boxes have red balls, they must belong to chamber 3. Finally if the first box has blue balls and second box has red balls, it must belong to chamber 4.

//You are given number of balls in each box and if the number has a negative sign it means the balls are red else the balls are blue if the sign is positive. Determine the chamber the two boxes belong to given the number and type of balls in each box.

//Note: Assume there will always be non-zero number of balls in each box.

var x= 10
var y= -6

if(x>0 && y>0){
    console.log(1);
    
}else if(x<0 && y>0){
    console.log(2);
    
}else if(x<0 && y<0){
    console.log(3);
    
}else{
    console.log(4);
    
}

//Given the 3 sides of a triangle, find out whether it is acute-angled, right-angled, or obtuse-angled.

//You need to output 1 for acute, 2 for right-angled, and 3 for an obtuse-angled triangle. You can assume that the input values always form a triangle and are valid integers.

//Note 3 side as a,b,c and largest side is c

//A triangle is acute-angled, if twice the square of the largest side is less than the sum of squares of all the sides.

//A triangle is obtuse-angled, if twice the square of its largest side is greater than the sum of squares of all the sides.

//A triangle is right-angled, if twice the square of its largest side is exactly equal to the sum of squares of all the sides.

var a=1
var b=2
var c=3

var d= Math.max(a,b,c)
if(2*(d**d)<(a**a)+(b**b)+(c**c)){
    console.log(1);
    
}else if(2*(d**d)>(a**a)+(b**b)+(c**c)){
    console.log(3);
}else{
    console.log(2);
    
}
//Given an integer n. Your task is to write a program to use switch case as follows :

//if the input number is 28, print i am young.
//else print i am not young.

//Last Digit Even or odd
var n=26
if(n%2==0){
    console.log("last digit is even");  
}else{
    console.log("last digit is odd");
}

//Number Comparison
var n=6
if(n>1){
    console.log("you entered more");
    
}else{
    console.log("you entered less");
    
}
//Age Condition Check
var n=11
if(n==28){
    console.log("i am young");
}else{
    console.log("i am not young");  
}
//Number Importance Classification
var n= 33
if(n<30){
    console.log("less imporant"); 
}else{
    console.log("more important");
}
//Divisibility Check
var n=30
if(n%6==0){
    console.log("divisible"); 
}else{
    console.log("not dvisible");
}
//Student Grade Classification
var marks = 88
if(marks>90){
    console.log("Excellent");
}else if(marks>80){
    console.log("Good");
    
}else if(marks>70){
    console.log( "Fair");
    
}else if(marks>60){
    console.log("Meets Expectations");
    
}else{
    console.log( "Below Expectations");
}

//Verify Cube
var a=1
var b=2
lhs=(a+b)**3
rhs=(a**3)+(b**3)+(3*(a**2)*b)+(3*a*(b**2))
console.log(lhs && rhs);
if(lhs==rhs){
    console.log("VERIFIED");
    
}else{
    console.log("NOT VERIFIED");
}
