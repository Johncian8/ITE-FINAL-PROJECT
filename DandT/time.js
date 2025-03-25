setInterval(()=>{

    let date = new Date()

    
    document.querySelector("#cd").innerHTML = date.toDateString()
    
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    
    hour = hour.toString()
    
    if(hour.length < 2){

        hour = `0${hour}`
    }
    
    minute = minute.toString()
    
    if(minute.length < 2){
        
        minute = `0${minute}`
    }
    
    second = second.toString()
    
    if(second.length < 2){
        
        second = `0${second}`
    }
    document.querySelector("#hour").innerHTML = hour
    document.querySelector("#minute").innerHTML = minute
    document.querySelector("#second").innerHTML = second

}, 1000)

window.oncontextmenu = (e)=>{

    e.preventDefault()
    window.location.href = "../choose/choose.html"
}