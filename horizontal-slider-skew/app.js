const container = document.querySelector('.container')

window.onscroll = () => {
    container.style.left = `${-window.scrollY}px`
}

let currentPos = container.getBoundingClientRect().left
console.log(currentPos)

const callDistort = () => {
    console.log('called')
    let newPos = container.getBoundingClientRect().left
    console.log('new pos', newPos)
    let diff = newPos - currentPos
    let speed = diff * 0.35
    console.log('speed', speed)

    container.style.transform = `skewX(${speed}deg)`
    currentPos = newPos

    requestAnimationFrame(callDistort)
}

callDistort()