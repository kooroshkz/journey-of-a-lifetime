const countries = {
    france: { name: 'France', top: '400px', left: '250px', width: '50px', height: '30px' },
    germany: { name: 'Germany', top: '250px', left: '350px', width: '50px', height: '30px' },
    netherlands: { name: 'Netherlands', top: '200px', left: '300px', width: '30px', height: '20px' },
    belgium: { name: 'Belgium', top: '220px', left: '280px', width: '30px', height: '20px' },
    austria: { name: 'Austria', top: '300px', left: '350px', width: '40px', height: '25px' },
    czech: { name: 'Czech Republic', top: '270px', left: '340px', width: '30px', height: '20px' },
    switzerland: { name: 'Switzerland', top: '320px', left: '300px', width: '30px', height: '20px' },
    slovakia: { name: 'Slovakia', top: '270px', left: '370px', width: '30px', height: '20px' },
    hungary: { name: 'Hungary', top: '290px', left: '370px', width: '30px', height: '20px' },
    ukraine: { name: 'Ukraine', top: '240px', left: '420px', width: '60px', height: '35px' },
    turkey: { name: 'Turkey', top: '350px', left: '500px', width: '50px', height: '30px' }
};

document.addEventListener('DOMContentLoaded', async () => {
    for (const id in countries) {
        const country = countries[id];
        const countryElement = document.getElementById(id);
        countryElement.style.top = country.top;
        countryElement.style.left = country.left;
        countryElement.style.width = country.width;
        countryElement.style.height = country.height;
        
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${country.name}`);
            const data = await response.json();
            const flagUrl = data[0].flags.png;
            countryElement.style.backgroundImage = `url(${flagUrl})`;
        } catch (error) {
            console.error(`Could not fetch flag for ${country.name}:`, error);
        }
    }
});
