fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        countryName(data)
    })
function countryName(data) {
    for (const x of data) {
        const mother = document.getElementById('mother');
        const countryDiv = document.createElement('div');
        mother.appendChild(countryDiv);
        countryDiv.classList.add('col-4', 'text-center', 'p-4', 'fs-4', 'border', 'bg-warning','mouse');
        countryDiv.innerText = x.name;
        countryDiv.addEventListener('mouseover', function(){
         
            this.style.backgroundColor = 'red';
            console.log('ccc');
        })
    }

}
