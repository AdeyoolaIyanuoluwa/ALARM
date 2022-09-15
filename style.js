const timer = () =>{
    const date = new Date()

    const hour = (date.getHours())
    const minutes = (date.getMinutes())
    const seconds = (date.getSeconds())
    show.innerHTML= `${hour} : ${minutes} : ${seconds} <img src="stopw-removebg-preview.png" height="70" alt="">`
    show.style.fontSize = "32px"
    show.style.color = "black"
    show.style.fontWeight = "bold"
}
setInterval(timer, 1000);

let song = new Audio("case.mp3")
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
    let stp = prompt("")
    if(stp == "Yes"){
        alert("Wake up")
    }
    else if(stp !== "Yes"){
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