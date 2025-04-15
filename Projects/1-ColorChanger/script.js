const button=document.querySelectorAll('.Button')
const body=document.querySelector('body')
button.forEach((btn)=>{
console.log(btn)
btn.addEventListener('click',(e)=>{
console.log(e);
if(e.target.id==="yellow"){
    body.style.backgroundColor=e.target.id
}
if(e.target.id==="green"){
    body.style.backgroundColor=e.target.id
}
if(e.target.id==="cyan"){
    body.style.backgroundColor=e.target.id
}
if(e.target.id==="purple"){
    body.style.backgroundColor=e.target.id
}
})
})