// Getting all DOM outputs fields
const totalOutput = document.getElementById("total-output");
const discountOutput = document.getElementById("discount-output");
const grandTotal = document.getElementById("grand-total-output");
const cartEntry = document.getElementById("log-output")

// Getting discount rate
const discount = document.getElementById("discount-rate").innerText.split('% ')[0];

function addToCart(card) {
	const name = card.querySelector("h2").innerText;
	const newEntry = document.createElement("li");

	// Adding New Entries on log
	newEntry.innerText = name;
	cartEntry.appendChild(newEntry);
	document.getElementById("log-hr-line").style.display = "block";

	const price = card.querySelector("span").innerText;
	totalValue = totalOutput.innerText;
	const totalOutputValue = parseFloat(totalValue) + parseFloat(price);	
	const off = totalOutputValue * discount / 100;

	// Setting Outputs
	totalOutput.innerText = totalOutputValue.toFixed(2);
	discountOutput.innerText = off.toFixed(2);
	grandTotal.innerText = (totalOutputValue - off).toFixed(2);
}
