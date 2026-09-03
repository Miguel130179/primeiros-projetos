
let select = document.querySelector('#selecao')
let hr = document.querySelector('#hr')
let min = document.querySelector('#min')
let down = document.querySelector('#downs')
let up = document.querySelector('#ups')
let star = document.querySelector('#start')
var a = 0
let stop = document.querySelector('#paro')
let pause = document.querySelector('#pause')
select.textContent = a
let m = 0
min.textContent = m
let h = 0
hr.textContent = h
start.addEventListener('mouseenter', comecar)
stop.addEventListener('click', parar)
let x
pause.addEventListener('click', pausar)
function sobe(){
  
  a +=1
  if(a == 100){
    
    a = 0
    m +=1
    min.textContent = m
    
  }
  else if(m == 60){
    m = 0
    h +=1
    hr.textContent = h
  }
  select.textContent = a
}



function comecar(){
  
 
  start.style.border = '2px solid lightgreen'
 x = setInterval(sobe, 10)


    
  }
  
  function parar() {
    
    stop.style.border='2px solid red'
    clearInterval(x)
    m = 0
    h = 0
    a = 0
        min.textContent = m
        hr.textContent = h
        select.textContent = a
  }

function pausar(){
  clearInterval(x)
  pause.style.border = '2px solid blue'
  
}