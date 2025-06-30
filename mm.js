const url = 'https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&datatype=json';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '133948e94fmsh780a80fe1d0ca3fp11fdefjsnc425561f32a0',
		'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
    console.log('zxcbn')
} catch (error) {
	console.error(error);
    console.log('sjh')
}