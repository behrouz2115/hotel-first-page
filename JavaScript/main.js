
const preLoader = document.querySelector('.preLoader');
const main = document.querySelector('.main');
const sig = document.querySelector('.sig');
const wellcome = document.querySelector('.wellcome');

function wellCome(){
  wellcome.style.opacity = '1';
}
function sigLoader(){
  sig.style.opacity = '1';
}
function timeLoader(){
  preLoader.style.opacity = '0';
  main.style.opacity = '1';    
  preLoader.style.zIndex = '0'
  main.style.zIndex = '1'
};
setTimeout(()=>{
  wellCome()
},'3000')
setTimeout(()=>{
    sigLoader()
},'1000')

setTimeout(() => {
  timeLoader();
  
}, "7000");







