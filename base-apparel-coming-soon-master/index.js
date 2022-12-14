let corInput = document.getElementById('input-text')
let error = document.getElementById('error')
let spanError = document.getElementById('span-error')


function teste() {
    let input = document.getElementById('input-text').value
    if(input === '') {
        corInput.style.borderColor = 'red'
        corInput.style.borderWidth = '2px'
        error.style.display = 'block'
        spanError.style.display = 'block'
    }
}

function ganhaFoco() {
    corInput.style.borderColor = 'hsl(0, 36%, 70%)'
    corInput.style.borderWidth = '1px'
    error.style.display = 'none'
    spanError.style.display = 'none'
}