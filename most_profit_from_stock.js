// https://www.codewars.com/kata/597ef546ee48603f7a000057/javascript

function getMostProfitFromStockQuotes(quotes) {
  let profit = 0;
  let stockCount = 0;
  
  for (let i = 0; i < quotes.length; i++) {
    let bestPrice = quotes[i];
    for (let j = i + 1; j < quotes.length; j++) {
      if (quotes[j] > bestPrice) {
        bestPrice = quotes[j];
      }
    }

    if (bestPrice > quotes[i]) {
      stockCount++;
      profit -= quotes[i];
    } else if (bestPrice === quotes[i]) {
      profit += stockCount * bestPrice;
      stockCount = 0;
    }
  }

  return profit;
}
