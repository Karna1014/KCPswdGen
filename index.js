const posEl = document.getElementById('pos');
const negEl = document.getElementById('neg');
const messageText = document.getElementById('message');

posEl.addEventListener('click', function() {
	document.location.href = "pswd.html";
});

negEl.addEventListener('click', function() {
	messageText.innerText = "Thank you for stopping by!";
});