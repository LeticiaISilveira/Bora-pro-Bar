import Button from '../components/button.js'

const confirmacaoIdade = () => {
  let age = confirm("VOCÊ TEM MAIS DE 18 ANOS?");
  if(age ===true){
    console.log("muito bem")
  }else{
    console.log("Vá jogar LOL")
  }
}
//confirmacaoIdade()

const db = firebase.firestore();
  db.collection('bars').get().then((snap) => {
  snap.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
  })})
  
const homePage = () => {
  window.location.hash = '';
  const template = `
  <div class='top'>
    <div class='loginRegister-logout'></div> 
    <div class='loginRegister'>
      ${Button({
        class: 'btn-login',
        title:'Login',
        onclick: loginRoute
      })}
      ${Button({
        class:'btn-register',
        title:'Cadastro',
        onclick: registerRoute
      })} 
    </div>
  </div>
  <section class="map">
    <div class="search">Aqui vai a barra de pesquisa 
     </div>
    <div class="map-container" id="map">
     Aqui vai o mapa
    </div>
  </section>
  <section class='bar'>
    ${Button({
      value:'Bar Bela Santos',
      id:'CUvUsqpwc4zuzhTqRvAa',
      class:'btn-bar',
      type:'submit',
      title:'<img src="./images/bar-bela-santos.jpeg">',
      onclick: registerRoute
    })}
  </section>`;
  return template;
}


const loginRoute = () => {
  location.hash = 'login';
}

const registerRoute = () => {
  location.hash = 'register';
}

export default homePage;