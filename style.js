const timer = () =>{
    const date = new Date()

    const hour = (date.getHours())
    const minutes = (date.getMinutes())
    const seconds = (date.getSeconds())
    show.innerHTML= `${hour} : ${minutes} : ${seconds} `
    show.style.fontSize = "30px"
    show.style.color = "black"
    show.style.fontWeight = "bold"
}
setInterval(timer, 1000);

let song = new Audio("good.wav")
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
    let stp = prompt("DO YOU HAVE ANY ACTIVITY FOR THE DAY?")
    if(stp = "Yes"){
        alert("Wake up")
    }
    else if(stp = "No"){
       alert("Rest")
    }
}



// function timer(){
//     const date =new Date();

//     const hour =(date.getHours());
//     const minutes =(date.getMinutes());
//     const seconds =(date.getSeconds())
//     show.innerHTML= `${hour} : ${minutes} : ${seconds}`
//     setInterval(timer, 1000);
// }