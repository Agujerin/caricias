//FUNCIONES
const itemFound = ((index)=>{
    let child= document.getElementById ("asideList").childNodes[index]
    child.classList.add ("itemFound")
})

const itemFoundSign = ((index)=>{
    let child = document.getElementById ("asideList").childNodes[index].textContent
    let sign = document.createElement ("DIV")
    sign.classList.add ("itemFoundSignStyles")
    sign.innerText = `¡Encontraste a ${child}!`
    let container = document.getElementById ("levelContainer").appendChild(sign)
        setTimeout (()=>{
            container.removeChild(container.firstChild)
            sign.classList.remove ("itemFoundSignStyles")
        },1200)
})

export {itemFound,itemFoundSign}