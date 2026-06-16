const display = document.getElementById("dis")
const plusBtn = document.getElementById("btnplus")
const resetBtn = document.getElementById("btnreset")
const minusBtn = document.getElementById("btnminus")

let count = 0

plusBtn.addEventListener("click", () => {
    count++
    display.innerText = count
})

minusBtn.addEventListener("click", () => {
    count--
    display.innerText = count
})

resetBtn.addEventListener("click", () => {
    count = 0
    display.innerText = count
})

