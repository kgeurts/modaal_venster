/* Variabele die alle content van de modale vensters krijgt */
const modaalContent = document.querySelectorAll('.modaalContent');

/* Alle modale content verwijderen uit het DOM*/
 for(let i=0; i<modaalContent.length; i++) {
	let modaalNode = modaalContent[i];
	modaalNode.parentNode.removeChild(modaalNode);
}

/*Nodelist van alle modale knoppen, die inhoud moeten oproepen*/
const modaalKnoppen = document.querySelectorAll('.modaal-knop')
const modaalKnoppenArray = [];

/*Toekomstige node-elementen aanmaken in variabelen*/
let modaalAchtergrond = document.createElement('div');
modaalAchtergrond.className = 'modaal-achtergrond';
let modaal = document.createElement('div');
modaal.className = 'modaal';
let sluitKnop = document.createElement('button');
sluitKnop.className = 'sluit-knop';
sluitKnop.innerHTML = '&#x00D7;';

/*modale content aan DOM toevoegen*/
const voegInhoudToe = (event) => {
	const teller = modaalKnoppenArray.indexOf(event.target);
	console.log(teller);
	modaal.appendChild(sluitKnop);
	modaal.appendChild(modaalContent[teller]);
	modaalAchtergrond.appendChild(modaal);
	document.body.appendChild(modaalAchtergrond);
}
/*Sluit het modale venster */
const sluitModaal = () => {
	modaal.innerHTML='';
	modaalAchtergrond.innerHTML ='';
	document.body.removeChild(modaalAchtergrond);
}

/*SluitKnop event sluiten afgeschreven*/
sluitKnop.addEventListener('click', sluitModaal);

/*Alle modaalknoppen in een Array plaatsen eventListener koppelen*/

for(let i=0; i < modaalKnoppen.length; i++){
	/*Toevoegen aan de Array*/
	modaalKnoppenArray.push(modaalKnoppen[i]);
	/* Klik event toevoegen */
	modaalKnoppen[i].addEventListener('click',voegInhoudToe);
}
