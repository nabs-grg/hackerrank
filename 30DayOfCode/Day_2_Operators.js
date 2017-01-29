    // Write your code here
    tipPercent = mealCost * (tipPercent/100);
    taxPercent = mealCost * (taxPercent/100);
    // Use console.log() to print to stdout
    var totalCost = mealCost + tipPercent + taxPercent;

    console.log('The total meal cost is ' + totalCost.toFixed(0) + ' dollars.');