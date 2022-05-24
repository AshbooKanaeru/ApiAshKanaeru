const axios = require('axios');
const cheerio = require('cheerio');

async function textpro2(url,opt,__agent){
	user_agent = __agent||"dzyoi"
	return new Promise(async(resolve,reject)=>{
		try{
		axios.get(url,{headers: {'User-Agent': user_agent}}).then(res=>{
			cookie = "__cfduid=undefined; PHPSESSID="+res.headers['set-cookie'][0].split('PHPSESSID=')[1].split(';')[0].trim();
			$ = cheerio.load(res.data);
			token = $('input[name="token"]').attr('value');
			build = $('input[name="build_server"]').attr('value');
			buildid = $('input[name="build_server_id"]').attr('value');
			axios.post(url,opt+`&submit=Go&token=${token}&build_server=${build}&build_server_id=${buildid}`,{withCredentials: true,headers: {'User-Agent':user_agent,Cookie: cookie,cookie: cookie}}).then(async res=>{
				$ = await cheerio.load(res.data);
				form = await JSON.parse($('div#form_value').html())
				urlhasil = await `https://textpro.me/effect/create-image?id=${form.id}&${encodeURIComponent(opt).replace(/%3D/g,'=').replace(/%26text%5B%5D/g,'&text%5B%5D')}&token=${encodeURIComponent(form.token)}&build_server=${encodeURIComponent(form.build_server)}&build_server_id=${form.build_server_id}`
				await axios.get(`${urlhasil}`,{withCredentials: true,headers:{'User-Agent': user_agent,Cookie: cookie,cookie: cookie}}).then(res=>{
					//this.hasil = res.data
					//resolve('https://textpro.me'+(res.data.fullsize_image||res.data.image))
					axios.get(build+(res.data.fullsize_image||res.data.image),{headers: {'User-Agent': user_agent,'DNT': 1,'Upgrade-Insecure-Request': 1,cookie: cookie},responseType: 'arraybuffer'}).then(res=>{
						resolve(res.data)
					})
				})
		})
	})
}catch(e){console.log(e);resolve({creator: 'Dz',status:false,msg:"[!] Terjadi Kesalahan"})}
		
	})}

module.exports = { textpro2 }
