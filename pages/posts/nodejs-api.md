---
title: Api nodejs
date: 2022/12/18
description: Api nodejs
tag: nodejs, api
author: Marlon Falcon Hernandez
---

# Api nodejs

src/index.js

```nodejs
const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const fs = require('fs');

http://localhost:3014/apialtice/query/:userid
app.get('/apialtice/query/:userId', async (req, res)=>{
    try {
        phones = await queryAltice(req,res);
        res.status(200).json({
            phones
        });        
        } 
    catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'error', error
        });
    }
});



const queryAltice = async (req, res) => {
    const browser = await puppeteer.launch({headless: true, ignoreHTTPSErrors: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const header = randomUseragent.getRandom((ua) => {
        return ua.browserName === 'Firefox';
    });
    const page = await browser.newPage();
    // await page.setUserAgent(header)
    await page.viewport({width: 1920, height: 1080})
    await page.setRequestInterception(true);
    await page.on('request', (req) => {
    if(req.resourceType() === 'image'){
        req.abort();
    }
    else {
    req.continue();
    }
    });
    try{
        await page.goto('https://demo/marlon');
        const inputCustomerRFC = await page.waitForSelector('#exampleInputEmail1',{timeout: 100});
        await inputCustomerRFC.type(req.params.userId);
        // await page.waitForSelector('.card-body > .row > .col-xl-9 > div > .btn')
        await page.click('.card-body > .row > .col-xl-9 > div > .btn')


        const element = await page.waitForSelector('.card-body > .d-flex > .d-flex > ul',{timeout: 1000})
        const phones = await (await element.getProperty("innerText")).jsonValue();
        console.log(await phones);

        await browser.close();
        return phones;

    }catch (error) {
            await browser.close();
            // console.log(error);
            throw error;
    }
}


app.get('*', (req, res)=>{
    res.status(200).json({
        msg: "This Route is not Valid"
    });
});

app.listen(3014, ()=>{
    console.log('Server on port 3014')
})
```