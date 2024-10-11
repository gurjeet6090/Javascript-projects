const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    document.getElementsByClassName("overlay-left")[0].style.background= "linear-gradient(to right,#4f3479, #8f24c7)";
   });

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    document.getElementsByClassName("overlay-right")[0].style.background= "linear-gradient(to right, #8f24c7,#4f3479)";

});
