// Getting all DOM outputs fields
const totalOutput = document.getElementById("total-output");
const discountOutput = document.getElementById("discount-output");
const grandTotal = document.getElementById("grand-total-output");
const cartEntry = document.getElementById("log-output");
const couponInput = document.getElementById("coupon-input");
const applyBtn = document.getElementById("coupon-apply-btn");
const purchaseBtn = document.getElementById("make-purchase-btn");

// Disable buttons by default
applyBtn.setAttribute("disabled", "");
purchaseBtn.setAttribute("disabled", "");

// Getting discount values
const discount = document.getElementById("discount-rate").innerText.split('% ')[0];
const minDiscountAmount = document.getElementById("discount-amount").innerText.split(' ')[2];

// Getting Coupon Code
const couponCode = document.getElementById("coupon-code").innerText;

// Apply condition on which buttons are enabled
function enableButton(currValue, targetValue, btn) {
	if(currValue >= targetValue) {
		btn.removeAttribute("disabled");
		btn.style.backgroundColor = "#E527B2"
	} else {
		btn.style.backgroundColor = "#17171760";
		btn.setAttribute("disabled", "")
	}
}

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

	// Setting Outputs
	enableButton(totalOutputValue, 1, purchaseBtn);
	enableButton(totalOutputValue, minDiscountAmount, applyBtn);

	const finalOutputValue = totalOutputValue.toFixed(2);
	totalOutput.innerText =	finalOutputValue ;
	grandTotal.innerText = finalOutputValue;
}

applyBtn.addEventListener("click", () => {
	if(couponInput.value === couponCode) {
		const total = parseFloat(totalOutput.innerText);
		const off = total * discount / 100;
		discountOutput.innerText = off.toFixed(2);
		grandTotal.innerText = (total - off).toFixed(2);
	} else alert("Invalid Coupon Code");	
});

purchaseBtn.addEventListener("click", () => {

})
