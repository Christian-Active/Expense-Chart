
let bars = document.querySelectorAll(".bar")
let today = new Date().getDay()
if(today == 0){
  bars[today + 6].classList.add("complete")
}else{
  bars[today - 1].classList.add("complete")
}
let amounts = document.getElementsByClassName("amount")

bars.forEach((bar, i) => {
  bar.addEventListener("click", function(e){
    let id = e.target.id
    let form = bars[id].parentElement
    let form2 = form.querySelector("h5")
    form2.innerHTML = dayAndAmount[id].amount
    form2.classList.add("amount")
  })
})
let dayAndAmount = [
  {
    "day": "mon",
    "amount": "$17.45"
  },
  {
    "day": "tue",
    "amount": "$34.91"
  },
  {
    "day": "wed",
    "amount": "$52.36"
  },
  {
    "day": "thu",
    "amount": "$31.07"
  },
  {
    "day": "fri",
    "amount": "$23.39"
  },
  {
    "day": "sat",
    "amount": "$43.28"
  },
  {
    "day": "sun",
    "amount": "$25.48"
  }
]