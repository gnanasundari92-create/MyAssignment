let s="Racecar"
let newstr=s.toUpperCase().split(""); //split into each word 
let reversestr=''

for(let i=newstr.length-1;i>=0;i--) //-1 sets the index from last word and i-- runs the for loop from the last word
{ 
    reversestr=reversestr+newstr[i];   //adding last word to the empty string variable
}

if(s.toUpperCase()===reversestr.toUpperCase()) //Convert both the strings to upper case and compare it
{
    console.log("Given String",s,"is a Palindrome");
}
else
{
    console.log("Given String", s, "is NOT a Palindrome"); 
}