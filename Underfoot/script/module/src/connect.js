var x0x323323;
async function connect(){
	await fetch('http://localhost:3000/api/connect',{
			method : 'post',
			headers: {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json',
				'Origin': 'http://localhost:3000'
			},
			mode: 'cors',
			credentials: 'same-origin'
		}).then(data => data.json())
		.then(res => {
			console.log(res);
			x0x323323 = res;
	})
}
connect();