const nome = "Pedro"
let xp = 2000
let nivel 

if (xp <= 1000) {
    console.log("Ferro")
    nivel = "Ferro"
} else if (xp >= 1001 &&  xp <= 2000) {
    console.log("Bronze")
     nivel = "Bronze"
} else if (xp >=2001 && xp <= 5000) {
    console.log("Prata")
    nivel = "Prata"
} else if (xp >=5001 && xp <= 7000) {
    console.log("Ouro")
    nivel = "Ouro"
} else if (xp >=7001 && xp <= 8000) {
    console.log("Platina")
    nivel = "Platina"
} else if (xp >=8001 && xp <= 9000) {
    console.log("Ascendente")
    nivel = "Ascendente"
} else if (xp >=9001 && xp <= 10000) {
    console.log("Imortal")
    nivel = "Imortal"
} else if (xp >= 10001) {
    console.log("Radiante")
    nivel = "Radiente"
}

console.log("O Herói de nome " + nome + " está no nível " + nivel)

