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
dataAndTime.innerHTML += moment().format("MMM Do YY");  

const darkButton = document.querySelector(".dark-button");

darkButton.addEventListener("click", changeMode);


let isDark = false; 

function changeMode(){
      
    if(!isDark){
        document.body.style.setProperty('background', 'var(--background-color-darkmode)');
        document.body.style.setProperty('color', 'var(--text-color-darkmode)');
        darkButton.innerHTML = "Light mode";
        isDark = true;
    }

    else{
        document.body.style.setProperty('background', 'var(--background-color-lightmode)');
        document.body.style.removeProperty('color', 'var(--text-color-lightmode)');
        darkButton.innerHTML = "Dark mode";
        isDark = false;
    }
}
