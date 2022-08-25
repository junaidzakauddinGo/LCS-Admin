const {When, Then, And, Given} = require("cucumber")
const expect = require("chai")
const puppeteer = require("puppeteer")
const userName = "test"
const userEmail = "abc@test.com"
const userRole= "randomRole"

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given("The browser is open", async function(){
    this.browser = await puppeteer.launch({headless:false})
    this.page = await this.browser.newPage();
})

When('open the URL and login', async function () {
    await this.page.goto("https://demo.hnhconsulting.ca/#/qaexam1")
    await this.page.waitForSelector('[name="username"]')
    await this.page.type('[name="username"]',"junaid.zaka@hnhconsulting.ca")
    await this.page.waitForSelector('[name="password"]')
    await this.page.type('[name="password"]',"candidate123")
    await this.page.click('[type="submit"]')
});

When('add User', async function () {
    await this.page.waitForSelector("#userName")
    await this.page.waitForSelector("#userEmail")
    await this.page.waitForSelector("#userRole")

    await this.page.type("#userName", userName)
    await this.page.type("#userEmail",userEmail)
    await this.page.type("#userRole",userRole)

    await this.page.click('.btn-primary')
    
});

Then('User must be created under users table', async function () {
    
});