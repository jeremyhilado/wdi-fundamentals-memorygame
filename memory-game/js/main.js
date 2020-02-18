const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

let card0ne = cards[2];
cardsInPlay.push(card0ne);
let cardTwo = cards[3];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again.")
	}
}
