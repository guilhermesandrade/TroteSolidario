function baskets() {
  let baskets = Number(document.getElementById("baskets").value)

  let points

  if (baskets >= 80) {
    points = 5000
  } else if (baskets >= 64 && baskets < 80) {
    points = 4000
  } else if (baskets >= 40 && baskets < 64) {
    points = 2500
  } else if (baskets >= 16 && baskets < 40) {
    points = 1000
  } else if (baskets < 16) {
    points = 0
  }

  document.getElementById("points").innerHTML =
    "A pontuação foi de " + points + " pontos."
}

function extrabaskets() {
  let extrabaskets = Number(document.getElementById("extrabaskets").value)
  let pointsx

  if (extrabaskets >= 0) {
    pointsx = 50 * extrabaskets
  } else {
    pointsx = 0
  }

  document.getElementById("pointsx").innerHTML =
    "A pontuação por cestas extras foi de " + pointsx + " pontos"
}

function blood() {
  let blood = Number(document.getElementById("blood").value)
  let pointsb

  if (blood >= 0) {
    pointsb = blood * 15
  } else {
    pointsb = 0
  }

  document.getElementById("pointsb").innerHTML =
    "A pontuação por doação de sangue foi de " + pointsb + " pontos"
}

function kits() {
  let kits = Number(document.getElementById("kits").value)
  let pointsa

  if (kits >= 0) {
    pointsa = kits * 25
  } else {
    pointsa = 0
  }

  document.getElementById("pointsa").innerHTML =
    "A pontuação por kits alimentação avulsos foi de " + pointsa + " pontos"
}

function suplement() {
  let suplements = Number(document.getElementById("suplements").value)
  let pointss

  if (suplements >= 0) {
    pointss = suplements * 10
  } else {
    pointss = 0
  }

  document.getElementById("pointss").innerHTML =
    "A pontuação por latas de suplemento avulsos foi de " + pointss + " pontos"
}

function rice() {
  let rice = Number(document.getElementById("rice").value)
  let pointsr

  if (rice >= 0) {
    pointsr = rice * 5
  } else {
    pointsr = 0
  }

  document.getElementById("pointsr").innerHTML =
    "A pontuação por pacotes de arroz de 5kg avulsos foi de " + pointsr + " pontos"
}

function rice1() {
  let rice1 = Number(document.getElementById("rice1").value)
  let pointsr

  if (rice1 >= 0) {
    pointsr1 = rice1 * 1
  } else {
    pointsr1 = 0
  }

  document.getElementById("pointsr1").innerHTML =
    "A pontuação por pacotes de arroz de 1kg avulsos foi de " +
    pointsr1 + " pontos"
}

function beans() {
  let beans = Number(document.getElementById("beans").value)
  let pointsbe

  if (beans >= 0) {
    pointsbe = beans * 2
  } else {
    pointsbe = 0
  }

  document.getElementById("pointsbe").innerHTML =
    "A pontuação por pacotes de feijão de 2kg avulsos foi de " +
    pointsbe +
    " pontos"
}

function beans1() {
  let beans1 = Number(document.getElementById("beans1").value)
  let pointsbe1

  if (beans1 >= 0) {
    pointsbe1 = beans1 * 1
  } else {
    pointsbe1 = 0
  }

  document.getElementById("pointsbe1").innerHTML =
    "A pontuação por pacotes de feijão de 1kg avulsos foi de " +
    pointsbe1 +
    " pontos"
}

function pasta() {
  let pasta = Number(document.getElementById("pasta").value)
  let pointsp

  if (pasta >= 0) {
    pointsp = pasta * 0.5
  } else {
    pointsp = 0
  }

  document.getElementById("pointsp").innerHTML =
    "A pontuação por pacotes de macarrão avulsos foi de " +
    pointsp +
    " pontos"
}

function oil() {
  let oil = Number(document.getElementById("oil").value)
  let pointso

  if (oil >= 0) {
    pointso = oil * 1
  } else {
    pointso = 0
  }

  document.getElementById("pointso").innerHTML =
    "A pontuação por garrafa de óleo 900ml avulsos foi de " + pointso + " pontos"
}


function togglemode() {
  let html = document.documentElement

  html.classList.toggle("light")
}
