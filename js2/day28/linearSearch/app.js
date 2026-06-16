//// -----------linear search--------------
let arr=[3,1,-10,0,77,6,6,5]
let target=6
let ans = -1

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] == target)
    {
        ans = i
        break
    }

}
console.log(ans)

