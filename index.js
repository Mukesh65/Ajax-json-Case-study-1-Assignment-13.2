const request = require('request-promise');
		const endpoint = 'http://api.github.com/users';
		const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134';
		(async function main() {
			try {
			const res = await request({
				url: `${endpoint}/optikalefx`,
				method: 'GET',
				headers: {
					'User-Agent': ua
				}
			});
			console.log(res);

			}catch(e) {
				console.log(e.message);
			}

					
				})();