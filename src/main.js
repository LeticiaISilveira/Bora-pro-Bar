import homePage from "../pages/mainpageNotlogged.js"
import loginPage from "../pages/login.js"
import registerPage from "../pages/register.js"
import homeLogged from "../pages/mainpageLogged.js"
import barDetails from "../pages/chosenBar.js"

const user = firebase.auth().currentUser;
const main = document.getElementById('aqui');

const homeMain = () => {
	main.innerHTML = homePage();
}

const loginMain = () => {
	main.innerHTML = loginPage();
}

const registerMain = () => {
	main.innerHTML = registerPage();
}

const homeLoggedMain = () => {
	main.innerHTML = homeLogged();
}

// const barPage = () => {
// 	main.innerHTML = barDetails();
// }

const hash = () => {
	firebase.auth().onAuthStateChanged((user) =>
	{
  		if (user) {
  			if (location.hash === '') {
  				return homeLoggedMain();
  			} else if (location.hash === '#mainlogged') {
  				return homeLoggedMain();
  			} 
  			// else if (location.hash === '#bar') {
  			// 	return barPage();
  			// }
  		} else {
  			if (location.hash === '') {
  				return homeMain();
  			} else if (location.hash === '#register') {
  				return registerMain();
  			} else if (location.hash === '#login') {
  				return loginMain();
  			}
  		}
		})
	// if (location.hash ===  '') {
	// 	return homeMain();
	// } else if (location.hash === '#login') {
	// 	return loginMain();
	// } else if (location.hash === '#register') {
	// 	return registerMain();
	// }
}

window.addEventListener('load', hash)
window.addEventListener('hashchange', hash)
