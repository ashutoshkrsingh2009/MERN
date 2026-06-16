// // closure

// function outer()
// {
//     var a=10
//     function inner()
//     {
//         console.log(a);
        
//     }
//     inner()
//     return inner
// }
// var fn=outer()
// fn()




// // closure

// function outer()
// {
//     var a=10
//     function inner()
//     {
//         console.log(a);
        
//     }
//     inner()
//     return inner
// }
// var fn=outer()
// fn()





// let str = "ravisharma"

// let vowels = "aeiou"

// let ans = ""

// for(let item of str)
// {
//     if(vowels.includes(item))
//     {
//         ans+= item
//     }
// }

// console.log(ans);


// let str="ashu"
// function count(str,i){
//     if(i>str.length-1){
//         return 0
//     }
//     let vowel="aeiouAEIOU"
//     if(vowel.includes(str[i]))
//     {
//         return 1 + count(str,i+1)
//     }
//     else
//     {
//         return count(str,i+1)
//     }
// }
// console.log(count(str,0))

// let arr=[1,2,3,4,5]
// function sum(arr,i)
// {
//     if(i==0)
//     {
//         return 0
//     }
//     let ele=arr.pop()
//     return ele + sum(arr,i-1)
// }
// console.log(sum(arr,5));

// let arr=[1,2,3,-5,33]
// function small(arr,i){
//     if(i==arr.length-1)
//     {
//         return arr[i]
//     }
//     return Math.min(arr[i],small(arr,i+1))
// }
// console.log(small(arr,0));



// let n=12345
// function sum(n){
//     if(n==0)
//     {
//         return 0
//     }
//     ld=n%10
//     n=Math.floor(n/10)
//     return ld + sum(n)
// }
// console.log(sum(n))



// let arr=[1,2,3,4,5]
// let target=4
// function abc(arr,i){
//     if(i==arr.length)
//     {
//         return
//     }
//     if(arr[i]==target){
//         return i
//     }
//     return abc(arr,i+1)
// }
// console.log(abc(arr,0));















