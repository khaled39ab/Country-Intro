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

