// =============================
// ELEMENT
// =============================

const heart = document.getElementById("heartPath");
const heartSVG = document.getElementById("heartSVG");
const title = document.getElementById("title");
const message = document.getElementById("message");
const shine = document.getElementById("shine");
const particles = document.getElementById("particles");
const cursor = document.getElementById("cursorLight");

// =============================
// CURSOR LIGHT
// =============================

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

});

// =============================
// HEART DRAW
// =============================

function drawHeart(){

    heart.classList.remove("draw");

    void heart.offsetWidth;

    heart.classList.add("draw");

}

// =============================
// HEART BEAT
// =============================

function beatHeart(){

    heartSVG.classList.remove("beat");

    void heartSVG.offsetWidth;

    heartSVG.classList.add("beat");

}

// =============================
// SHINE
// =============================

function playShine(){

    shine.classList.remove("shine");

    void shine.offsetWidth;

    shine.classList.add("shine");

}

// =============================
// PARTICLES
// =============================

function createParticle(){

    const p=document.createElement("div");

    p.className="particle";

    const x=window.innerWidth/2+(Math.random()*220-110);

    const y=window.innerHeight/2+(Math.random()*120-60);

    p.style.left=x+"px";
    p.style.top=y+"px";

    const size=Math.random()*6+3;

    p.style.width=size+"px";
    p.style.height=size+"px";

    particles.appendChild(p);

    let posY=y;

    const speed=Math.random()*2+1;

    const fade=setInterval(()=>{

        posY-=speed;

        p.style.top=posY+"px";

        p.style.opacity=parseFloat(p.style.opacity||1)-0.02;

        if(parseFloat(p.style.opacity)<=0){

            clearInterval(fade);

            p.remove();

        }

    },16);

}

setInterval(createParticle,80);

// =============================
// TYPEWRITER
// =============================

function typeText(element,text,speed){

    element.innerHTML="";

    let i=0;

    const typing=setInterval(()=>{

        element.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(typing);

        }

    },speed);

}

// =============================
// TIMELINE
// =============================

const scenes=[

{
title:"",
text:""
},

{
title:"Hey...",
text:"Please don't close this."
},

{
title:"Aku tahu...",
text:"kata 'maaf' tidak akan menghapus semuanya."
},

{
title:"Tapi...",
text:"aku tetap ingin mengatakannya."
},

{
title:"Maaf...",
text:"karena pernah membuatmu kecewa."
},

{
title:"Aku sadar...",
text:"aku tidak bisa mengubah masa lalu."
},

{
title:"Tapi...",
text:"aku bisa berusaha menjadi lebih baik mulai hari ini."
},

{
title:"Terima kasih...",
text:"karena pernah bertahan sejauh ini bersamaku."
},

{
title:"Kalau...",
text:"kamu masih mau memberiku kesempatan..."
},

{
title:"❤️",
text:"I Love You\n\nI'm Truly Sorry."
}

];

let index=0;

function nextScene(){

    title.classList.remove("fadeIn");
    message.classList.remove("fadeIn");

    void title.offsetWidth;

    title.classList.add("fadeIn");
    message.classList.add("fadeIn");

    typeText(title,scenes[index].title,60);

    setTimeout(()=>{

        typeText(message,scenes[index].text,25);

    },600);

    index++;

    if(index>=scenes.length){

        index=0;

    }

}

// =============================
// START
// =============================

drawHeart();

setTimeout(()=>{

    beatHeart();

    playShine();

},4000);

nextScene();

setInterval(nextScene,6500);

setInterval(playShine,3500);