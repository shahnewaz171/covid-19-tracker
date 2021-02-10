fetch('https://disease.sh/v3/covid-19/all')
    .then(Response => Response.json())
    .then(data => {
        // console.log(data);
        showWorldInfo(data);
});

const showWorldInfo = (worldCases) => {
    const worldInfo = document.getElementById('world-info');

    console.log(worldCases);
    // world-cases
    document.getElementById('world-cases').innerText = worldCases.cases;
    // world-deaths
    document.getElementById('world-deaths').innerText = worldCases.deaths;
    // world-recovered
    document.getElementById('world-recovered').innerText = worldCases.recovered;

    //===Active Cases===
    document.getElementById('active-cases').innerText = worldCases.active;
    document.getElementById('cases').innerText = worldCases.cases;
    document.getElementById('critical-cases').innerText =  worldCases.critical;

    //===Close Cases===
    document.getElementById('close-cases').innerText = worldCases.cases - worldCases.active;
    document.getElementById('recovery').innerText = worldCases.recovered;
    document.getElementById('total-deaths').innerText =  worldCases.deaths;

};


//For Mobile navBar
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
// https://disease.sh/v3/covid-19/countries