const para = document.createElement("p") //create new element, p
para.textContent = "Hey I'm red!" //add text content
para.style.cssText = "color:red" //style text red
container.appendChild(para) //add para to container

const h3 = document.createElement("h3")
h3.textContent = "I'm a blue h3!"
h3.style.color = "blue"
container.appendChild(h3)

const div = document.createElement("div")
div.style.border = "1px black solid"
div.style.backgroundColor = "pink"
container.appendChild(div)

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"
div.appendChild(h1)

const para2 = document.createElement("p")
para2.textContent = "ME TOO!"
div.appendChild(para2)

const btn = document.querySelector("#btn")
//Method 1 - don't use, only 1 onclick allowed
// btn.onclick = () => alert("Hello World")

// Method 2 - better, but still only 1 onclick allowed
// const btn = document.querySelector("#btn")
// btn.onclick = () => alert("Hello World")

// Method 3 - even better, allows multiple concerns/clicks
// const btn = document.querySelector("#btn")
// btn.addEventListener("click", () => {
//   alert("Hello World")
// })

// Method 4 - named functions
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue"
})

//Selecting multiple/similar elements
const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id)
  })
})
