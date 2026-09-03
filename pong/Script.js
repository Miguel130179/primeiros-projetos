// 1. Obtém o elemento canvas
const canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight/1.8
// 2. Pega o contexto 2D
let y = 0
let touch
let touchup
let pontos = document.getElementById('points')
const ctx = canvas.getContext('2d');
let up = document.querySelector("#up")
let down = document.querySelector("#down")
let luva = document.querySelector("#receba")
down.addEventListener('touchstart', () => {
  
  touch = true
})
down.addEventListener('touchend' , () =>{
  touch = false
})
down.addEventListener('keydown',() =>{
  touch = true
})
down.addEventListener('keyup' ,() =>{
  touch = false
})
up.addEventListener('touchstart', () => {
  
  touchup = true
})
up.addEventListener('touchend' , () =>{
  touchup = false
})
up.addEventListener('keydown',() =>{
  touchup = true
})
up.addEventListener('keyup' ,() =>{
  touchup = false
})
if (ctx) { // Verifica se o contexto foi obtido com sucesso
  



} else {
  console.error('Contexto 2D não suportado no seu navegador.');
}
  

let b = canvas.height/2.5
//let fiquei = 0
let speedx
= 2
let pipoca = 1
let VelYX = 0
let receive = true
let wdth = canvas.height - 1
let segundaRX = 0
let player1p = 0
let speedy = 2
let pcp = 0
let xobix = canvas.width / 2
let widton = wdth + 15
function descer(){

  ctx.clearRect(0,0,canvas.width,canvas.height)
  
  ctx.fillStyle = 'black'
  ctx.fillRect(0,0,canvas.width,canvas.height)
  ctx.fillStyle = 'white'; 
    ctx.font = '40px arial'
  ctx.fillText(player1p,canvas.width/3.7,30)
  ctx.fillText(pcp,canvas.width/1.5,30)

  receba()
  ctx.fillRect(10,y,15,90);
    ctx.fillRect(wdth,segundaRX,15,90)
    ctx.fillRect(xobix,b,10,10)

  xobix-=speedx
  b+=speedy
  
  
if(b<= y + 90 && b +10 >=y && xobix <= 25 && xobix + 10 >= 10){
speedx*=-1
speedy*=1
  speedx *=1.10
//fiquei = 1
}

if(b +10 >= canvas.height){
  speedx*=1
  speedy*=-1
}
if(b <=0){
  speedx*=1
  speedy*=-1
}

if(xobix >= wdth - 15 && xobix<=wdth&& b <=segundaRX + 90 && b>= segundaRX){
  speedx*=-1
  speedy*=1
}

if(segundaRX + 45<= b - 15&& segundaRX + 90 <= canvas.height){
  segundaRX+=3

}

if(segundaRX >= b + 5 && segundaRX  >0){
  segundaRX-=3
 
}
if(xobix <=5){
reset(-1)
  pcp+=1
  
}
if(xobix + 10>= canvas.width){
reset(1)

  player1p+=1

}



if(b <= segundaRX + 90 && xobix >= canvas.height - 15 ){
  
  speedx *=1.10
}
requestAnimationFrame(descer);
};

function receba(){
  if(touch == true && y + 90 <= canvas.height){
    y+=10
  }
  
  if(touchup== true && y > 0){
    y-=10
  }
}
descer()

function reset(direction){
  xobix = canvas.width/2
  b = canvas.height/2
  speedx = 2* direction
  speedy = 2* (Math.random() > 0.5 ? 1:-1)
}