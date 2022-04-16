const loadCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then (res => res.json())
    .then (data => displayCountries(data))
}
loadCountries();

const displayCountries = (countries) => {
    const ul = document.getElementById("country")
    // for (const country of countries){
    //     const li = document.createElement('li')
    //     li.innerText = country.name.common;
    //     ul.appendChild(li);
    // }
    countries.forEach(country => {
        const li = document.createElement('li')
        li.innerHTML = `<h3>${country.name}</h3>`
        li.onclick = function(){
            countryDetails(country.name)
        }
        ul.appendChild(li)
    })
}

const countryDetails = (name) =>{
    fetch(`https://restcountries.com/v2/name/${name}`)
    .then (res => res.json())
    .then (data => showDetails(data[0]))
    .catch(err => alert("Not match to any country"))
}
const showDetails = (details) =>{
    const countryInfo = document.getElementById("details-Info")
    countryInfo.innerHTML = `
        <h2>Name: ${details.name}</h2>
        <h2>Capital: ${details.capital}</h2>
        <h2>Area: ${details.area} sq.km</h2>
        <h2>population: ${details.population}</h2>
        <img src="${details.flag}">
    `
}

document.getElementById("search-btn").addEventListener("click", function(){
    const input = document.getElementById("input-Field");
    const inputSearch = input.value
    countryDetails(inputSearch);
    input.value = ""
})