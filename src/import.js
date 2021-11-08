import {screen} from "./main.js"

export const suppr = document.getElementById('delete')
suppr.addEventListener('click', ()=> {
    let a_suppr = screen.value.length-1
    screen.value = screen.value.substring(0,a_suppr)
})





