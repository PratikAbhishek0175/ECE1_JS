console.log("Hello World")
var num ;
num = 10;
console.log(num);
console.log(typeof(num));
num = false;
console.log(num);
console.log(typeof(num));
num = 'ten';
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));
num = undefined;
console.log(num);
console.log(typeof(num));
const sym1 = Symbol(4)
console.log(sym1);
const sym2 = Symbol(4)
console.log(sym2);
if(sym1==sym2)
{
    console.log("true");
}
else
{
    console.log("false")
}
for (key in object)
{

}
const person = {
    fname:"Ajay",
    lname:"Singh",
    age:25
};
for (let x in person){
    console.log("person details:" + x + ":" + person[x])
}