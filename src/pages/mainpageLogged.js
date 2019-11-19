import Button from "../components/button.js"
import Input from "../components/input.js"

const logout = () => {
	firebase.auth().signOut().then( () => {
		window.location.hash = '';
	})
}

const barDetails = (id, event) => {	
	event.preventDefault();
	firebase.firestore().collection('bars').doc(id).get().then( bar => {
			const template = `
			<section class='bar'>
				<h1 class='bar-name-title'>${bar.data().name}</h1>
				<img class='img-bar' src='${bar.data().picture}'>
				<p class='desc-bar'>O boteco simples e aconchegante é famoso por seus petiscos diferenciados e pelo chope cremoso.</p>
				<p class='add-bar'>${bar.data().endereco}</p>
				<p class='phone-bar'>(11) 5096-1152</p>
				<p class='extras-bar'>${bar.data().extras.join(', ')}</p>
				<p class='stars-bar'>${bar.data().avaliacao}</p>
				<div class='regulamento-bar'>
					<h2 class='bar-reg-title'>Regulamento da Promoção</h2>
					<ul>
						<li class='bar-reg-itme'>Cupom não cumulativo</li>
						<li class='bar-reg-itme'>Válido até 22/12/2019</li>
					</ul>
				</div>
				<button type='submit' class='btn-cupom' id='pegarcupom' onclick=pegarcumpom()>Pegar cupom</button>
			</section>`;
		return document.querySelector('main').innerHTML = template;
		})			
}

const voltar = () => {
	window.location.hash = '';
}

const pegarcumpom = () => {
	const template = `
	${Button({
		id:'voltar',
		title:'voltar',
		class:'btn-back',
		onclick: voltar
	})}
	<div class='cupom-container'>
		<h1 class='bar-name'>Bar Bella Santos</h1>
		<img src='images/qrcode.jpeg' class='qrcodeimage'/>
		<img class='imgbar'/>
		<p>Cupom Salvo</p>
		<p>Valide o QRCode no estabelecimento</p>
	</div>
	`;
	return document.querySelector('main').innerHTML = template
}


const homeLogged = () => {	
			const template = `
			<div class='top'>
    		<div class='loginRegister-logout'>
					${Button({
						id:'btn-logout',
						class:'btn',
						type:'submit',
						title:'Sair',
						onclick: logout
					})}
    		</div> 
  		</div>
  		<section class='map'>
    		<div class='search'>Aqui vai a barra de pesquisa 
     		</div>
    		<div class='map-container' id='map'>
     			Aqui vai o mapa
    		</div>
  		</section>
  		<section class='bar'
				${Button({
					value:'Bar Bela Santos',
					id:'CUvUsqpwc4zuzhTqRvAa',
					class:'btn-bar',
					type:'submit',
					title:'<img src="./images/bar-bela-santos.jpeg">',
					onclick: barDetails
				})}
			</section>
			`;			
			// ${Button({
			// 	value:'MeGusta Bar',
			// 	id:'Ld1W21vzIyOetbld5uDY',
			// 	class:'btn-bar',
			// 	type:'submit',
			// 	title:'<img src="./images/me-gusta-bar.jpeg" style="float:left;margin-right:0.5em">',
			// 	onclick: barDetails
			// })}
			// ${Button({
			// 	value:'Lanchonete Bella Jau',
			// 	id:'LMe7A8KzuzjsMVkPVuPd',
			// 	class:'btn-bar',
			// 	type:'submit',
			// 	title:'<img src="./images/lanchonete-bella-jau.jpeg" style="float:left;margin-right:0.5em">',
			// 	onclick: barDetails
			// })}
			// ${Button({
			// 	value:'Orange Point',
			// 	id:'kA7KsjYOsU7fS5Kaf6GO',
			// 	class:'btn-bar',
			// 	type:'submit',
			// 	title:'<img src="./images/orange-point.jpeg" style="float:left;margin-right:0.5em">',
			// 	onclick: barDetails
			// })}
			// ${Button({
			// 	id:'GSJGrI91vMwwBvWVDJIV',
			// 	class:'btn-bar',
			// 	type:'submit',
			// 	title:'<img src="./images/o-malley.jpeg" style="float:left;margin-right:0.5em">',
			// 	onclick: barDetails
			// })}
			// ${Button({
			// 	id:'btn-logout',
			// 	class:'btn',
			// 	type:'submit',
			// 	title:'Sair',
			// 	onclick: logout
			// })}			
	window.location.hash='mainlogged';	
	return template
}

window.pegarcumpom = pegarcumpom;
export default homeLogged;
