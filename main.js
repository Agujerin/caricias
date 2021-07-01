"use strict"

import { itemFound,itemFoundSign } from "./helpers.js"

//NAVIGATION MENU
let href = location.href
const home = document.getElementById('home')
const levelOne = document.getElementById('levelOne')
const levelTwo = document.getElementById('levelTwo')

if (href.includes("level1")) levelOne.classList.add("nav-item-selected")
else if (href.includes("level2")) levelTwo.classList.add("nav-item-selected")
else home.classList.add("nav-item-selected")


//SHOW CHARACTERS LIST 
if (href.includes("level")){
    
    document.getElementById ("list-btn").addEventListener("click",()=>{
        document.getElementById ("aside").classList.toggle("showList")
    })
    document.getElementById ("close-btn").addEventListener("click",()=>{
        document.getElementById ("aside").classList.remove("showList")
    })
    
    document.getElementById("reloadBtn").addEventListener("click",()=> location.reload())
}

//LEVEL 1
let countL1 = 18
let countL2 = 15

const counter =(count,index)=>{
    count --
    itemFound(index)
    itemFoundSign(index)
}

if (href.includes("level1")){

let ElisaMaradoniana = false
let RebordMenemista = false
let CristianRadical = false
let EspirituAlfonsin = false
let tatuajeMaradona = false
let OrnitorrincoCosmico = false
let TatiAlmeyda = false
let Niceforo = false
let Pepetito = false
let CacaLanata = false
let CasaCristian = false
let CampingForster = false
let TuTubo = false
let Fierrito = false
let Tecito = false
let CaballoElisa = false
let ChorroRebord = false
let GallinaNavarro = false

document.getElementById("img1").addEventListener("click",(e)=>{
    let x = e.offsetX
    let y = e.offsetY
    
    if (x > 425.5 && x < 453.5 && y > 538.1875 && y < 600.1875 &&  !ElisaMaradoniana){
        ElisaMaradoniana = true
        counter(countL1,1)
    }else if (x > 770.5 && x < 818.5 && y > 128.1875 && y < 154.1875 && !RebordMenemista){
        RebordMenemista = true
        counter(countL1,3)
    }else if (x > 319.3 && x < 343.3 && y > 381.16 && y < 405.16 && !CristianRadical){
        CristianRadical = true
        counter(countL1,5)
    }else if (x > 72.6 && x < 103.6 && y > 303.83 && y < 354.50 && !EspirituAlfonsin){
        EspirituAlfonsin = true
        counter(countL1,7)
    }else if (x > 844.6 && x < 863.3 && y > 254.5 && y < 310.50 && !tatuajeMaradona){
        tatuajeMaradona = true
        counter(countL1,9)
    }else if (x > 304.6 && x < 324.6 && y > 505.1 && y < 549.16 && !OrnitorrincoCosmico){
        OrnitorrincoCosmico = true
        counter(countL1,11)
    }else if (x > 499.3 && x < 526.3 && y > 197.16 && y < 254.5 && !TatiAlmeyda){
        TatiAlmeyda = true
        counter(countL1,13)
    }else if (x > 602 && x < 623.3 && y > 149.16 && y < 190.5 && !Niceforo){
        Niceforo = true
        counter(countL1,15)
    }else if (x > 968.6 && x < 987.3 && y > 458.5 && y < 479.8 && !Pepetito){
        Pepetito = true
        counter(countL1,17)
    }else if (x > 114 && x < 124.6 && y > 513.16 && y < 525.16 && !CacaLanata){
        CacaLanata = true
        counter(countL1,19)
    }else if (x > 959.3 && x < 983.3 && y > 77.16 && y < 101.16 && !CasaCristian){
        CasaCristian = true
        counter(countL1,21)
    }else if (x > 255.3 && x < 310 && y > 413.16 && y < 474.5 && !CampingForster){
        CampingForster = true
        counter(countL1,23)
    }else if (x > 767.3 && x < 794 && y > 317.16 && y < 345.16 && !TuTubo){
        TuTubo = true
        counter(countL1,25)
    }else if (x > 46 && x < 67.3 && y > 114.5 && y < 147.8 && !Fierrito){
        Fierrito = true
        counter(countL1,27)
    }else if (x > 892.6 && x < 906 && y > 174.5 && y < 187.8 && !Tecito){
        Tecito = true
        counter(countL1,29)
    }else if (x > 22 && x < 76.6 && y > 614.5 && y < 657.16 && !CaballoElisa){
        CaballoElisa = true
        counter(countL1,31)
    }else if (x > 603.3 && x < 634 && y > 203.8 && y < 229.16 && !ChorroRebord){
        ChorroRebord = true
        counter(countL1,33)
    }else if (x > 128.6 && x < 152.6 && y > 149.16 && y < 173.16 && !GallinaNavarro){
        GallinaNavarro = true
        counter(countL1,35)
    }  
    
    if (countL1 === 0){document.getElementById("play").classList.add ("win")} 
})
}


