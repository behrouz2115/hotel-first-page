
const preLoader = document.querySelector('.preLoader');
const wellcome = document.querySelector('.wellcome');
const main = document.querySelector('.main');
const sig = document.querySelector('.sig');

function sigLoader(){
  sig.style.opacity = '0';

}
function timeLoader(){
  preLoader.style.opacity = '0';
  main.style.opacity = '1';    
  main.style.transition = 'all 1s ease-in-out';
}
setTimeout(() => {
  timeLoader();
  
}, "4000");






