const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const restartEl = document.getElementById('restart');

clipboardEl.addEventListener('click', function() {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(password == 0) {
		return; 
	}
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

restartEl.addEventListener('click', function() {
	document.location.href = "index.html";
});

generateEl.addEventListener('click', function() {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});
//removes unchecked options
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';

	// Array to hold functions
	var randomFunctionsToUse = [];

	if (upper === true) {
		randomFunctionsToUse.push(getRandomUpper);
	}

	if (lower === true) {
		randomFunctionsToUse.push(getRandomLower);
	}

	if (number === true) {
		randomFunctionsToUse.push(getRandomNumber);
	}

	if (symbol === true) {
		randomFunctionsToUse.push(getRandomSymbol);
	}

	// Doesn't have a selected checkbox
	if(upper === false && number === false && symbol === false && lower === false) {
		return 'Select an option to Generate'; 
	}
	
	// create a loop
	for (let i = 0; i < length; i += 1) {
		generatedPassword += randomFunctionsToUse[Math.floor(Math.random() * randomFunctionsToUse.length)]();
	}
	
	return generatedPassword;
} 

	//create random using lower case character set 'abcdefghijklmnopqrstuvwxyz'
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
	//create random using upper case character set 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
	//create random using numbers character set '0123456789'
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
	//create random using symbols character set '!@#$%^&*(){}[]=<>/,.'
function getRandomSymbol() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
}