const secArrow = document.querySelector('.s'),
    minArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes')

function clock() {
    let time = new Date(),
        second = time.getSeconds(),
        minute = time.getMinutes(),
        hour = time.getHours()
    secArrow.style.transform = `rotate(${second * 6}deg)`
    minArrow.style.transform = `rotate(${minute * 6}deg)`
    hourArrow.style.transform = `rotate(${hour * 30}deg)`

    setTimeout(()=>{clock()},1000);

    hourNum.innerHTML = hour<10 ? `0${hour}` : hour
    minNum.innerHTML = minute<10 ? `0${minute}` : minute
}
clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem')

tabsItem.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        tabsItem.forEach((item,j)=>{
            item.classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        })
        item.classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
})

const tabsLink = document.querySelectorAll('.tabsLink__span'),
      stopwatch__hours = document.querySelector('.stopwatch__hours'),
      stopwatch__minutes = document.querySelector('.stopwatch__minutes'),
      stopwatch__seconds = document.querySelector('.stopwatch__seconds'),
      stopwatch__btn = document.querySelector('.stopwatch__btn');

let stopMin = 0,
    stopSec = 0,
    stopHour = 0,
    toxtat = false


function daqiqaYangilash() {
    stopwatch__hours.textContent   = stopHour   < 10 ? `0${stopHour}`   : stopHour;
    stopwatch__minutes.textContent = stopMin    < 10 ? `0${stopMin}`    : stopMin;
    stopwatch__seconds.textContent = stopSec    < 10 ? `0${stopSec}`    : stopSec;
}

function startStopwatch() {
    interval = setInterval(() => {
        console.log(stopwatch__seconds);
        if (toxtat) return;
        stopSec++;
        if (stopSec > 59) {
            stopSec = 0;
            stopMin++;
        }else if (stopMin > 59) {
            stopMin = 0;
            stopHour++;
        }else if (stopHour > 23) {  
            stopHour = 0;
        }
        daqiqaYangilash();
    }, 1000);
}

function stopStopwatch() {
    toxtat = true
}

function resetStopwatch() {
    toxtat = true
    stopHour = 0
    stopMin = 0
    stopSec = 0;
    daqiqaYangilash();
}
console.log(tabsLink);

stopwatch__btn.addEventListener('click', () => {
    if (stopwatch__btn.textContent === "start") {
        
        tabsLink[0].classList.add("active");
        toxtat =false
        startStopwatch();
        stopwatch__btn.textContent = "stop";
        
    } else if (stopwatch__btn.textContent === "stop") {
        tabsLink[0].classList.add("active_clear");
        stopStopwatch();
        stopwatch__btn.textContent = "reset";
    } else {
        resetStopwatch();
        stopwatch__btn.textContent = "start";
        tabsLink[0].classList.remove('active');
        tabsLink[0].classList.remove('active_clear');
    }
});


daqiqaYangilash();
