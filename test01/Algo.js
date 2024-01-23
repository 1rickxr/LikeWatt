const url = "https://apitest.likewatt-infra.com/entry-test/1";
async function getData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data.data;
	} catch (error) {
		console.error("An error occurred:", error);
	}
}

async function main() {
	try {
		const data = await getData(url);
		filterData(data);
	} catch (error) {
		console.error("An error occurred:", error);
	}
}
function filterData(array) {
	const filteredData = (array, type) => {
		return array.filter((item) => typeof item === type);
	};
	const sortString = (array) => {
		return array.sort((a, b) => a.localeCompare(b));
	};
	const sortNumber = (array) => {
		return array.sort((a, b) => b - a);
	};

	const sortedArrayString = sortString(filteredData(array, "string"));
	const sortedSingleChar = sortedArrayString.filter(
		(item) => item.length === 1
	);
	const sortedString = sortedArrayString.filter((item) => item.length > 1);
	const sortedNumber = sortNumber(filteredData(array, "number"));
	const objectData = filteredData(array, "object");
	const arrayData = filteredData(array, "array");
	const result = [
		...sortedSingleChar,
		...sortedString,
		...sortedNumber,
		...objectData,
		...arrayData,
	];
	console.log(result);
    return result;
}

main();
