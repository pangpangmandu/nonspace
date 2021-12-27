const request = require('request');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const router = express.Router();

function sleep(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    });
}


async function print(content){
    const $ = cheerio.load(content);
    // const body = $.load(content);
    const selector = ".post-image";
    var anchors = [];
    console.log("anchored")
    $(selector).each(function(){
        anchors.push($(this).attr('src'));
    });

    return anchors;

}



(async() => {
  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();
  // await page.setViewport({
  //   width: 1366,
  //   height: 768
  // });
  // "https://www.goodchoice.kr/product/search/2" URL에 접속한다. (여기어때 호텔 페이지)
  await page.goto('https://www.picuki.com/tag/love');

  await sleep(3000)

  const content = await page.content();
  
  var resultjson = await print(content);

  await browser.close();
  
  await router.get("/crawlingTest", function(req, res, next){
  request({url, encoding: null}, function(error, response, body){
  
    res.json(resultjson)

    });
})();



});

module.exports = router;