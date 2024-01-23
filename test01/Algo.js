const axios = require('axios');

async function fetchDataAndProcess() {
    try {
        const response = await axios.get('https://apitest.likewatt-infra.com/entry-test/1');
        const data = response.data;
        console.log('Fetched data:', data);

        const filteredData = filterData(data);
        const orderedData = sortData(filteredData);

        return { orderedData };
    } catch (error) {
        throw error;
    }
}

function filterData(data) {
    return Object.filter(data, item => typeof item === 'string' || typeof item === 'number' || Array.isArray(item) || typeof item === 'object');
}

function sortData(filteredData) {
    return Object.keys(filteredData).sort((a, b) => {
        const typeA = typeof filteredData[a];
        const typeB = typeof filteredData[b];

        if (typeA === 'string' && typeB === 'string') {
            return filteredData[a].localeCompare(filteredData[b]);
        } else if (typeA === 'number' && typeB === 'number') {
            return filteredData[b] - filteredData[a];
        } else if (Array.isArray(filteredData[a]) && Array.isArray(filteredData[b])) {
            return filteredData[a].length - filteredData[b].length;
        } else if (typeA === 'object' && typeB === 'object') {
            return Object.keys(filteredData[a]).length - Object.keys(filteredData[b]).length;
        } else {
            return 0;
        }
    });
}

fetchDataAndProcess()
    .then(result => console.log('Filtered and ordered data:', result.orderedData))
    .catch(error => console.error('An error occurred:', error.message));
