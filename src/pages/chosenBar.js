import Button from '../components/button.js'

const openPromo = () => {
	console.log('ok')
}

const barDetails = (name, acessibilidade, avaliacao, endereco, extras) => {	
	window.location.hash = 'bar';
	const template = `
	<h1>${name}</h1>
	<p class='stars'>${avaliacao}</p>
	<p class='money'></p>
	<p class='endereco'>${endereco}</p>
	<p class='promo'>${extras}</p>
	${Button({
		id:'btn-take-promo',
		class:'btn-promo',
		type:'submit',
		title:'Pegar cupom!!!',
		onclick: openPromo
	})}
	`;
	document.querySelector('main') = template;
}

window.barDetails = barDetails;
//export default barDetails