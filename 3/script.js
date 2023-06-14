function generateSquare() {
	var phraseInput = document.getElementById('phrase');
	var phrase = phraseInput.value;

	// Eliminar espacios y signos de puntuación
	var cleanedPhrase = phrase.replace(/[^\w\s]/g, '').replace(/\s/g, '');

	// Obtener el contenedor del cuadrado
	var squareContainer = document.getElementById('square');
	squareContainer.innerHTML = '';

	// Recorrer las letras de la frase en orden inverso
	for (var i = cleanedPhrase.length - 1; i >= 0; i--) {
		// Crear un elemento <div> para cada letra
		var letterDiv = document.createElement('div');
		letterDiv.className = 'letter';
		letterDiv.style.backgroundColor = getRandomColor();

		// Añadir la letra al elemento <div>
		var letter = document.createTextNode(cleanedPhrase[i]);
		letterDiv.appendChild(letter);

		// Añadir el elemento <div> al contenedor del cuadrado
		squareContainer.appendChild(letterDiv);
	}
}

function reset() {
	var phraseInput = document.getElementById('phrase');
	phraseInput.value = '';

	var squareContainer = document.getElementById('square');
	squareContainer.innerHTML = '';
}

function saveToCookie() {
	var phraseInput = document.getElementById('phrase');
	var phrase = phraseInput.value;

	document.cookie = 'lastPhrase=' + phrase;
	alert('La última frase guardada en cookie es: ' + phrase);
}

function loadFromCookie() {
	var cookie = document.cookie;
	var lastPhrase = getCookieValue(cookie, 'lastPhrase');

	if (lastPhrase) {
		var phraseInput = document.getElementById('phrase');
		phraseInput.value = lastPhrase;

		alert('La última frase guardada en cookie es: ' + lastPhrase);
	} else {
		alert('No se encontró ninguna frase en la cookie.');
	}
}

function getCookieValue(cookie, name) {
	var value = '; ' + cookie;
	var parts = value.split('; ' + name + '=');

	if (parts.length === 2) {
		return parts.pop().split(';').shift();
	}

	return null;
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';

	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}
