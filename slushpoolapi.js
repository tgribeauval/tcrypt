const fetch = require('node-fetch');
global.Headers = fetch.Headers;
global.Request = fetch.Request;

const url = "https://slushpool.com/accounts/profile/json/btc/";

let h = new Headers();
h.append('SlushPool-Auth-Token', '03MJxyusWuwuLNfx');

let req = new Request(url, {
    method: 'GET',
    headers: h,

});

fetch(req)
    .then((response)=>{
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('HTTP ERROR');
        }

    })
    .then((jsonData)=>{
        console.log(jsonData);

    })
    .catch((err)=>{
        console.log("Error:", err.message);
    })