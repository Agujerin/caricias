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
let counter = 18

document.getElementById ("img1").addEventListener("click",(e)=>{
    console.log (e.offsetX, e.offsetY)
    if (e.offsetX > 425.5 && e.offsetX < 453.5 && e.offsetY > 538.1875 && e.offsetY < 600.1875) {
        itemFound(1)
        itemFoundSign(1)
    }
    else if (e.offsetX > 770.5 && e.offsetX < 818.5 && e.offsetY > 128.1875 && e.offsetY < 154.1875) {
        itemFound(3)
        itemFoundSign(3)
    }
    else if (e.offsetX > 319.3 && e.offsetX < 343.3 && e.offsetY > 381.16 && e.offsetY < 405.16) {
        itemFound(5)
        itemFoundSign(5)
    }
    else if (e.offsetX > 72.6 && e.offsetX < 103.6 && e.offsetY > 303.83 && e.offsetY < 354.50) {
        itemFound(7)
        itemFoundSign(7)
    }
    else if (e.offsetX > 844.6 && e.offsetX < 863.3 && e.offsetY > 254.5 && e.offsetY < 310.50) {
        itemFound(9)
        itemFoundSign(9)
    }
    else if (e.offsetX > 304.6 && e.offsetX < 324.6 && e.offsetY > 505.1 && e.offsetY < 549.16) {
        itemFound(11)
        itemFoundSign(11)
    }
    else if (e.offsetX > 499.3 && e.offsetX < 526.3 && e.offsetY > 197.16 && e.offsetY < 254.5) {
        itemFound(13)
        itemFoundSign(13)
    }
    else if (e.offsetX > 602 && e.offsetX < 623.3 && e.offsetY > 149.16 && e.offsetY < 190.5) {
        itemFound(15)
        itemFoundSign(15)
    }
    else if (e.offsetX > 968.6 && e.offsetX < 987.3 && e.offsetY > 458.5 && e.offsetY < 479.8) {
        itemFound(17)
        itemFoundSign(17)
    }
    else if (e.offsetX > 114 && e.offsetX < 124.6 && e.offsetY > 513.16 && e.offsetY < 525.16) {
        itemFound(19)
        itemFoundSign(19)
    }
    else if (e.offsetX > 959.3 && e.offsetX < 983.3 && e.offsetY > 77.16 && e.offsetY < 101.16) {
        itemFound(21)
        itemFoundSign(21)
    }
    else if (e.offsetX > 255.3 && e.offsetX < 310 && e.offsetY > 413.16 && e.offsetY < 474.5) {
        itemFound(23)
        itemFoundSign(23)
    }
    else if (e.offsetX > 767.3 && e.offsetX < 794 && e.offsetY > 317.16 && e.offsetY < 345.16) {
        itemFound(25)
        itemFoundSign(25)
    }
    else if (e.offsetX > 46 && e.offsetX < 67.3 && e.offsetY > 114.5 && e.offsetY < 147.8) {
        itemFound(27)
        itemFoundSign(27)
    }
    else if (e.offsetX > 892.6 && e.offsetX < 906 && e.offsetY > 174.5 && e.offsetY < 187.8) {
        itemFound(29)
        itemFoundSign(29)
    }
    else if (e.offsetX > 22 && e.offsetX < 76.6 && e.offsetY > 614.5 && e.offsetY < 657.16) {
        itemFound(31)
        itemFoundSign(31)
    }
    else if (e.offsetX > 603.3 && e.offsetX < 634 && e.offsetY > 203.8 && e.offsetY < 229.16) {
        itemFound(33)
        itemFoundSign(33)
    }
    else if (e.offsetX > 128.6 && e.offsetX < 152.6 && e.offsetY > 149.16 && e.offsetY < 173.16) {
        itemFound(35)
        itemFoundSign(35)
    }  
    
    if (counter==0){document.getElementById("play").classList.add ("win")} 
})
