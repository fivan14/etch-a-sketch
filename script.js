const mainDiv = document.querySelector('#main-div')
const input = document.querySelector('#input-value')
const displayGrid = document.querySelector('#display-grid')
const gridVisibility = document.querySelector('#grid-visibility')
const slider = document.querySelector('#myRange')
const userChoice = document.querySelector('#user-choice')

//const gridNum = Number.parseInt(,10)


console.log(document.querySelectorAll('div').length)

//function that add's divs

function addDivs(gridSize) {
    mainDiv.innerHTML = ''
    if (gridSize > 64) {
        return alert('Hey, max grid size is 64x64!')
    }
    let divHeight = 300 / gridSize
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            mainDiv.insertAdjacentHTML('beforeend', `<div class='grid' style='background-color: white; height: ${divHeight - 2}px; width: ${divHeight - 2}px; border: 1px solid black;'></div>`)
        }
    }
}
// function that changes background color on hover

function onHover(target) {
    if (target.classList.contains('grid')) {
        console.log('Hooray')
        console.log(target)
        target.style.backgroundColor = 'gray'
    }
}

function onLeave(target) {
    console.log('mouse left')
    if (target.classList.contains('grid')) {
        console.log('Hooray')
        console.log(target)
        setTimeout(() => {
            target.style.backgroundColor='white'
        }, 1000)
        
    }
}


// event listener for change color on mouseover

mainDiv.addEventListener('mouseover', event => {
    let element = event.target
    console.log(element.classList.contains('grid'))
    onHover(element)

})



//back to original color on mouse out

mainDiv.addEventListener('mouseout', event => {
    let element = event.target
    onLeave(element)
})


// event listener for slider
console.log(slider.value)
slider.addEventListener('input', event => {
    
    console.log(slider.value)
    userChoice.textContent = `${slider.value} x ${slider.value}`
    addDivs(slider.value)
})

