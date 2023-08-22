let container = document.querySelector('.container')
let canvas = document.querySelector('.canvas')
let columnOne = document.querySelector('.one')
let columnTwo = document.querySelector('.two')
let columnThree = document.querySelector('.three')
let columnFour = document.querySelector('.four')

for (let index = 0; index < 16; index++) {
    let imgDiv = document.createElement('div')
    let imgEl = document.createElement('img')
    imgEl.setAttribute('src', `./images/${index}.jpg`)
    imgDiv.appendChild(imgEl)

    if(index < 5) {
        columnOne.appendChild(imgDiv)
    } else if (index < 9) {
        columnTwo.appendChild(imgDiv)
    } else if (index < 13) {
        columnThree.appendChild(imgDiv)
    } else {
        columnFour.appendChild(imgDiv)
    }
    
}

window.addEventListener("mousemove", (e) => {
    let x = e.clientX - container.getBoundingClientRect().left
    let y = e.clientY - container.getBoundingClientRect().top

    canvas.style.transform = `translate(-${x}px, -${y*2}px)`
})