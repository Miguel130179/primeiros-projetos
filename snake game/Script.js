// 1. canvas principal
const canvas = document.getElementById('myCanvas');
let right =document.getElementById('right')
let left = document.getElementById('left')
let down = document.getElementById('down')
let up = document.getElementById('up')
canvas.width = window.innerWidth
canvas.height = window.innerHeight/2
let direcao = 'right'
let direcaoprev = direcao

let confirm = 0
let confirmr = 0
let largura = 30
let speed = 30
let colisão = 60
let confirmc= 1
let xy = 200
let min =0
let max = canvas.height 
let snakey = 0
snakex= 30
let appley
let applex
let leftouch 
let rightouch 
let uptouch
let downtouch
let pont = 0
let cabeca = new Image()
let cabecaleft = new Image()
let cabecaup = new Image()
let cabecadown = new Image()
let corpo = new Image()
let corpoup = new Image()
let corpodown = new Image()
let corpoleft = new Image()
let rabo =new Image()
let rabodown = new Image()
let maca = new Image()
let s67horror = new Image()
let trofeu =new Image()
trofeu.src = 'troféu.png'
s67horror.src = '67horror.jpg'
let scp67 = new Audio('scp67.mp3')
let backgroundmusic = new Audio('Chile background music.mp3')
let eatapples = new Audio('eating.mp3')

cabeca.src = 'cabeçaright.png'
cabecadown.src = 'cabeçadown.png'
cabecaleft.src = 'cabeçaleft.png'
cabecaup.src = 'cabeçaup.png'


corpo.src = 'corpo.png'

rabo.src = 'Rabo.png'
rabodown.src= 'rabodown.png'
maca.src = 'maçã.png'
right.addEventListener('touchstart',() =>{
 if(direcao !=='left'){
  rightouch =true
  downtouch =false
  uptouch = false
  
  leftouch = false
 }
  event.preventDefault()
})

left.addEventListener('touchstart', () =>{
  if(direcao !== 'right'){
  leftouch = true
  downtouch =false
  uptouch = false
  rightouch = false
  }
  event.preventDefault()
})

up.addEventListener('touchstart', () =>{
  if(direcao !=='down'){
  uptouch =true
  downtouch =false
  
  rightouch = false
  leftouch = false
  }
  event.preventDefault()
  
})

document.addEventListener('keydown', (event) =>{
if(event.key === 'ArrowRight'){
  if(direcao!=='left'){
  rightouch =true
  downtouch =false
  uptouch = false
  
  leftouch = false
  }
}
  else if( event.key ==='ArrowLeft'){
    if(direcao !=='right'){
    leftouch = true
  downtouch =false
  uptouch = false
  rightouch = false
    }
  }
  else if( event.key ==='ArrowUp'){
    if(direcao!=='down'){
    uptouch =true
  downtouch =false
  
  rightouch = false
  leftouch = false
    }
  }
  else if( event.key ==='ArrowDown'){
    if(direcao !=='up'){
    uptouch =false
  downtouch =true
  
  rightouch = false
  leftouch = false
  }
  }
})

down.addEventListener('touchstart', () =>{
 if(direcao !=='up'){
  downtouch =true
  uptouch = false
  rightouch = false
  leftouch = false
 }
  event.preventDefault()
})


appley =Math.floor(Math.random()*(max- min + 1))  + min
applex = Math.floor(Math.random()*(max - min + 1))  + min
// 2. Pega o contexto 2D
const ctx = canvas.getContext('2d');

const snake =[
  {x:200, y:200},
  {x:230, y:200}
  
]

const apple =[
  {x:applex,y:appley}
  ]
function gameloop(){

  
  ctx.clearRect(0,0,canvas.width,canvas.height)
  
  movement()
  
  ctx.fillStyle = '#49e549'
  ctx.fillRect(0,0,canvas.width,canvas.height)
  
  ctx.fillStyle = 'blue'
  drawsnake()
  
  ctx.fillStyle = 'red'
  
  soms()
  ctx.fillStyle = 'white'
  ctx.font = '50px Arial'
  
  ctx.fillText(pont,0,40)

  
  drawapple()
  requestAnimationFrame(gameloop)


}


