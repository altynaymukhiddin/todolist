
const input = document.querySelector(".form-control");
const btn = document.querySelector(".btn");
const listGroup = document.querySelector(".list-group");

// получение данных из локал сторедж и преобразование обратно в дж
const todo = JSON.parse(localStorage.getItem("todo"));
// если в переменной туду что то есть мы его храним в противном случае мы храним пустой массив
const todolist = todo ? todo : []

// вешаем клик на переменную бтн
btn.addEventListener('click', function () {

	// доб новый элелемент в массив тудулист
    todolist.push({
        value: input.value,
        checked: false
    });
    
	const stringTodo = JSON.stringify(todolist)
	con


    listGroup.insertAdjacentHTML("beforeend",`
     <li class="list-group-item list-group-item-${(todolist.length - 1) % 2 === 0 ? "warning" : "info"} ">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckChecked">
            ${input.value}
            </label>
        </div>
    </li>
`)
    input.value = ""
})

function drawList(){
    for( let i = 0; i <todolist.length; i++){
        listGroup.insertAdjacentHTML("beforeend",
        `<li class="list-group-item list-group-item-${i % 2 === 0 ? 'warning' : 'info'}">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" ${todolist[i].checked ? "checked" : "" } value="" id="flexCheckChecked">
                <label class="form-check-label ${todolist[i].checked ? "checkedText" : "" }" for="flexCheckChecked">
                ${todolist[i].value}
                </label>
            </div>
        </li>
    `)
    }
}
drawList()




let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	let li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 


	
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
    
	let dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem(){
		li.classList.add("delete")
	}

}
function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
