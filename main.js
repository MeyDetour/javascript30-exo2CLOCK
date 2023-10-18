const min = document.querySelector(".min")
const hour = document.querySelector(".hour")
const sec = document.querySelector(".sec")


setInterval(()=>{
    console.log(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds())
    hour.style.transform = 'rotate('+(-90 + new Date().getHours() * 30)+'deg)'
    min.style.transform = 'rotate('+(-90+ new Date().getMinutes() * 6)+'deg)'
    sec.style.transform = 'rotate('+(-90  +new Date().getSeconds() * 6)+'deg)'},100)