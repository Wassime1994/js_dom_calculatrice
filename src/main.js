import {suppr} from "./import.js"
let touches = document.querySelectorAll('.touche')
let operateur = document.querySelectorAll('.operateur')
let remise = document.getElementById('remise')
export let screen = document.getElementById('screen')
let resultat = document.getElementById('result')
let col = document.querySelectorAll('.col')
let span = document.querySelector('span')
remise.addEventListener('click', () => {
    screen.value = ""
    location.reload()
})
touches.forEach(element => {
    element.addEventListener('click', () =>
        screen.value += element.innerHTML
    )
});

operateur.forEach(element => {
    let index = true
    element.addEventListener('click', (a, b) => {
        if(index==true) { 
        
        a = Number(screen.value)
        screen.value = ""
        index=false
        touches.forEach(element => {
            element.addEventListener('click', () => {
                b = Number(element.innerText)
            })
        })
        resultat.addEventListener('click', () => {
            index = true
            switch (element.innerText) {
                    case "+":
                        span.innerText = a + "+" + b+ "="
                        return screen.value=Math.floor(a+b) ;
                    case "-":
                        span.innerText = a + "-" + b+ "="

                        return screen.value=Math.floor(a-b) ;
                     
                    case "÷":
                        span.innerText = a + "÷" + b+ "="
                        if(b!==0) { 
                        return screen.value=Math.floor(a/b) ;
                        }
                        else{
                           return  screen.value="ERROR"}
                  
                    case "x":
                        span.innerText = a + "x" + b+ "="
                        
                        return screen.value=Math.floor(a*b) ;
                    
                    
                    default:  ; 
                    break

                }
            
            })
    }
    else { 
        screen.value="ERROR 404"
        // window.addEventListener('click', ()=>{
        //     location.reload()
        //     setTimeout(()=>{
        //     } , 1000)
        // })
    }

    })
});

let dark = document.getElementById('dark')
dark.addEventListener('click', ()=>{
   dark.innerText="Light Mode" ; 
    col.forEach(element=>{
        element.classList.toggle('dark')
    })

})
