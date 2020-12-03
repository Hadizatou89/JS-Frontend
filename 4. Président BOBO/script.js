const bttn = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
Array = ["La Mangue qui quitte de l'arbre ne doit jamais oublier qu'elle tombera par terre","L'oiseau sur le baobab ne doit pas oublier qu'il a porté des lunettes !","(après un coup de taser sur Didier) Il est tombé comme du n'importe quoi, on dirait la girafe qui s'emmêle les pattes."];
function bobo() {
    let n = Math.floor(Math.random()*3);
    quote.textContent = Array[n];
}
bttn.addEventListener("click", bobo);