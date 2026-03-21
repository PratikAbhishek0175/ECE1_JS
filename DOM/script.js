//DOM in JS
//javascript can change all the html elements in the page
//javascript can change all the html attributes in the page
//javascript can change all the css style in the page
//javascript can remove existing html elements and attributes
//javascript can add new html elements and attributes
//javascript can react to all existing html events in the page
//javascript can create new html events in the page
//for css property we use element.style.property 
//for creating element document.createElement("h2");
//for getting parent document.getElementsByTagName("body");
//add elenemt at the position using append method bodytag[0].append(heading);
//node.prepend() //adds at the start of node(inside)
//node.before() //adds before the node(outside)
//node.after() //adds after the node(outside)
//mouse events
//onmouse click
//onmouse over
//onmouse out
//onmouse move
//onmouse up
//onmouse down
//onmouse dblclick
//keyboard events
//onfocus event onfocus
//onblur event onblur
//onchange event onchange
//oninput event oninput
//onsubmit event onsubmit
//window event
//onunload event onunload
//onresize event onresize

//const result=document.getElementById("jk");
//console.log(result);
//result.innerHTML="<b>Hello World</b>"
//const result=document.getElenentById("p1");
//console.log(result);
//result1[1].innerHTML="chauhan";
//result1[0].innerHTML="Jitendra";
//const result=document.getElementById("jk").getAttribute("class")
//document.getElementById("p1").innerHTML=result;
//function onclick(){
//    condsole.log("Clicked")
//}
//function onmouseover(){
//    console.log("on mouse over")
//}
//function onmouseout(){
//    console.log("on mouse over")
//}
//function onmousemove(){
//    console.log("on mouse move")
//}
//function onmouseup(){
//    console.log("on mouse up")
//}
//function onmousedown(){
//    console.log("on mouse down")
//}
//function onlousedblclick(){
//    console.log("on mouse double click")
//}


//Asynchronous Programming
//let promise = new promise((resolve,reject)=>{
//    let success = true;
//    if(success)
//        resolve("Data Loaded");
//    else
//        reject("Error Occurred")
//});
//promise.then((result) => console.log(result)).catch((error));
//resolve then staatement is executed and reject catch statement is executed.

//synchronous event
//async function getData(){
//    let response = await fetch("https://jsonplaceholder.typocode.com/users");
//    let data = await response.json();
//    console.log(data);
//}
//getData();

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// try {
//     var x = y++;
// } catch (error) {
//     console.log
// }

// //local storage
// localStorage.setItem("name","Jeet");

// //retrive Data
// var name1 = localStorage.getItem("name");
// console.log(name1);

// //remove item
// localstorage.removeItem("name");

 //store object
 var user = (name:"Jeet", age:50);
 localstorage.setItem("user",JSON.stringify(user));