//LEVEL 2
if (href.includes("level2")){

let Elisa = false
let RebordColibri = false
let CristianPaz = false
let Ñoquis = false
let bondi = false
let MarquibotsPena = false
let BabyJeezus = false
let MileiDyGaga = false
let tucan = false
let gatoServisky = false
let FelipePigna = false
let SylvestreNavarro = false
let fantasma = false
let BebeComunista = false
let misterio = false

document.getElementById ("img2").addEventListener("click",(e)=>{
    let x = e.offsetX
    let y = e.offsetY
    
    if (x > 720.6 && x < 751.3 && y > 426.5 && y < 509.16 && !Elisa){
        Elisa = true
        counter(countL2,1)
    }else if (x > 35.3 && x < 79.3 && y > 46.5 && y < 85.16 && !RebordColibri){
        RebordColibri = true
        counter(countL2,3)
    }else if (x > 271.3 && x < 298 && y > 394.5 && y < 461.16 && !CristianPaz){
        CristianPaz = true
        counter(countL2,5)
    }else if (x > 455.3 && x < 484.6 && y > 241.16 && y < 261.16 && !Ñoquis){
        Ñoquis = true
        counter(countL2,7)
    }else if (x > 0.6 && x < 115.3 && y > 181.16 && y < 238.5 && !bondi){
        bondi = true
        counter(countL2,9)
    }else if (x > 43.3 && x < 79.3 && y > 319.8 && y < 363.8 && !MarquibotsPena){
        MarquibotsPena = true
        counter(countL2,11)
    }else if (x > 160.6 && x < 179.3 && y > 225.16 && y < 253.16 && !BabyJeezus){
        BabyJeezus = true
        counter(countL2,13)
    }else if (x > 127.3 && x < 160.6 && y > 417.16 && y < 485.16 && !MileiDyGaga){
        MileiDyGaga = true
        counter(countL2,15)
    }else if (x > 919.3 && x < 986 && y > 470.5 && y < 513.16 && !tucan){
        tucan = true
        counter(countL2,17)
    }else if (x > 616.6 && x < 684.6 && y > 633.16 && y < 679.8 && !gatoServisky){
        gatoServisky = true
        counter(countL2,19)
    }else if (x > 650 && x < 678 && y > 329.16 && y < 358.5 && !FelipePigna){
        FelipePigna = true
        counter(countL2,21)
    }else if (x > 475.3 && x < 526 && y > 507.8 && y < 577.16 && !SylvestreNavarro){
        SylvestreNavarro = true
        counter(countL2,23)
    }else if (x > 274 && x < 320.6 && y > 47.8 && y < 101.16 && !fantasma){
        fantasma = true
        counter(countL2,25)
    }else if (x > 956.6 && x < 982 && y > 377.16 && y < 414.5 && !BebeComunista){
        BebeComunista = true
        counter(countL2,27)
    }else if (x > 832.6 && x < 974 && y > 551.8 && y < 627.8 && !misterio){
        misterio = true
        counter(countL2,29)
    }
    
    if (countL2 === 0){document.getElementById("play").classList.add ("win")} 
})
}