const newYearDate = new Date(`1 Jan ${new Date().getFullYear()+1}`)

var daysEl = document.getElementById('days')
var hoursEl = document.getElementById('hours')
var minutesEl = document.getElementById('minutes')
var secondsEl = document.getElementById('seconds')

function countDown() {
    let currDate = new Date()
    let diff = newYearDate - currDate
    let seconds = Math.floor(diff / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    let days = Math.floor(hours / 24)
    daysEl.innerText = days
    hoursEl.innerText = hours - (days * 24)
    minutesEl.innerText = minutes - (hours * 60)
    secondsEl.innerText = seconds - (minutes * 60)
}

countDown()

setInterval(() => {
    countDown()
}, 1000)