
function calculatePrice() {
    let price, discount;

    while (true) {
        price = parseFloat(prompt("Enter the price:"));
        if (!isNaN(price) && price > 0) break;
        console.log("Invalid price. Please enter a positive number.");
    }

    while (true) {
        discount = prompt("Enter the discount (leave blank for default 10%):");
        if (discount === "") {
            discount = 10;
            break;
        }
        discount = parseFloat(discount);
        if (!isNaN(discount) && discount >= 0) break;
        console.log("Invalid discount. Please enter a non-negative number.");
    }

    let finalPrice = price - (price * discount / 100);
    return finalPrice.toFixed(2);
}

console.log("Final price:", calculatePrice());
