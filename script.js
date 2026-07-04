//=============================
// CHANGE PASSWORD HERE
//=============================

const PASSWORD = "iloveyou";

function checkPassword(){

let pass=document.getElementById("password").value;

if(pass===PASSWORD){

document.getElementById("passwordPage").classList.remove("active");

document.getElementById("page1").classList.add("active");

}

else{

document.getElementById("wrongPassword").innerHTML="Wrong Password";

}

}

//=============================
// BUTTONS
//=============================

function nextPage(){

document.getElementById("page1").classList.remove("active");

document.getElementById("page2").classList.add("active");

}

function backPage(){

document.getElementById("page2").classList.remove("active");

document.getElementById("page1").classList.add("active");

}

//=============================
// COUNTDOWN
// CHANGE THIS DATE
//=============================

// Anniversary Date

const anniversary = new Date("July 9, 2024 00:00:00").getTime();

setInterval(function(){

let now = new Date().getTime();

let distance = now - anniversary;

let days = Math.floor(distance/(1000*60*60*24));

let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

let minutes = Math.floor((distance%(1000*60*60))/(1000*60));

let seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML=

days+" Days "

+hours+" Hours "

+minutes+" Minutes "

+seconds+" Seconds ❤️";

},1000);

function memoriesPage(){

document.getElementById("page2").classList.remove("active");

document.getElementById("page3").classList.add("active");

}

function letterPage(){

document.getElementById("page3").classList.remove("active");

document.getElementById("page2").classList.add("active");

}

const hearts = ["💜", "💗", "🤍"];

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // random heart color style
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 600);

function createStars(){
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 2 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.querySelector(".stars-container").appendChild(star);
}

for(let i = 0; i < 80; i++){
    createStars();
}
//letter
const letterText = `My Pangga ❤️
Happy Anniversary
I hope you enjoy this little website I made just for you.
It has a small flaw, when you tap Continue, there are a few pictures there. I hope we can add more from time to time.
I can’t fully express my love through words, but I appreciate you so much and I am grateful for everything you do for me. You are my everything, my love, my best friend, my partner in crime, and my soulmate. I will always cherish every moment we spent together. You make me a better person, and I am so lucky to have you in my life. I always be there for you, to support you, and to love you unconditionally. Thank you for being my rock, my safe haven, and my home. I love you more than anything in this world, and I will always be here for you, through thick and thin. You are my forever and always, and I can’t wait to spend the rest of my life with you.
Mahal na mahal kita palagi pangga ko :>`;

let i = 0;

function typeLetter(){
    const el = document.getElementById("loveLetter");

    if(!el) return;

    if(i < letterText.length){
        el.innerHTML += letterText.charAt(i);
        i++;
        setTimeout(typeLetter, 40);
    }
}
function nextPage(){

document.getElementById("page1").classList.remove("active");
document.getElementById("page2").classList.add("active");

// reset letter every time
const el = document.getElementById("loveLetter");
el.innerHTML = "";
i = 0;

// delay so Page 2 fully loads
setTimeout(() => {
    typeLetter();
}, 400);

}