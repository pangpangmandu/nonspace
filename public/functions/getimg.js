const express = require('express') 
const app = express() 
const puppeteer = require('puppeteer')
const port = process.env.PORT || 5000

;(async () =>{


let searchurl = "https://www.picuki.com/tag/"

app.use(express.static('public'));


app.get('/scraper/:keygen', async (request, response) =>{
    console.log("searching")
    const keygen = request.params.keygen
    console.log(keygen)
    const content = await scrapeImages(keygen)
    response.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'text/plain'
    })
    response.send(content)
})

app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html') }) 

app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) })

const scrapeImages = async keygen => {

    console.log("scraping")

    console.log(keygen)
    const browser = await puppeteer.launch()
    const [page] = await browser.pages()
    console.log(page === null)
    var url =searchurl+keygen;
    page.goto(url)
    await page.waitForSelector('.post-image');
    onsole.log(document.querySelector('.post-image'));
    const data = await page.evaluate( () => {
        const images = document.querySelectorAll('.post-image')
        console.log(images)
        const urls = Array.from(images).map(img => img.src )
        return urls;
    })

    await browser.close()

    return `{
        "images" : "${data}"
    }`
}




})();
