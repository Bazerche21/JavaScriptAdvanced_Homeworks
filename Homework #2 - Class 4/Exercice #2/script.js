let changeTextColor = (element, color = 'black') => {
    let targetElement = document.getElementById(element);
    if (targetElement) {
        targetElement.style.color = color;
    } else {
        console.error(`Element with ID '${element}' not found.`);
    }
}

let changeTextSize = (element, textSize = 24) => {
    let targetElement = document.getElementById(element);
    if (targetElement) {
        targetElement.style.fontSize = textSize + 'px';
    } else {
        console.error(`Element with ID '${element}' not found.`);
    }
}

let btn = document.getElementById("changeBtn");

btn.addEventListener('click', () => {
    let header = document.getElementById("styledHeading");
    let textSizeInput = document.getElementById("textSize").value;
    let colorInput = document.getElementById("changeColor").value;

    changeTextColor("styledHeading", colorInput || 'black');
    changeTextSize("styledHeading", parseInt(textSizeInput) || 24);
});