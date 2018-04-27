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

let iffy = setInterval(counterInt, 1000)

// (function() {
//   setInterval(counterInt, 1000)
// })()

minus.addEventListener("click", function() {
  // clearInterval(iffy)
  count -= 1
  }
)
plus.addEventListener("click", function() {
  counterInt()
  }
)
