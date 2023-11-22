const button = document.getElementById('valider');
const allBtn = document.getElementById('all');
const doneBtn = document.getElementById('done');
const progressBtn = document.getElementById('in-pgr');
const nameInput = document.getElementById('name');
let count = 1;

function addTODO() {
    if (nameInput.value.length > 0) {
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

        item.setAttribute('data-status', 'in-progress');
        item.setAttribute('data-value', nameInput.value);

        deleteButton.addEventListener('click', function () {
            let itemId = this.parentNode.id;
            let itemToDelete = document.getElementById(itemId);
            console.log(`${item.textContent.replace('Delete', '')} is now deleted!`);
            itemToDelete.remove();
        });

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                item.setAttribute('data-status', 'done');
                console.log(`${item.textContent.replace('Delete', '')} is now done!`);
                item.style.textDecoration = 'line-through';
            } else {
                item.setAttribute('data-status', 'in progress');
                console.log(`${item.textContent.replace('Delete', '')} is now in progress!`);
                item.style.textDecoration = 'none';
            }
        });
    } else {
        console.log('one character minimum');
    }
}

button.addEventListener('click', addTODO);

function filterAll() {
    let items = document.querySelectorAll('li'); 
    items.forEach(function(item) {
        console.log(item.textContent.replace('Delete', ''));
    });
}

function filterDone() {
    const dataStatus = document.querySelectorAll('li[data-status="done"]');
    dataStatus.forEach(function(item) {
        const dataValue = item.getAttribute('data-value');
        console.log(`${dataValue} is done!`);
    });
}

// BUG

function filterProgress() { 
    const dataStatus = document.querySelectorAll('li[data-status="in-progress"]');
    dataStatus.forEach(function(item) {
        const dataValue = item.getAttribute('data-value');
        console.log(`${dataValue} is in progress!`);
    });
}

allBtn.addEventListener('click', filterAll);
doneBtn.addEventListener('click', filterDone);
progressBtn.addEventListener('click', filterProgress);