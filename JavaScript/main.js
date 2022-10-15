
const preLoader = document.querySelector('.preLoader');
const main = document.querySelector('.main');
const sig = document.querySelector('.sig');

function sigLoader(){
  sig.style.opacity = '1';

}
function timeLoader(){
  preLoader.style.opacity = '0';
  main.style.opacity = '1';    
  main.style.transition = 'all 1s ease';

};
setTimeout(()=>{
    sigLoader()
},'1000')

setTimeout(() => {
  timeLoader();
  
}, "7000");







