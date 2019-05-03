var list = document.getElementById('menu').getElementsByTagName('li');
var title = document.getElementById('text');
var press = document.getElementById('zar');
var Menu =  document.getElementById('menu');
var line = 1;
var text = document.getElementById('newline');


// for (i = 0; i < list.length; i++) {
// 	list[i].addEventListener("click", Item);
// }
	Menu.addEventListener("click", Item)

function Item(A) {
	if (A.target.nodeName == "LI") {
		title.innerHTML = A.target.innerHTML;
	for (var i = 0; i < list.length; i++) {
		list[i].classList.remove("PressIt")
	}
	A.target.classList.add("PressIt");
	}
}

press.addEventListener("click", newList)

function newList(){
	Menu.innerHTML +=  "<li> new line " + line + "</li>";
	line++;
}