let touches = document.querySelectorAll('.touche')
let operateur = document.querySelectorAll('.operateur')
let remise = document.getElementById('remise')
let screen = document.getElementById('screen')
let resultat = document.getElementById('result')
let col = document.querySelectorAll('.col')
remise.addEventListener('click', () => {
    screen.value = ""
})
console.log(operateur)
console.log(screen)
touches.forEach(element => {
    element.addEventListener('click', () =>
        screen.value += element.innerHTML
    )
});


let calcul;
let newCalcul;


operateur.forEach(element => {
    element.addEventListener('click', (a, b) => {
        a = Number(screen.value)
        screen.value = ""
        touches.forEach(element => {
            element.addEventListener('click', () => {
                b = Number(element.innerText)
            })
        })
        resultat.addEventListener('click', () => {
            
                switch (element.innerText) {
                    case "+":
                        return screen.value=a+b ;
                    break;

                    case "-":
                        return screen.value=a-b ;
                     break;
                    case "÷":
                        return screen.value=a/b ;
                    break;
                    case "x":
                        return screen.value=a*b ;
                    break;
                    
                    default:  ; 
                    break

                }
            })
        


    })
});

let dark = document.getElementById('dark')
dark.addEventListener('click', ()=>{
   dark.innerText="Light Mode" ; 
    col.forEach(element=>{
        element.classList.toggle('dark')
    })

})