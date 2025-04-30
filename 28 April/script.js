// when we can get the only elements not a whole array using by for loop.

// let ar=[1,2,3,4,5,6,7,8,9,0];

// for(let a=0;a<10;a++)
// {
//     console.log(ar[a]);
// }

//write a program to take 10 integar inout from the user.


let arr=[];


for(let i=0;i<10;i++)
{
    arr[i]=parseInt(prompt("Enter the value"));
}

for(let a=0;a<10;a++)
{
    console.log(arr[a]);
    arr[i]= a.slice(4,5,6);
}