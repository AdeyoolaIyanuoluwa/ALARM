const timer = () =>{
    const date = new Date()

    const hour = (date.getHours())
    const minutes = (date.getMinutes())
    const seconds = (date.getSeconds())
    show.innerHTML= `${hour} : ${minutes} : ${seconds} <img src="clock-removebg-preview.png" height="70" alt="">`
    // show.style.fontSize = "32px"
    // show.style.color = "black"
    // show.style.fontWeight = "bold"
}
setInterval(timer, 1000);

let song = new Audio("alarm.mp3")
const alarm =() => {
    let myHour = setHour.value
    let myMinute = setMinute.value
    d = new Date()
    if(myHour == d.getHours() && myMinute == d.getMinutes()){
            song.play()
    }
    setTimeout(alarm,1000)
}

const stopAlarm = () =>{
    alert("Solve this equation")
    let stp = prompt("(50*50) + 100")
    if(stp == "2600"){
        alert("Wake up")
        location.reload()
    }
    else if(stp !== "2600"){
       alert("Incorrect")
    }
}
