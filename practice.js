const headings = document.getElementsByTagName('h3')

for(let j = 0; j < headings.length; j++){
    headings[j].classList.add('head')
}

const headingsClass = document.querySelectorAll('.head')

for(i = 0; i < headingsClass.length; i++){
    let element = headingsClass[i]
    const paragraph = document.createElement('p')
    element.parentNode.insertBefore(paragraph, element)
    paragraph.innerText = element.innerText
    element.remove()
}