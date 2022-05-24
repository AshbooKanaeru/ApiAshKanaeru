const axios = require('axios');
const cheerio = require('cheerio');
const agent = "Mozilla/5.0 (Linux; Android 9; Redmi S2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36";
const creator = "ashborns";

const getBuff = async (url, options) => {
	try {
		options ? options: {};
		const res = await axios({
			method: "get",
			url,
			headers: {
				'User-Agent': agent,
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		});
		return res.data;
	} catch (e) {
		console.log(`Error : ${e}`);
	}
};

async function EphotO(url, query) {
	return new Promise((resolve, reject)=> {
		let config = {
			headers: {
				'User-Agent': agent
			}
		};
		axios.get(url, config).then(resp=> {
			config.headers.cookie = resp.headers['set-cookie'].join('; ');
			let $ = cheerio.load(resp.data),
			token = $('input[name=token]').attr('value'),
			build = $('input[name=build_server]').attr('value'),
			build_id = $('input[name=build_server_id]').attr('value');
			query = new URLSearchParams(query).toString();
			axios.post(url, `${query}&token=${encodeURIComponent(token)}&build_server=${encodeURIComponent(build)}&build_server_id=${encodeURIComponent(build_id)}`, config).then(resp=> {
				let $ = cheerio.load(resp.data),
				form = JSON.parse($('div#form_value').text());
				delete form.text;
				let form_url = new URLSearchParams(form).toString();
				form_url += `&${query}`;
				resp.headers['set-cookie'] ? config.headers.cookie = resp.headers['set-cookie'].join('; '): "";
				config.headers.Origin = 'https://en.ephoto360.com';
				config.headers.Referer = url;
				config.headers['X-Requested-With'] = "XMLHttpRequest";
				config.headers.Accept = "*/*";
				config.WithCredentials = true;
				config.headers['Content-Type'] = "application/x-www-form-urlencoded; charset=UTF-8";
				axios.post(`https://en.ephoto360.com/effect/create-image`, form_url, config).then(resp=> {
					if (resp.data.success == true) {
						getBuff(`${build}${resp.data.image}`).then(resp=> {
							return resolve({
								a: true, d: resp
							});
						});
					} else {
						return resolve({
							a: false, d: {
								creator, status: false, msg: '[!] terjadi kesalahan code -4'
							}
						});
					}
				}).catch(e=> {
					console.log(e);
					return resolve({
						a: false, d: {
							creator, status: false, msg: '[!] terjadi kesalahan code -3'
						}
					});
				});
			}).catch(e=> {
				console.log(e);
				return resolve({
					a: false,
					d: {
						creator,
						status: false,
						msg: '[!] terjadi kesalahan code -2'
					}
				});
			});
		}).catch(e=> {
			console.log(e);
			return resolve({
				a: false, d: {
					creator, status: false, msg: '[!] terjadi kesalahan code -1'
				}
			});
		});
	});
}

module.exports = { EphotO }
