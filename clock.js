const hourHand = document.getElementById('hour');
const minHand = document.getElementById('minute');
const secHand = document.getElementById('second');

function Rotate(element, ratio){
    element.style.setProperty('--x', ratio * 360);
}
setInterval(() => {
    const curTime = new Date();
    const sec = curTime.getSeconds()/60;
    const min =(sec + curTime.getMinutes())/60;
    const hour = (min + curTime.getHours())/12;

    Rotate(hourHand,hour);
    Rotate(minHand,min);
    Rotate(secHand,sec);

    document.getElementById('hourTime').innerHTML = curTime.getHours()<10?`0${curTime.getHours()}`:curTime.getHours();
    document.getElementById('minuteTime').innerHTML = curTime.getMinutes()<10?`0${curTime.getMinutes()}`:curTime.getMinutes();
    document.getElementById('secondTime').innerHTML = curTime.getSeconds()<10?`0${curTime.getSeconds()}`:curTime.getSeconds();
},1000);

