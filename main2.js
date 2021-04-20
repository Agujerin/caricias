//MOSTRAR LISTADO DE PERSONAJES
document.getElementById ("list-btn").addEventListener("click",()=>{
    document.getElementById ("aside").classList.add("showList")
})

document.getElementById ("close-btn").addEventListener("click",()=>{
    document.getElementById ("aside").classList.remove("showList")
})

//FUNCIONES
const itemFound = ((a)=>{
    let child= document.getElementById ("asideList").childNodes[a]
    child.classList.add ("itemFound")
    console.log(counter--)
})

const itemFoundSign = ((a)=>{
    let child = document.getElementById ("asideList").childNodes[a].textContent
    let sign = document.createElement ("DIV")
    sign.classList.add ("itemFoundSignStyles")
    sign.innerText = `¡Encontraste a ${child}!`
    let container = document.getElementById ("levelContainer").appendChild(sign)
        setTimeout (()=>{
            container.removeChild(container.firstChild)
            sign.classList.remove ("itemFoundSignStyles")
        },1200)
})

document.getElementById("reloadBtn").addEventListener("click",()=>{ location.reload()})


//BÚSQUEDA NIVEL
let counter = 15

document.getElementById ("img2").addEventListener("click",(e)=>{
    console.log (e.offsetX, e.offsetY)
    if (e.offsetX > 720.6 && e.offsetX < 751.3 && e.offsetY > 426.5 && e.offsetY < 509.16) {
        itemFound(1)
        itemFoundSign(1)
    }
    else if (e.offsetX > 35.3 && e.offsetX < 79.3 && e.offsetY > 46.5 && e.offsetY < 85.16) {
        itemFound(3)
        itemFoundSign(3)
    }
    else if (e.offsetX > 271.3 && e.offsetX < 298 && e.offsetY > 394.5 && e.offsetY < 461.16) {
        itemFound(5)
        itemFoundSign(5)
    }
    else if (e.offsetX > 455.3 && e.offsetX < 484.6 && e.offsetY > 241.16 && e.offsetY < 261.16) {
        itemFound(7)
        itemFoundSign(7)
    }
    else if (e.offsetX > 0.6 && e.offsetX < 115.3 && e.offsetY > 181.16 && e.offsetY < 238.5) {
        itemFound(9)
        itemFoundSign(9)
    }
    else if (e.offsetX > 43.3 && e.offsetX < 79.3 && e.offsetY > 319.8 && e.offsetY < 363.8) {
        itemFound(11)
        itemFoundSign(11)
    }
    else if (e.offsetX > 160.6 && e.offsetX < 179.3 && e.offsetY > 225.16 && e.offsetY < 253.16) {
        itemFound(13)
        itemFoundSign(13)
    }
    else if (e.offsetX > 127.3 && e.offsetX < 160.6 && e.offsetY > 417.16 && e.offsetY < 485.16) {
        itemFound(15)
        itemFoundSign(15)
    }
    else if (e.offsetX > 919.3 && e.offsetX < 986 && e.offsetY > 470.5 && e.offsetY < 513.16) {
        itemFound(17)
        itemFoundSign(17)
    }
    else if (e.offsetX > 616.6 && e.offsetX < 684.6 && e.offsetY > 633.16 && e.offsetY < 679.8) {
        itemFound(19)
        itemFoundSign(19)
    }
    else if (e.offsetX > 650 && e.offsetX < 678 && e.offsetY > 329.16 && e.offsetY < 358.5) {
        itemFound(21)
        itemFoundSign(21)
    }
    else if (e.offsetX > 475.3 && e.offsetX < 526 && e.offsetY > 507.8 && e.offsetY < 577.16) {
        itemFound(23)
        itemFoundSign(23)
    }
    else if (e.offsetX > 274 && e.offsetX < 320.6 && e.offsetY > 47.8 && e.offsetY < 101.16) {
        itemFound(25)
        itemFoundSign(25)
    }
    else if (e.offsetX > 956.6 && e.offsetX < 982 && e.offsetY > 377.16 && e.offsetY < 414.5) {
        itemFound(27)
        itemFoundSign(27)
    }
    else if (e.offsetX > 832.6 && e.offsetX < 974 && e.offsetY > 551.8 && e.offsetY < 627.8) {
        itemFound(29)
        itemFoundSign(29)
    }
    
    if (counter==0){document.getElementById("play").classList.add ("win")} 
})
