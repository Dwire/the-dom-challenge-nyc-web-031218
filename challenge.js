const counter = document.getElementById("counter")
const minus = document.getElementById("-")
const plus = document.getElementById("+")
const like = document.getElementById("<3")
const pause = document.getElementById("pause")

function counterInt() {
  parseInt(counter.innerHTML)++
}

(function() {
  setInterval(counterInt, 1000)
})()
