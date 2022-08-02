
let botao4 = document.querySelector("#botao4");
botao4.addEventListener("click", restartAnimation4, false);
botao4.addEventListener("click", rand4, false);

async function rand4(){
    document.querySelector('#numero4').textContent = "?";
    await sleep(0.6);
    document.querySelector('#numero4').textContent = Math.floor(Math.random() * 4 + 1);
}

function restartAnimation4(event) {
    let fotodado = document.querySelector("#dado4 img");
    let numero = document.querySelector("#numero4");
    fotodado.style.animationName = "none";
    numero.style.animationName = "none";

    requestAnimationFrame(() =>{
        fotodado.style.animationName = "";
        numero.style.animationName = "";

    });
}


let botao6 = document.querySelector("#botao6");
botao6.addEventListener("click", restartAnimation6, false);
botao6.addEventListener("click", rand6, false);

async function rand6(){
    document.querySelector('#numero6').textContent = "?";
    await sleep(0.6);
    document.querySelector('#numero6').textContent = Math.floor(Math.random() * 6 + 1);
}

function restartAnimation6(event) {
    let fotodado = document.querySelector("#dado6 img");
    let numero = document.querySelector("#numero6");
    fotodado.style.animationName = "none";
    numero.style.animationName = "none";

    requestAnimationFrame(() =>{
        fotodado.style.animationName = "";
        numero.style.animationName = "";
    });
}

let botao8 = document.querySelector("#botao8");
botao8.addEventListener("click", restartAnimation8, false);
botao8.addEventListener("click", rand8, false);

async function rand8(){
    document.querySelector('#numero8').textContent = "?";
    await sleep(0.6);
    document.querySelector('#numero8').textContent = Math.floor(Math.random() * 8 + 1);
}

function restartAnimation8(event) {
    let fotodado = document.querySelector("#dado8 img");
    let numero = document.querySelector("#numero8");
    fotodado.style.animationName = "none";
    numero.style.animationName = "none";

    requestAnimationFrame(() =>{
        fotodado.style.animationName = "";
        numero.style.animationName = "";
    });
}

let botao10 = document.querySelector("#botao10");
botao10.addEventListener("click", restartAnimation10, false);
botao10.addEventListener("click", rand10, false);

async function rand10(){
    document.querySelector('#numero10').textContent = "?";
    await sleep(0.6);
    document.querySelector('#numero10').textContent = Math.floor(Math.random() * 10 + 1);
}

function restartAnimation10(event) {
    let fotodado = document.querySelector("#dado10 img");
    let numero = document.querySelector("#numero10");
    fotodado.style.animationName = "none";
    numero.style.animationName = "none";

    requestAnimationFrame(() =>{
        fotodado.style.animationName = "";
        numero.style.animationName = "";
    });
}

let botao12 = document.querySelector("#botao12");
botao12.addEventListener("click", restartAnimation12, false);
botao12.addEventListener("click", rand12, false);

async function rand12(){
    document.querySelector('#numero12').textContent = "?";
    await sleep(0.6);
    document.querySelector('#numero12').textContent = Math.floor(Math.random() * 12 + 1);
}

function restartAnimation12(event) {
    let fotodado = document.querySelector("#dado12 img");
    let numero = document.querySelector("#numero12");
    fotodado.style.animationName = "none";
    numero.style.animationName = "none";

    requestAnimationFrame(() =>{
        fotodado.style.animationName = "";
        numero.style.animationName = "";
    });
}

let botao20 = document.querySelector("#botao20");
botao20.addEventListener("click", restartAnimation20, false);
botao20.addEventListener("click", rand20, false);

async function rand20(){
    document.querySelector('#numero20').textContent = "?";
    await sleep(0.6);
    document.querySelector('#numero20').textContent = Math.floor(Math.random() * 20 + 1);
}

function restartAnimation20(event) {
    let fotodado = document.querySelector("#dado20 img");
    let numero = document.querySelector("#numero20");
    fotodado.style.animationName = "none";
    numero.style.animationName = "none";

    requestAnimationFrame(() =>{
        fotodado.style.animationName = "";
        numero.style.animationName = "";
    });
}

let botaozao = document.querySelector("#botaozao");
botaozao.addEventListener("click", restartAnimationZao, false);
botaozao.addEventListener("click", randZao, false);

async function randZao(){
    document.querySelector('#numero10z').textContent = "?";
    document.querySelector('#numero100').textContent = "?";
    await sleep(0.6);
    document.querySelector('#numero10z').textContent = Math.floor(Math.random() * 10);
    var dezena = ["00","10","20","30","40","50","60","70","80","90"];
    document.querySelector('#numero100').textContent = dezena[Math.floor(Math.random() * dezena.length)];
}

function restartAnimationZao(event) {
    let fotodado = document.querySelector("#dado10z img");
    let numero = document.querySelector("#numero10z");
    let fotodadoZao = document.querySelector("#dado100 img");
    let numero100 = document.querySelector("#numero100");
    fotodado.style.animationName = "none";
    numero.style.animationName = "none";
    fotodadoZao.style.animationName = "none";
    numero100.style.animationName = "none";

    requestAnimationFrame(() =>{
        fotodado.style.animationName = "";
        numero.style.animationName = "";
        fotodadoZao.style.animationName = "";
        numero100.style.animationName = "";
    });
}

async function sleep(seconds){
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}