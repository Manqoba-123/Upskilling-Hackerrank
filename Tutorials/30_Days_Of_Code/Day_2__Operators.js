function operators() {
    const prompt = require("prompt-sync")();
    let meal_amount = parseFloat(prompt("Enter meal amount:"));
    let tip_percent = parseInt(prompt("Enter tip percent:"));
    let tax_percent = parseInt(prompt("Enter tax percent:"));

    let tip = (meal_amount / 100) * tip_percent;
    let tax = (tax_percent / 100) * meal_amount;
    let total_cost = parseInt(meal_amount + tip + tax);
    console.log(total_cost); 
}

operators();