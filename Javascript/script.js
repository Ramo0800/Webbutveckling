let förnamn = document.getElementById("förnamn")
let efternamn = document.getElementById("efternamn")
let resultat = document.getElementById("resultat")

function skapaMejl(){
    resultat.innerHTML = förnamn.value + "." + efternamn.value + "@mejladdres.com"
}

let röd = Math.random() * 255
let blå = Math.random() * 255
let grön = Math.random() * 255

document.body.style.background = "rgb(" + röd + "," +  blå + "," + grön 

//rgb(255,255,0)