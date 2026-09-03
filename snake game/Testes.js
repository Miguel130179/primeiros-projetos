let ncaixa = document.querySelector('#tome')
let soma = document.querySelector('#soma')
let result =document.querySelector('#result')
let multiplicacao = document.querySelector('#multiplicacao')
let divisao = document.querySelector('#divisao')

let subtracao = document.querySelector('#subtracao')

let clear1 = document.querySelector('#clear1')
let c =document.querySelector('#clean')

let n1 = document.querySelector('#n1')
let n2 = document.querySelector('#n2')
let n3 = document.querySelector('#n3')
let n4 = document.querySelector('#n4')
let n5 = document.querySelector('#n5')
let n6 = document.querySelector('#n6')
let n7 = document.querySelector('#n7')
let n8 = document.querySelector('#n8')
let n9 = document.querySelector('#n9')
let n0 = document.querySelector('#n0')

n1.addEventListener('click', () =>click("1"))
n2.addEventListener('click', () =>click("2"))
n3.addEventListener('click', () =>click("3"))

n4.addEventListener('click', () =>click("4"))
n5.addEventListener('click', () =>click("5"))
n6.addEventListener('click', () =>click("6"))

n7.addEventListener('click', () =>click("7"))
n8.addEventListener('click', () =>click("8"))
n9.addEventListener('click', () =>click("9"))

subtracao.addEventListener('click', () =>click('-'))
divisao.addEventListener('click', () =>click('/'))
multiplicacao.addEventListener('click', () =>click('*'))
soma.addEventListener('click', () =>click('+'))

c.addEventListener('click',clean)

clear1.addEventListener('click',clearone)
var ronaldo = []
function click(num){
  ronaldo.push(num)
  ncaixa.textContent = ronaldo.join('')
}

function clean(){
  ncaixa.textContent = ""
}

function clearone(){
   ronaldo.pop()
  ncaixa.textContent = ronaldo.join('')


