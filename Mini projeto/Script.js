let nome = window.prompt("digite seu nome")
const h2 = document.querySelector('#macqueen');
const input = document.querySelector('#escolha')
let confirm = document.querySelector('#confirm')
let flor = document.querySelector('#flor')
h2.textContent = 'bem vindo ' 
+ nome;
let h4 = document.querySelector('#receba')
let tent =Number(input.value)
  const min = 1
  const max = prompt("digite o número maximo")
  const x = Math.floor(Math.random() * (max - min + 1)) + min;

let pont
pont = 0 
confirm.addEventListener('click',eraser)

function eraser(){
  tent = Number(input.value)
  if(tent > x){
    h4.textContent  = 'menor'
  pont += 1  
  flor.textContent = `tentativas: ${pont}`
  }
  else if(tent < x ){
    h4.textContent = 'maior'
    pont+=1
    flor.textContent = `tentativas: ${pont}`
  }
  else if(tent == x){
    h4.textContent = 'acertou'
  pont+=1
  flor.textContent = `tentativas: ${pont}`
spo
  }
  
  input.value = ''
  input.focus()
}


  

  