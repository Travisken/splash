let output= document.querySelector("#output");
let decrease= document.querySelector(".subtract");
let increase= document.querySelector(".add");
let addToCart= document.querySelector(".addto");
let outputOne= document.querySelector(".specOutputOne");
let numOne= 0
increase.addEventListener('click',()=>{
    numOne++
    output.textContent=numOne
    
 
    })
decrease.addEventListener('click',()=>{
    numOne--
    output.textContent=numOne
    Math.floor
   

    })

    addToCart.addEventListener('click',()=>{
        number++
        output.textContent=number;
        if(number < 0){
            numOne=0 
        }
        
        })