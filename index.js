const rating1 = document.querySelector("#one")
const rating2 = document.querySelector("#two")
const rating3 = document.querySelector("#three")
const rating4 = document.querySelector("#four")
const rating5 = document.querySelector("#five")
const submit = document.querySelector("#submit")

submit.disabled = "true"
let rated = 0

rating1.addEventListener("click", function(){
    submitEnable()
    console.log("click")
    rated = 1
})


rating2.addEventListener("click", function(){
    submitEnable()
    console.log("click")
    rated = 2
})


rating3.addEventListener("click", function(){
    submitEnable()
    console.log("click")
    rated = 3
})


rating4.addEventListener("click", function(){
    submitEnable()
    console.log("click")
    rated = 4
})


rating5.addEventListener("click", function(){
    submitEnable()
    console.log("click")
    rated = 5
})

submit.addEventListener("click", function(){
    document.querySelector("h1").textContent = `You selected ${rated} out of 5`
    document.querySelector("p").textContent = `Thank you for your rating!`
    document.querySelector("div").textContent = `Thank you so so so so so so so so so much`
    document.querySelector("div").style.opacity = "0.5"
    submit.remove()
})

function submitEnable() {
    submit.disabled = false
}