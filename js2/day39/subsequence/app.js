// // subsequence of array
// let arr = [1,2,3]
// function subsequence(arr,idx,ans)
// {
 
//     if(idx==arr.length)
//   {
//     console.log(ans);
//     return
//   }
// ans.push(arr[idx])
// subsequence(arr,idx + 1,ans)
// ans.pop()
// subsequence(arr,idx +1,ans)
// }
// subsequence(arr,0,[])


// // subsequences of string
// function subsequence(str,idx,ans)
//   {
//     if(idx==str.length)
//   {
//     console.log(ans);
//     return
//   }
// subsequence(str,idx+1,ans+str[idx])
// subsequence(str,idx+1,ans)
// }
// subsequence("abc",0,"")



























// // count vowels
// function countVowels(str, i) {
//     if (i === str.length) {
//         return 0;
//     }

//     let vowels = "aeiouAEIOU";

//     if (vowels.includes(str[i])) {
//         return 1 + countVowels(str, i + 1);
//     } else {
//         return countVowels(str, i + 1);
//     }
// }