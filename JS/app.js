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
}
const showDetails = (details) =>{
    console.log(details);
    const countryInfo = document.getElementById("detailsI-Info")
    const div = document.createElement('div')
    div.innerHTML = `
        <h2>Name: ${details.name}</h2>

    `
    countryInfo.appendChild(div)
}