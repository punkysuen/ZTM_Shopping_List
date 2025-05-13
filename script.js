var button = document.getElementById("enter");
var input = document.getElementById("userinput");

var ul = document.querySelector("ul");

var listedItems = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	var delButton = document.createElement("button"); // 創建按鈕
	delButton.appendChild(document.createTextNode("delete")); // 設置按鈕文字
	delButton.className = "del"; // 設置 class="del"
	li.appendChild(delButton); // 添加按鈕到 li
	ul.appendChild(li); // 添加 li 到 ul
	input.value = ""; // 清空輸入框
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPressed(event) {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement()
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeyPressed);

ul.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.innerText + " is clicked");
        event.target.classList.toggle("done");
        console.log(`Item ${event.target.innerText} toggled .done class`);
    } else if (event.target.className === "del") {
        console.log("del button is clicked");
        event.target.parentElement.remove(); // 移除父 <li>
    }
});

