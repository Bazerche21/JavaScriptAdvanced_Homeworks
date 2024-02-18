let currentPage = 1;
let nextButton = document.createElement('button');
let previousButton = document.createElement('button');
let nextShipsButton = document.createElement('button');
let previousShipsButton = document.createElement('button');
let nextPlanetsButton = document.createElement('button');
let previousPlanetsButton = document.createElement('button');

async function fetchData(apiUrl) {
    document.getElementById('loading').style.display = 'block';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Unable to fetch data');
        }
        const data = await response.json();
        if (apiUrl.includes('people')) {
            displayPeopleData(data.results);
            cosmonautTable.style.display = 'block';
            shipsTable.style.display = 'none';
            planetsTable.style.display = 'none';
        } else if (apiUrl.includes('starships')) {
            displayShipsData(data.results);
            cosmonautTable.style.display = 'none';
            shipsTable.style.display = 'block';
            planetsTable.style.display = 'none';
        } else if (apiUrl.includes('planets')) {
            displayPlanetsData(data.results);
            cosmonautTable.style.display = 'none';
            shipsTable.style.display = 'none';
            planetsTable.style.display = 'block';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

function updateCosmonautsTable() {
    document.getElementById('cosmonautStats').style.display = 'none';
    fetchData(`https://swapi.dev/api/people/?page=${currentPage}`);
}

function updateShipsTable() {
    document.getElementById('shipsStats').style.display = 'none';
    fetchData(`https://swapi.dev/api/starships/?page=${currentPage}`)
}

function updatePlanetsTable() {
    document.getElementById('planetsStats').style.display = 'none';
    fetchData(`https://swapi.dev/api/planets/?page=${currentPage}`);
}

let cosmonautBtn = document.getElementById("cosmonaut");
let shipsBtn = document.getElementById("ships");
let planetsBtn = document.getElementById("planets");

let cosmonautTable = document.getElementById("cosmonautStats");
let shipsTable = document.getElementById("shipsStats");
let planetsTable = document.getElementById("planetsStats");

cosmonautTable.style.display = 'none';
shipsTable.style.display = 'none';
planetsTable.style.display = 'none';

function displayPeopleData(cosmonauts) {
    let tableBody = document.getElementById("cosmonautBody");
    tableBody.innerHTML = '';

    cosmonauts.forEach(cosmonaut => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cosmonaut.name}</td>
            <td>${cosmonaut.height}</td>
            <td>${cosmonaut.mass}</td>
            <td>${cosmonaut.gender}</td>
            <td>${cosmonaut.birth_year}</td>
            <td>${cosmonaut.films.length}</td>
        `;
        tableBody.appendChild(row);
    })

    document.getElementById('cosmonautStats').style.display = 'block';
}

function displayShipsData(ships) {
    let tableBody = document.getElementById("shipsBody");
    tableBody.innerHTML = '';

    ships.forEach(ship => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ship.name}</td>
            <td>${ship.model}</td>
            <td>${ship.manufacturer}</td>
            <td>${ship.cost_in_credits}</td>
            <td>${ship.passengers}</td>
            <td>${ship.starship_class}</td>
        `;
        tableBody.appendChild(row);
    })
    document.getElementById('shipsStats').style.display = 'block';
}

