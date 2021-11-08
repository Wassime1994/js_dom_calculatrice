let touches = document.querySelectorAll('.touche')
let operateur = document.querySelectorAll('.operateur')
let remise = document.getElementById('remise')
let screen = document.getElementById('screen')
let resultat = document.getElementById('result')
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
        a = screen.value
        screen.value = ""
        touches.forEach(element => {
            b = screen.value
        })


        console.log(a + b)        
    })
});