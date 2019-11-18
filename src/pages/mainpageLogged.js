import Button from "../components/button.js"
import Input from "../components/input.js"

const logout = () => {
	firebase.auth().signOut().then( () => {
		window.location.hash = '';
	})
}

const redirect = () => {
	const bar = document.querySelector('.btn-bar').value;
	firebase.firestore().collection('bars').get().then( snap => {
		snap.forEach(bar => {
			if (bar.data().name === bar) {
				window.barDetails(bar.data().name, bar.data().acessibilidade, bar.data().avaliacao, bar.data().endereco, bar.data().extras);
			}
		})})
				window.location.hash = 'bar';
}

const homeLogged = () => {	
			const template = `
			${Button({
				value:'Bar Bela Santos',
				id:'btn-bela',
				class:'btn-bar',
				type:'submit',
				title:'<img src="./images/bar-bela-santos.jpeg" style="float:left;margin-right:0.5em">',
				onclick: redirect
			})}
			${Button({
				value:'MeGusta Bar',
				id:'btn-me-gusta',
				class:'btn-bar',
				type:'submit',
				title:'<img src="./images/me-gusta-bar.jpeg" style="float:left;margin-right:0.5em">',
				onclick: redirect
			})}
			${Button({
				value:'Lanchonete Bella Jau',
				id:'btn-bella-jau',
				class:'btn-bar',
				type:'submit',
				title:'<img src="./images/lanchonete-bella-jau.jpeg" style="float:left;margin-right:0.5em">',
				onclick: redirect
			})}
			${Button({
				value:'Orange Point',
				id:'btn-orange',
				class:'btn-bar',
				type:'submit',
				title:'<img src="./images/orange-point.jpeg" style="float:left;margin-right:0.5em">',
				onclick: redirect
			})}
			${Button({
				id:'btn-bela',
				class:'btn-bar',
				type:'submit',
				title:'<img src="./images/bar-bela-santos.jpeg" style="float:left;margin-right:0.5em">',
				onclick: redirect
			})}
			${Button({
				id:'btn-logout',
				class:'btn',
				type:'submit',
				title:'Sair',
				onclick: logout
			})}`;
	window.location.hash='mainlogged';
	
	return template
}

export default homeLogged;
