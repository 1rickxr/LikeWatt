const axios = require('axios');

async function fetchDataAndProcess() {
    try {
        const response = await axios.get('https://apitest.likewatt-infra.com/entry-test/1');
        const data = response.data;

        const filteredData = data.filter(item => typeof item === 'string' || typeof item === 'number' || typeof item === 'object');

        const orderedData = filteredData.sort((a, b) => {
            if (typeof a === 'string' && typeof b === 'string') {
                return a.localeCompare(b);
            } else if (typeof a === 'number' && typeof b === 'number') {
                return b - a;
            } else if (Array.isArray(a) && Array.isArray(b)) {
                return a.length - b.length;
            } else if (typeof a === 'object' && typeof b === 'object') {
                return Object.keys(a).length - Object.keys(b).length;
            } else {
                return 0;
            }
        });

        const resultObject = { orderedData };

        return resultObject;
    } catch (error) {
        console.error('An error occurred while fetching the data:', error.message);
        throw error;
    }
}

fetchDataAndProcess()
    .then(result => console.log('Filtered and ordered data:', result.orderedData))
    .catch(error => console.error('An error occurred:', error.message));

