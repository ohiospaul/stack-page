const day = document.querySelector('.dateday');
const time = document.querySelector('.datetime');

function daybtn(date){
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return `${days[date.getDay()]}`
}


function timebtn(date){
    const hrs = date.getHours() % 12 || 12;
    const min = date.getMinutes()
    const sec = date.getSeconds()
    const ampm = date.getHours() < 12 ? 'AM' : 'PM';
   
    return `${hrs} : ${min} : ${sec} ${ampm}`
}


setInterval(()=>{
    const maindate = new Date()
    day.textContent = daybtn(maindate);
    time.textContent = timebtn(maindate)
}, 1000)

