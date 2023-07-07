import { login } from "./requests.js";
import { colorAlert, colorSuccess, toast } from "./toast.js";


function handleLogin() {
  const inputs = document.querySelectorAll('.login__input');
  const loginButton = document.querySelector('.button-login');
  const registerLogin = document.querySelector('.button-register');
  const loginBody = {};
  let count = 0;

  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    inputs.forEach(input => {

      if (input.value.trim() === '') {
        count++;
      }
      loginBody[input.name] = input.value;
    });

    if (count !== 0) {
      count = 0;
      toast('Certifique-se de digitar todos os campos corretamente!', colorAlert);
    } else {
      login(loginBody);
    }
  })

}

function redirectToRegister() {
  const registerButtons = document.querySelectorAll('.button-register');
  registerButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      toast('Redirecionando para página de cadastro!', colorSuccess);
      setTimeout(() => {
        window.location.replace('../pages/register.html');
      }, 1500);
    })
  })
}

function redirectToHomePage() {
  const buttonsHome = document.querySelectorAll('.button-home');
  buttonsHome.forEach(button => {
    button.addEventListener('click', () => {
      toast('Redirecionando para Home...', colorSuccess);
      setTimeout(() => {
        window.location.replace('../../index.html');
      }, 1500);
    });
  });
}

handleLogin();
redirectToRegister();
redirectToHomePage();