async function typeTextIn(text,element,callback = (a,b) => {}){

	let i = 0;
	element.innerHTML = "";
	function sleep(ms){
		return new Promise(resolve => {
			setTimeout(resolve,ms);
		})
	}

	while(text.length - i)
	{
		element.innerHTML +=  text[i];
		i++;
		await sleep(100);
	}
	await sleep(1000);
	callback(text,element);
}

const textBlock = [
	"Trying to find you...",
	"Checking your IP...",
	"encrypting data...",
	"solving packages...",
	"waiting for response...",
	"reading cookies...",
	"downloading data...",
	"browser history...",
	"calling FBI...",
	"Hacking Pentagon..."
]

function* gen(block) {
	let i = 0;
	while(true){
		if(i >= block.length) i = 0;
			yield block[i];
		i++;
	}
}

const getString = gen(textBlock);
const type = async () => {
	for(let i = 0; i < 2000; i++){
		if(getComputedStyle(document.getElementById("loading")).display == "none"){
			return;
		}
		await typeTextIn(getString.next().value,document.getElementById("finding-text"));
	}
}