gameloop()
function movement(){
      
 const head = snake.at(-1)
 

   if(head.x + speed>= applex && head.y+ speed >= appley && head.x <= applex + 30&& head.y <= appley + 30){
     
  
   pont+=1
   colisão+= 30
   confirmc+=1
   appley =Math.floor(Math.random()*(max- min + 1))  + min
applex = Math.floor(Math.random()*(max - min + 1))  + min
eatapples.volume = 0.20
eatapples.play()

snake.push(head)

}
  
   
 
 
  if(rightouch == true &&  head.x  <= canvas.width && direcao!=='left'){
    direcaoprev = direcao
direcao = 'right'
    snake.push({x:head.x + speed/5,y:head.y })
    snake.shift()
  }
  
  if(leftouch == true && head.x  >=0 && direcao !=='right'){
    direcaoprev = direcao
direcao = 'left'
    snake.push({x:head.x - speed/5,y:head.y })
    snake.shift()
  }
  
  if(downtouch == true && head.y <=  canvas.height + 23 && direcao !=='up'){
    direcaoprev = direcao
direcao = 'down'

    snake.push({x:head.x,y:head.y + speed/5})
    snake.shift()
  }
  
  if(uptouch == true && head.y >=0 && direcao !=='down'){
direcaoprev = direcao
direcao = 'up'
    snake.push({x:head.x ,y:head.y - speed/5})
    snake.shift()
  }

  
    snake.forEach((position)=>{
    
    
for(let i = 0;i <snake.length - 3;i++){
    if(head.x  ===snake[i].x && head.y   === snake[i].y){
      pont=0
      snake.splice(0,snake.length - 1)
     snake.push({x:200,y:200}) 
     snake.push({x:230,y:200})
      ctx.clearRect(0,0,canvas.width,canvas.height)
      ctx.fillRect(position.x,position.y,largura,largura)
      window.alert('perdeu Noob')
    }
}
  if(head.y<= 0){
    window.alert('perdeu podre<_>')
    snake.splice(0,snake.length - 1)
     snake.push({x:200,y:200}) 
     snake.push({x:230,y:200})
      ctx.clearRect(0,0,canvas.width,canvas.height)
      ctx.fillRect(position.x,position.y,largura,largura)
      uptouch = false
      pont =0
      
      appley =Math.floor(Math.random()*(max- min + 1))  + min
applex = Math.floor(Math.random()*(max - min + 1))  + min
  }
  
  if(head.y >= canvas.height -70){
    window.alert('perdeu ruim')
    snake.splice(0,snake.length - 1)
     snake.push({x:200,y:200}) 
     snake.push({x:230,y:200})
      ctx.clearRect(0,0,canvas.width,canvas.height)
      ctx.fillRect(position.x,position.y,largura,largura)
      downtouch = false
      pont =0
      
      appley =Math.floor(Math.random()*(max- min + 1))  + min
applex = Math.floor(Math.random()*(max - min + 1))  + min
  }
  
  if(head.x >= canvas.width - 80){
    window.alert('voce não é um dos maiores agiotas')
    snake.splice(0,snake.length - 1)
     snake.push({x:200,y:200}) 
     snake.push({x:230,y:200})
      ctx.clearRect(0,0,canvas.width,canvas.height)
      ctx.fillRect(position.x,position.y,largura,largura)
      rightouch = false
      pont =0
      pont =0
      
      appley =Math.floor(Math.random()*(max- min + 1))  + min
applex = Math.floor(Math.random()*(max - min + 1))  + min
  }
    if(head.x <=0){
      
      window.alert('6-...')
      snake.splice(0,snake.length - 1)
     snake.push({x:200,y:200}) 
     snake.push({x:230,y:200})
      ctx.clearRect(0,0,canvas.width,canvas.height)
      ctx.fillRect(position.x,position.y,largura,largura)
      leftouch = false
      pont =0
      
      appley =Math.floor(Math.random()*(max- min + 1))  + min
applex = Math.floor(Math.random()*(max - min + 1))  + min
    }
})

      
}
let pausemusic = true
function soms(){
  let loop = pont + 1
  while(loop > pont){
  backgroundmusic.play()
  backgroundmusic.volume = 0.30
  }
       if(pont == 67&& pausemusic){
    scp67.play()
    ctx.drawImage(s67horror,0,0,canvas.width,canvas.height)
    pausemusic = false
   }
   
}
function drawsnake(){
const tail = snake.at(0)
const nose = snake.at(-1)
  snake.forEach((position,index) =>{
    
    ctx.fillStyle = 'blue'
    if(rightouch == true){
      confirm = 0
    }
    if(index ===snake.length - 1 && direcao ==='right'){
    ctx.drawImage(cabeca,position.x,position.y,100,100)
    }

if(index ===snake.length - 1 && direcao ==='left'){
    ctx.drawImage(cabecaleft,position.x,position.y,100,100)
    }
    
    if(index ===snake.length - 1 && direcao ==='down'){
    ctx.drawImage(cabecadown,position.x,position.y,100,100)
    }
    
    if(index ===snake.length - 1 && direcao ==='up'){
    ctx.drawImage(cabecaup,position.x,position.y,100,100)
    }
  
  if(index !==snake.length - 1 && direcaoprev ==='right'){
    ctx.drawImage(rabo,position.x,position.y+8,80,76)
    }

if(index !==snake.length - 1 && direcaoprev ==='left'){
    ctx.drawImage(rabo,position.x,position.y + 8,80,80)
    }
    
    if(index !==snake.length - 1 && direcaoprev==='down'){
    
    ctx.drawImage(rabodown,position.x+6,position.y ,90,90)
    }
    
    if(index !==snake.length - 1 && direcaoprev==='up'){
    ctx.drawImage(rabodown,position.x,position.y,90,100)
    }
    
  })
}

function drawapple(){
  ctx.fillStyle = 'red'
  ctx.drawImage(maca,applex,appley,80,80)

if(applex + 30 > canvas.width- 30 || appley + 30 >canvas.height - 30|| applex + 30< 0|| appley + 30<0){
  appley =Math.floor(Math.random()*(max- min + 1))  + min
applex = Math.floor(Math.random()*(max - min + 1))  + min

}
}

//2.Canvas dos controles
