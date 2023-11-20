let button = document.querySelector('#valider');
let nameInput = document.querySelector('#name');
let count = 1;

function addTODO() {
    let ul = document.querySelector('ul');
    let item = document.createElement('li');
    item.id = 'item-' + count;
    count++;
    ul.appendChild(item);
    item.textContent = nameInput.value;

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox-' + count;
    item.appendChild(checkbox);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.id = 'delete-' + count;
    item.appendChild(deleteButton);

    deleteButton.addEventListener('click', function () {
        let itemId = this.parentNode.id;
        let itemToDelete = document.getElementById(itemId);
        itemToDelete.remove();
    });

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            item.style.textDecoration = 'line-through';
        } else {
            item.style.textDecoration = 'none';
        }
    });
}

button.addEventListener('click', addTODO);
