let changeTextColor = (element, color = 'black') => {

    let targetElement = document.getElementById(element)

    if (targetElement) {
        element.style.color = color;
    } else {
        console.error(`Element with ID '${element}' not found.`);
    }
}

let changeTextSize = (element, textSize = '24') => {

    let targetElement = document.getElementById(element)

    if (targetElement) {
        element.style.fontSize = textSize + 'px';
    } else {
        console.error(`Element with ID '${element}' not found.`);
    }
}


let btn = document.getElementById("changeBtn");
let header = document.getElementsById("styledHeading");
let textSizeInput = document.getElementById("textSize").value;
let colorInput = document.getElementById("changeColor").value;

btn.addEventListener('click', () => {
    changeTextColor(header, colorInput.value || 'black');
    changeTextSize(header, parseInt(textSizeInput.value) || 24);
})