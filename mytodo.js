let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');


inp.addEventListener('keydown', function (event) {
    let kk = event.key;
    if (kk == "Enter") {
        additem();
    }
})

btn.addEventListener('click', function () {
    additem();

});

function additem() {

    let item = document.createElement('li');

    let checkBtn = document.createElement('input');
    checkBtn.type = "checkbox";
    checkBtn.className = "checkk";
    checkBtn.title = "Checkbox";

    let itemText = document.createTextNode(inp.value);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.title = "Delete task";

    let iconn = document.createElement('i');
    iconn.className = "fa-solid fa-xmark";

    deleteBtn.appendChild(iconn);
    item.appendChild(checkBtn);
    item.appendChild(itemText);
    item.appendChild(deleteBtn);

    ul.appendChild(item);
    inp.value = "";
}

ul.addEventListener('click', function (event) {
    if (event.target.classList.contains('fa-xmark') || event.target.nodeName === "BUTTON") {
        let lItem = event.target.closest('li');
        lItem.remove();
    }
});

