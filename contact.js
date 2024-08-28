var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

var btn = document.getElementById("btn").addEventListener("click", function () {
    event.preventDefault()

    alert("Thank you for visiting our page. Our team will reach out to you shortly!")
})


