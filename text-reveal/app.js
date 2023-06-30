let paragraphs = [...document.querySelectorAll("p")]

let spans = []

paragraphs.forEach(paragraph => {
    let htmlString = ''
    let pArray = paragraph.textContent.split('')
    for (let index = 0; index < pArray.length; index++) {
        htmlString += `<span>${pArray[index]}</span>`
    }

    paragraph.innerHTML = htmlString
})

spans = [...document.querySelectorAll("span")]

function revealSpans() {
    for (let index = 0; index < spans.length; index++) {
        if(spans[index].parentElement.getBoundingClientRect().top < window.innerHeight / 2) {
            let { left, top} = spans[index].getBoundingClientRect()
            top = top - (window.innerHeight * 0.4)
            let opacityValue = 1 - ((top * 0.01) + (left * 0.0001)) < 0.1 ? 0.1 : 1 - ((top * 0.01) + (left * 0.0001)) .toFixed(3)
            opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3)
            spans[index].style.opacity = opacityValue
        }
    }
}


window.addEventListener("scroll", () => {
    revealSpans()
})
