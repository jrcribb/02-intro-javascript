import { JSDOM } from "jsdom";
//const myURL='https://damiandeluca.com.ar/como-utilizar-queryselector-y-queryselector-con-javascript'
const HTML = `
	<html>
		<body>
			<button onclick="const e = document.createElement('div'); e.id = 'myid'; this.parentNode.appendChild(e);">Click me</button>
		</body>
	</html>`;

const dom = new JSDOM(HTML, {
	runScripts: "dangerously",
	resources: "usable"
});

const document = dom.window.document;

const button = document.querySelector('button');
console.log(button.TEXT_NODE);
console.log("Element before click: " + document.querySelector('div#myid'));
button.click();
console.log("Element after click: " + document.querySelector('div#myid'));