import '../scss/main.scss';
import moment from 'moment'

/* place your code below */

console.log('HELLO 🚀')


const hamburgerButton = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation--js");

const hamburgerMenu = () => {
  navigation.classList.toggle("navigation--js");
};

hamburgerButton.addEventListener("click", hamburgerMenu);

const dataAndTime = document.querySelector('.dataAndTime');
dataAndTime.innerHTML = moment().format("MMM Do YY");  
