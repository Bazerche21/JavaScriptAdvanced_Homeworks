let callBtn = document.getElementById("callBtn");
let resultElement = document.getElementById("result");

callBtn.addEventListener("click", function () {
    fetch("https://swapi.dev/api/people/1")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("characterName").textContent = data.name;
            characterStats(resultElement, data);
        })
        .catch(function (error) {
            console.log('Error fetching data:', error);
        });
});

function characterStats(resultElement, character) {
    let heightElement = resultElement.querySelector('#height');
    let weightElement = resultElement.querySelector('#weight');
    let eyeColorElement = resultElement.querySelector('#eyeColor');
    let hairColorElement = resultElement.querySelector('#hairColor');

    heightElement.textContent = character.height;
    weightElement.textContent = character.mass;
    eyeColorElement.textContent = character.eye_color;
    hairColorElement.textContent = character.hair_color;
}