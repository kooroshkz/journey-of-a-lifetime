const countries = {
    france: { name: 'France', top: '396px', left: '250px', width: '61px', height: '46px' },
    germany: { name: 'Germany', top: '340px', left: '334px', width: '43px', height: '30px' },
    spain: { name: 'Spain', top: '492px', left: '160px', width: '63px', height: '43px' },
    netherlands: { name: 'Netherlands', top: '317px', left: '300px', width: '32px', height: '15px' },
    belgium: { name: 'Belgium', top: '340px', left: '291px', width: '30px', height: '20px' },
    austria: { name: 'Austria', top: '382px', left: '393px', width: '35px', height: '35px' },
    unitedKingdom: { name: 'United Kingdom', top: '288px', left: '225px', width: '50px', height: '50px' },
    czech: { name: 'Czech Republic', top: '352px', left: '403px', width: '30px', height: '20px' },
    switzerland: { name: 'Switzerland', top: '400px', left: '327px', width: '30px', height: '20px' },
    slovakia: { name: 'Slovakia', top: '364px', left: '450px', width: '30px', height: '20px' },
    hungary: { name: 'Hungary', top: '394px', left: '441px', width: '41px', height: '20px' },
    ukraine: { name: 'Ukraine', top: '311px', left: '552px', width: '70px', height: '51px' },
    turkey: { name: 'Turkey', top: '475px', left: '610px', width: '64px', height: '48px' },
    russia: { name: 'Russia', top: '151px', left: '566px', width: '116px', height: '78px' },
    albania: { name: 'Albania', top: '486px', left: '470px', width: '30px', height: '20px' },
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
