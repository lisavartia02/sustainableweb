const toggleBtn = document.querySelector('.theme-toggle')
const moonIcon = document.querySelector('.moon-icon')
const sunIcon = document.querySelector('.sun-icon')
const nav = document.querySelector('nav')

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    nav.classList.toggle("dark") //adds the class dark
    moonIcon.classList.toggle("hidden") // hides the icons respectively
    sunIcon.classList.toggle("hidden")
})

