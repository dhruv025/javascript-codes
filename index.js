// document.write("This is document write.")
// console.warn("This is a warning.")
// console.error("This is an error.")

// console.log("Hello world");
// var num1 = 10;
// var num2 = 12;
// console.log(num1 + num2);

function avg(a,b){
    return (a+b)/2;
}

c = avg(7,5);
//console.log(c);

let date = new Date();
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getMinutes());
// console.log(date.getHours());

let element = document.getElementById('click');
//console.log(element);

let eleClass = document.getElementsByClassName('container');
//console.log(eleClass);

//eleClass[0].style.background = "yellow";
eleClass[0].classList.add('bg-primary');
eleClass[1].classList.add('text-success');

// console.log(eleClass[0].innerHTML);
// console.log(eleClass[0].innerText);

dv = document.getElementsByTagName('div');
//console.log(dv);
createdElement = document.createElement('h3');
createdElement.innerText = "This is a created heading.";
dv[1].appendChild(createdElement);

// console.log(document.title);
// console.log(document.location);
// console.log(document.URL)
// console.log(document.scripts);

sel = document.querySelector('.container');
// console.log(sel);

selAll = document.querySelectorAll('.container');
// console.log(selAll);

function clicked(){
    console.log("The button was clicked.");
}

// window.onload = function(){
//     console.log("The document was loaded");
// }

// firstContainer.addEventListener('click', function(){
//     console.log("button clicked!!!")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("mouse over!!!")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("mouse out!!!")
// })

// firstContainer.addEventListener('mouseup', function(){
//     console.log("mouse up!!!")
// })

// firstContainer.addEventListener('mousedown', function(){
//     console.log("mouse down!!!")
// })

function sum(a,b){
    return a+b;
}

sum = (a,b)=>{
    return a+b;
}
//console.log(sum(5,7));

log = ()=>{
    console.log("logged in!!!")
}

//setTimeout(log,5000);
//setInterval(log,5000);

obj = {name: "dhruv", surname: "goel"};
json = JSON.stringify(obj);
console.log(json);

parsed = JSON.parse(`{"name":"dhruv","surname":"goel"}`);
console.log(parsed);