const counter = document.getElementById("counter")
const minus = document.getElementById("-")
const plus = document.getElementById("+")
const like = document.getElementById("<3")
const pause = document.getElementById("pause")

let count = 0;
function counterInt() {
  count++
  return counter.innerHTML = count.toString()

}

(function() {
  setInterval(counterInt, 1000)
})()

// return counter.innerHTML = (parseInt(counter.innerHTML) + count).toString()
