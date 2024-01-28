let currentPage = 1;

function fetchPlanets(apiUrl) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayPlanets(data.results);
        })
        .catch(error => console.error('Error fetching planets:', error));
}

function displayPlanets(planets) {
    const tableBody = document.getElementById('planetsBody');
    tableBody.innerHTML = '';

    planets.slice(0, 10).forEach(planet => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
        `;
        tableBody.appendChild(row);
    });

    document.getElementById('planetsStats').style.display = 'table';
}

function updateTable() {
    document.getElementById('planetsStats').style.display = 'none';
    fetchPlanets(`https://swapi.dev/api/planets/?page=${currentPage}`);
}

let fetchAndDisplayBtn = document.getElementById("fetchAndDisplayBtn");

fetchAndDisplayBtn.addEventListener('click', function () {
    currentPage = 1;
    fetchPlanets(`https://swapi.dev/api/planets/?page=${currentPage}`);

    let nextTenButton = document.createElement("button");
    nextTenButton.innerHTML = "NEXT 10";
    document.getElementById("newButton").appendChild(nextTenButton);

    let previousButton = document.createElement("button");
    previousButton.innerText = "PREVIOUS 10";
    previousButton.style.position = 'static';
    document.getElementById("newButton").appendChild(previousButton);
    previousButton.style.visibility = 'hidden';

    nextTenButton.addEventListener('click', function () {
        currentPage++;
        updateTable();

        nextTenButton.style.visibility = 'hidden';
        previousButton.style.visibility = 'visible';
    });

    previousButton.addEventListener('click', function () {
        currentPage--;
        updateTable();
        nextTenButton.style.visibility = 'visible';
        previousButton.style.visibility = 'hidden';
    });
});


