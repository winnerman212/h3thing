
const h3AddClass = document.getElementsByTagName('h3')
const h3 = document.querySelectorAll('.second')


// function insertAfter(p, elem) {
//     elem.parentNode.insertBefore(p, elem.nextSibling);
// }

for (i = 0; i < h3AddClass.length; i++){
    h3AddClass[i].classList.add('second')
}

for (i = 0; i < h3.length; i++){
    elem = h3[i]
    const p = document.createElement('p')
    elem.parentNode.insertBefore(p, elem)
    p.innerText = elem.innerText
 elem.remove()
}


// h3.remove()