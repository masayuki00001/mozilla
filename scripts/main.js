/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/photo-1515513284006-9a59075694b7.webp') {
        myImage.setAttribute('src', 'images/test-670091_1280.png');
    } else {
        myImage.setAttribute('src', 'images/photo-1515513284006-9a59075694b7.webp');
    }
}
*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('あなたの名前を入力してください。');
    if(!myButton || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozillaはすばらしいよ、' + storedName;
}

myButton.onclick = function(){
    setUserName();
}