//Example 1 - Length of Last word
let str="Hello World"

// split the words into array  
let arr=str.split(" ");

// find the length of the new array
let a = arr.length;

//Placing the last word in the new variable
let lastword=arr[a-1];  

// Printing the last word and its length
console.log("Length of last word",lastword,"is:",lastword.length);

//****************************************************************** */      

// Example 2 - Length of the last word
let str1="   fly me   to   the moon  "
let arr1=str1.trim().split(" ");
let  arrlength= arr1.length;

//Placing the last word in the new variable
let lword=arr1[arrlength-1];  

// Printing the last word and its length
console.log("Length of last word ",lword,"is:",lword.length);

//**************************************************************************** */

function isAnagram(a1,a2)
{
    let string1=a1.trim().toLowerCase().split("").sort().join();
    let string2=a2.trim().toLowerCase().split("").sort().join();
// Comparing the sorted strings
    if (string1 === string2) 
    {
    return true
    }
    else 
    {
    return false
    }
}
console.log(isAnagram(' Listen ', ' Silent '));
console.log(isAnagram(' Hello ', ' World '));