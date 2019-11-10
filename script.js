let blob = document.getElementById("root");

let box = document.createElement("input");
let user = root.appendChild(box);

let button_add = document.createElement("button");
let spot = root.appendChild(button_add);
button_add.innerHTML = "Add";


let button_clear = document.createElement("button");
let smot = root.appendChild(button_clear);
button_clear.innerHTML = "Clear All";

let sheet = document.createElement("ul");
let slob = root.appendChild(sheet);

const addToList = () => {
	let input = document.getElementsByTagName("input")[0].value;
	let entry = document.createElement("li");
	let list = document.getElementsByTagName("ul")[0];
	list.appendChild(entry);
	entry.innerText = input;
}
const clearAll = () => {
let el = document.getElementsByTagName("li");
let elLength = el.length;
	for (i = 0; i < elLength; i++) {
		el[0].remove();
	}
}
button_add.addEventListener("click", addToList);

button_clear.addEventListener("click", clearAll);
