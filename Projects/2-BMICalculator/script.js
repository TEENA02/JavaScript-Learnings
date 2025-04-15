// const height=document.getElementById('height')
// const weight=document.getElementById('weight') if we declare globally on running it will store empy value in the variba;el
const form=document.querySelector('form')
//prevent the default action 
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)  
    console.log(document.querySelector('#height'))  
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    if( height ===''||height<0 || isNaN(height)){
        result.innerHTML="Please give a valid height"
    }
   else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML="please enter a valid weight"
    }else{
    result.innerHTML=`<span>${(weight /((height * height)/10000)).toFixed(2)}</span>`
    }
})
