//capturando ids dos elementos
var card = document.getElementById('card')
var icon = document.getElementById('icon')
var nome = document.getElementById('name')
var imagem = document.getElementById('imagem')
var skills = document.getElementById('skills')
var apresentacao = document.getElementById('apresentacao')
var iconHeart = document.getElementById('iconHeart')
var iconMenu = document.getElementById('iconMenu')
var section = document.getElementById('section')

//add elventos de click no icone 'Menu' e no icone 'coração'
iconMenu.addEventListener('click', clickMenu)
iconHeart.addEventListener('click', like)
imagem.addEventListener('click', imagemClick)

function clickMenu() {
  //conteudo que o icone menu apresenta ao ser clicado
  card.style.backgroundColor = '#f5f5f5'
  card.style.border = '1px solid rgba(0, 0, 0, 0.452)'
  imagem.style.border = 'solid 2px #e1306b81'
  icon.style.color = 'black'
  iconHeart.style.color = 'black'
  iconMenu.style.color = 'black'
  nome.style.color = 'black'
  nome.style.fontWeight = 'bold'
  skills.style.color = 'black'
  apresentacao.style.color = 'black'
}
 


function like() {
  //conteudo que o icone coração apresenta ao ser clicado
  iconHeart.style.backgroundColor = 'red'
  iconHeart.style.clipPath = 'circle()'
}

function imagemClick(){
  //conteudo que a imagem apresenta ao ser clicada
  section.style.opacity = "1"; 
  section.style.visibility = "visible"; 
  section.style.transition = "0.4s";
}


