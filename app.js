function squareNumber(number) {
	return number * number;
  }
let myNumber = 5;
let mySquaredNumber = squareNumber(myNumber);
console.log(mySquaredNumber); 


function calculateDiscountedPrice(initialPrice, discountPercentage) {
	let discountAmount = initialPrice * (discountPercentage / 100);
	let discountedPrice = initialPrice - discountAmount;
	return discountedPrice;
  }
  let initialPrice = 1000;
let discountPercentage = 10;
let discountedPrice = calculateDiscountedPrice(initialPrice, discountPercentage);
console.log(discountedPrice);

let randomNum = generateRandomNumber();
console.log(randomNum);
function generateRandomNumber() {
	let randomNumber = Math.random() 
	 return Math.floor(randomNumber); 
}

let myString = "Hello";
let stringLength = calculateStringLength(myString);
console.log(stringLength);
function calculateStringLength(str) {
	return str.length;
  }

  let currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
];

let smallestRateCurrency = findCurrencyWithSmallestRate(currencies);
console.log(smallestRateCurrency); 

function findCurrencyWithSmallestRate(currencies) {
	let smallestRateCurrency = currencies[0]; 
	for (let i = 1; i < currencies.length; i++) {
	  if (currencies[i].rate < smallestRateCurrency.rate) {
		smallestRateCurrency = currencies[i];
	  }
	}
	return smallestRateCurrency;
  }
  
