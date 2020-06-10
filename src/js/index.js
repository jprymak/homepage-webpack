import "../scss/main.scss";
import moment from "moment";

/* place your code below */

console.log("HELLO 🚀");

/* hamburger menu */
const hamburgerButton = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation--js");

const hamburgerMenu = () => {
  navigation.classList.toggle("navigation--js");
};

hamburgerButton.addEventListener("click", hamburgerMenu);

/* Data and time */
const dataAndTime = document.querySelector(".dataAndTime");
dataAndTime.innerHTML += moment().format("MMM Do YY");

/* Light and dark mode */
const darkButton = document.querySelector(".dark-button");

darkButton.addEventListener("click", changeMode);

let isDark = false;

function changeMode() {
  if (!isDark) {
    document.body.style.setProperty("--background-color", "black");
    document.body.style.setProperty("--text-color", "white");
    darkButton.innerHTML = "Light mode";
    isDark = true;
  } else {
    document.body.style.setProperty(
      "--background-color",
      "linear-gradient(90deg, rgba(167, 165, 205, 0.5690651260504201) 1%,rgba(218, 220, 221, 0.4598214285714286) 100%, rgba(0, 212, 255, 1) 100%)"
    );
    document.body.style.removeProperty("--text-color", "black");
    darkButton.innerHTML = "Dark mode";
    isDark = false;
  }
}