function displayPlanetsData(planets) {
    let tableBody = document.getElementById("planetsBody");
    tableBody.innerHTML = '';
    planets.forEach(planet => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${planet.name}</td>
            <td>${planet.diameter}</td>
            <td>${planet.climate}</td>
            <td>${planet.terrain}</td>
            <td>${planet.population}</td>
        `;
        tableBody.appendChild(row);
    });
    document.getElementById('planetsStats').style.display = 'block';
}

cosmonautBtn.addEventListener('click', function () {

    fetchData(`https://swapi.dev/api/people/?page=${currentPage}`);
    shipsTable.style.display = 'none';
    planetsTable.style.display = 'none';
    cosmonautTable.style.display = 'block';

    nextShipsButton.style.display = 'none';
    previousShipsButton.style.display = 'none';
    nextPlanetsButton.style.display = 'none';
    previousPlanetsButton.style.display = 'none';
    nextButton.style.display = 'block';
    previousButton.style.display = 'block';

    nextButton.innerText = ">>";
    nextButton.classList.add('nextButton');
    previousButton.innerText = "<<";
    previousButton.classList.add('previousButton');

    document.getElementById("newButtons").appendChild(nextButton);
    document.getElementById("newButtons").appendChild(previousButton);

    nextButton.style.position = 'static';
    previousButton.style.position = 'static';
    previousButton.style.visibility = 'hidden';

    nextButton.addEventListener('click', function () {
        currentPage++;
        console.log("Current page in eventlistener: " + currentPage)
        updateCosmonautsTable();

        previousButton.style.visibility = 'visible';
    });

    previousButton.addEventListener('click', function () {
        currentPage--;
        updateCosmonautsTable();

        nextButton.style.visibility = 'visible';
    });
})

shipsBtn.addEventListener('click', function () {

    fetchData(`https://swapi.dev/api/starships/?page=${currentPage}`)
    cosmonautTable.style.display = 'none';
    planetsTable.style.display = 'none';
    shipsTable.style.display = 'block';

    nextButton.style.display = 'none';
    previousButton.style.display = 'none';
    nextPlanetsButton.style.display = 'none';
    previousPlanetsButton.style.display = 'none';
    nextShipsButton.style.display = 'block';
    previousShipsButton.style.display = 'block';

    nextShipsButton.innerText = ">>";
    nextShipsButton.classList.add('nextButton');
    previousShipsButton.innerText = "<<";
    previousShipsButton.classList.add('previousButton');

    document.getElementById("newButtons").appendChild(nextShipsButton);
    document.getElementById("newButtons").appendChild(previousShipsButton);

    nextShipsButton.style.position = 'static';
    previousShipsButton.style.position = 'static';
    previousShipsButton.style.visibility = 'hidden';

    nextShipsButton.addEventListener('click', function () {
        currentPage++;
        console.log("Current page in eventlistener: " + currentPage)
        updateShipsTable();

        previousShipsButton.style.visibility = 'visible';
    });

    previousShipsButton.addEventListener('click', function () {
        currentPage--;
        updateShipsTable();

        nextShipsButton.style.visibility = 'visible';
    });
})

planetsBtn.addEventListener('click', function () {

    fetchData(`https://swapi.dev/api/planets/?page=${currentPage}`);
    shipsTable.style.display = 'none';
    cosmonautTable.style.display = 'none';
    planetsTable.style.display = 'block';

    nextShipsButton.style.display = 'none';
    previousShipsButton.style.display = 'none';
    nextButton.style.display = 'none';
    previousButton.style.display = 'none';
    nextPlanetsButton.style.display = 'block';
    previousPlanetsButton.style.display = 'block';

    nextPlanetsButton.innerText = ">>";
    nextPlanetsButton.classList.add('nextButton');
    previousPlanetsButton.innerText = "<<";
    previousPlanetsButton.classList.add('previousButton');

    document.getElementById("newButtons").appendChild(nextPlanetsButton);
    document.getElementById("newButtons").appendChild(previousPlanetsButton);

    nextPlanetsButton.style.position = 'static';
    previousPlanetsButton.style.position = 'static';
    previousPlanetsButton.style.visibility = 'hidden';

    nextPlanetsButton.addEventListener('click', function () {
        currentPage++;
        console.log("Current page in eventlistener: " + currentPage)
        updatePlanetsTable();

        previousPlanetsButton.style.visibility = 'visible';
    });

    previousPlanetsButton.addEventListener('click', function () {
        currentPage--;
        updatePlanetsTable();

        nextPlanetsButton.style.visibility = 'visible';
    });
})




