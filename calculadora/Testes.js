let div = document.querySelector('luva')
luva.addEventListener('mouseenter',mouseonf)
luva.addEventListener('mouseout',mouseoutf)
function mouseonf(){
  luva.style.background = 'green'
  luva.textContent = 'interagiu'
}
function mouseoutf(){
  luva.style.background = 'red'
  luva.textContent = 'Saiu'
}