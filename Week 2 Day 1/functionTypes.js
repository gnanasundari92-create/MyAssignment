//Named function/ function declaration 
function userProfile(name)
{
    console.log("Hello",name,"!")
}
userProfile('Mahima')

//Arrow function
let double=(a)=>a*a   //variable a is getting multiplied by itself
console.log(double(25));

//Function expression/Anonymous function
let textmessage=setTimeout(function(){
    console.log("This message is delayed by 2 seconds");},2000);
    console.log(textmessage);

//Callback function
function getUserData(callback) 
{
    callback();
}
function callback(){
    setTimeout(()=> {console.log("Call Back Function” after 3 seconds. ");},3000);
}
getUserData(callback);