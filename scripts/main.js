const cont = document.getElementById("cards-container");
const container = cont.children[0].children[1];
const cards = container.children;
console.log(cards);

for(let card of cards) {
	for(let i = 0; i < card.childElementCount; i++) {
		console.log(card.children[i]);
	}
}
