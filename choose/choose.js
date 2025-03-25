let calculator = document.querySelector("#calcu")
let galery = document.querySelector("#galery")
let logout = document.querySelector("#logout")
let DandT = document.querySelector("#DandT")

//para sa log out
logout.addEventListener('click', ()=>{

    window.location.href = "../index.html"
})

//papunta sa gallery
galery.addEventListener('click', ()=>{

    window.location.href = "../galery/galery.html"
})

//papunta sa calcu
calculator.addEventListener('click', ()=>{

    window.location.href = "../calculator/calcu.html"
})
//papunta sa calcu
DandT.addEventListener('click', ()=>{

    window.location.href = "../DandT/dateNTime.html"
})

window.oncontextmenu = (e)=>{

    e.preventDefault()
}