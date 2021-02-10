fetch('https://disease.sh/v3/covid-19/all')
    .then(Response => Response.json())
    .then(data => {
        // console.log(data);
        showWorldInfo(data);
});

const showWorldInfo = (worldCases) => {
    const worldInfo = document.getElementById('world-info');

    // console.log(worldCases);
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



//ALl Countries
const showAllCountry = () => {
    fetch('https://disease.sh/v3/covid-19/countries')
    .then(Response => Response.json())
    .then(data => {
        // console.log(data);
        renderAllCountry(data);
    });
};
const renderAllCountry = allCountry => {
    const all =document.getElementById("table-body");
    document.getElementById('world-info').style.display = 'none';
    document.getElementById('allInfo').style.display = 'block';
    document.getElementById('home').style.color = 'rgba(255,255,255,.5)';

    allCountry.forEach(cases => {
        // console.log(cases);

        const listDiv = document.createElement('tr');
        const countryInfo = `
            <td  onclick="showSingleCountry('${cases.country}')"class="countryList">${cases.country}</td>
            <td>${cases.cases}</td>
            <td class="new-cases">+${cases.todayCases}</td>
            <td>${cases.deaths}</td>
            <td class="bg-red">+${cases.todayDeaths}</td>
            <td>${cases.recovered}</td>
            <td>${cases.active}</td>
            <td>${cases.critical}</td>
            <td>${cases.tests}</td>
            <td>${cases.population}</td>
            <td>${cases.continent}</td>
        `;
        listDiv.innerHTML = countryInfo;
        all.appendChild(listDiv);
    });

};

//===single Country Info===//
const showSingleCountry = async countryName => {

    const url = `https://disease.sh/v3/covid-19/countries/${countryName}`;

    const response = await fetch(url);
    const data = await response.json();
    singleCountryInfo(data);

    // fetch('https://disease.sh/v3/covid-19/countries')
    // .then(Response => Response.json())
    // .then(data => {
    //     // console.log(data);
    //     singleCountryInfo(data[0]);
        
    // });
};

const singleCountryInfo = singleCountry => {
    const countryImg = document.getElementById('country-name');
    console.log(singleCountry);
    document.getElementById('allInfo').style.display = 'none';
    document.getElementById('single-info').style.display = 'block';
    document.getElementById('all-country').style.color = '#fff';

    //Single Country Info
    document.getElementById('single-cases').innerHTML = singleCountry.cases;
    document.getElementById('single-deaths').innerHTML = singleCountry.deaths;
    document.getElementById('single-recovered').innerHTML = singleCountry.recovered;

    //===Single Country Close Cases===
    document.getElementById('countryCloseCases').innerText = singleCountry.cases - singleCountry.active;
    document.getElementById('country-recovery').innerText = singleCountry.recovered;
    document.getElementById('country-deaths').innerText =  singleCountry.deaths;

     
    const singleDiv = document.createElement('div');
    singleDiv.className = 'country-image';
    const countryImage = `
        <img src="${singleCountry.countryInfo.flag}" alt="country-logo" width="60">
        <div class="d-inline">${singleCountry.country}</div>
    `;
    singleDiv.innerHTML = countryImage;
    countryImg.appendChild(singleDiv);
};