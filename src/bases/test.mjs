import { JSDOM } from "jsdom";
process.removeAllListeners('warning');

const headers = new Headers();
headers.set("Content-Type", "text/html; charset=utf-8");
headers.set("Transfer-Encoding", "chunked");
headers.set("Content-Encoding", "gzip");
headers.set("Cache-Control", "private");
headers.set("Vary", "Accept-Encoding");
headers.set("content-language", "es");
headers.set("x-frame-options", "DENY");
headers.set("x-xss-protection", "1; mode=block");
headers.set("x-content-type-options", "nosniff");
headers.set("strict-transport-security", "max-age=15768000; includeSubDomains");
headers.set("x-aspnet-version", "4.0.30319");
headers.set("x-powered-by", "ASP.NET");
headers.set("server", "fbs");
const giphyURL ='https://www.hablarcondios.org/meditaciondiaria.aspx';
const peticion = fetch(giphyURL, headers);
peticion
    .then ( resp=> resp.text())
    .then ( (data) => {
        const mydom = new JSDOM(data);
        const mydoc = mydom.window.document;
        const mycontent = mydoc.querySelector('#ctl00 > div.container-fluid > div > div')
        console.log(mycontent.innerHTML)
    })
    .catch( console.warn);