const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30) // blurring function will occur on int, increasing int by 1 every 30 miliseconds

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int) // once the value of int reached 100, it stops. 
    }

    loadText.innerText = `${load}%` //loadText % will now count up to 100
    loadText.style.opacity = scale(load, 0, 100, 1, 0) // as load goes from 0 to 100, opacity goeas from 1 to 0. i.e the number fades out as it goes to 100. 
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` //background image goes from 30px blur to 0 blur as the load num goes from 0 to 100. 
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers