// Getting all DOM outputs fields
const totalOutput = document.getElementById("total-output");
const discountOutput = document.getElementById("discount-output");
const grandTotal = document.getElementById("grand-total-output");
const cartEntry = document.getElementById("log-output");
let discountStatus = false;

// Getting discount rate
const discount = document.getElementById("discount-rate").innerText.split('% ')[0];

// Getting Coupon Code
const couponCode = document.getElementById("coupon-code").innerText;

function addToCart(card) {
	const name = card.querySelector("h2").innerText;
	const newEntry = document.createElement("li");

	// Adding New Entries on log
	newEntry.innerText = name;
	cartEntry.appendChild(newEntry);
	document.getElementById("log-hr-line").style.display = "block";

	// Calculating Discount and Total
	const price = card.querySelector("span").innerText;
	totalValue = totalOutput.innerText;
	const totalOutputValue = parseFloat(totalValue) + parseFloat(price);	
	let off = 0;
	if(discountStatus) off = totalOutputValue * discount / 100;

	// Setting Outputs
	totalOutput.innerText = totalOutputValue.toFixed(2);
	discountOutput.innerText = off.toFixed(2);
	grandTotal.innerText = (totalOutputValue - off).toFixed(2);
}

const applyBtn = document.getElementById("coupon-apply-btn");
const couponInput = document.getElementById("coupon-input");

couponInput.addEventListener("keyup", () => {
	if(couponInput.value === couponCode) {
		applyBtn.removeAttribute("disabled");
		applyBtn.style.backgroundColor = "#E527B2"
	} else {
		applyBtn.style.backgroundColor = "#17171760";
		applyBtn.setAttribute("disabled", "")
	}
})

applyBtn.addEventListener("click", () => {
	discountStatus = true;
	const total = parseFloat(totalOutput.innerText);
	const off = total * discount / 100;
	discountOutput.innerText = off.toFixed(2);
	grandTotal.innerText = (total - off).toFixed(2);
});
