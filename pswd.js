
const resultPg = document.getElementById('result');
const lengthPg = document.getElementById('length');
const uppercasePg = document.getElementById('uppercase');
const lowercasePg = document.getElementById('lowercase');
const numbersPg = document.getElementById('numbers');
const symbolsPg = document.getElementById('symbols');
const generatePg = document.getElementById('generate');
const clipboardPg = document.getElementById('clipboard');

//Object class
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {
	const length = +lengthPg.value;
	const hasLower = lowercasePg.checked;
	const hasUpper = uppercasePg.checked;
	const hasNumber = numbersPg.checked;
	const hasSymbol = symbolsPg.checked;
	
	resultPg.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});
//removes unchecked options
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter[(item => Object.values(item)[0])];

	// Doesn't have a selected type
	if(typesCount === 0) {
		return 'Select an option to Generate'; 
	}
	
	// create a loop
	for (let i = 0; i < length; i += 'typesCount') {
		var character = Math.floor(Math.random() * length);
			// typesArr.forEach(type => { 
				// const funcName = Object.keys(type)[0]; 
		generatedPassword += typesArr.substring(character, character + 1);	
			// });
		}
			//create password using selected parameters
			const finalPassword = generatedPassword.slice(0, length);
				return finalPassword;
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
	return String.fromCharCode(Math.floor(Math.random() * 10) * 48);
}
	//create random using symbols character set '!@#$%^&*(){}[]=<>/,.'
function getRandomSymbol() {
	return String.fromCharCode(Math.floor(Math.random() * 10));
}