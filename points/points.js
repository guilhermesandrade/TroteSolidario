function baskets(){

let baskets= Number(document.getElementById("baskets").value)

let points

if (baskets >= 80) {
  points = 5000
} else if ((baskets >= 64) && (baskets < 80)) {

  points=4000
} else if ((baskets >=40) && (baskets < 64)) {

  points=2500
}else if ((baskets>=16) && (baskets<40)){

  points=1000
}else if(baskets<16){

  points=0
}

  document.getElementById("points").innerHTML = ("A pontuação foi de " + points + " pontos.")
}

function extrabaskets(){

let extrabaskets= Number(document.getElementById("extrabaskets").value)
let pointsx= 50*extrabaskets

document.getElementById("pointsx").innerHTML=("A pontuação por cestas extras foi de " + pointsx + " pontos")

}

function blood(){

  let blood= Number(document.getElementById("blood").value)
  let pointsb= blood*15

  document.getElementById("pointsb").innerHTML=("A pontuação por doação de sangue foi de " + pointsb + " pontos")
}

function togglemode(){

let html= document.documentElement

html.classList.toggle("light")

}

