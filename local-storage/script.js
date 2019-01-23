//use local storage to presever page information
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e){
    console.log(e);
    e.preventDefault(); //prevent page from reloading => all client side
    const text = (this.querySelector('[name = item]')).value;   //this: form tag, preferred over global search
    const item = {
        text,   //ES6 shorthand 
        done: false
    }
    populateList(items, itemsList);
    this.reset();   //clear all form entries

    console.log(item);
    items.push(item);
    console.table(items);
}

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" checked/>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');    //convert to just one string
}

addItems.addEventListener('submit', addItem);