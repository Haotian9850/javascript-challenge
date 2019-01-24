//use local storage to presever page information
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    console.log(e);
    e.preventDefault(); //prevent page from reloading => all client side
    const text = (this.querySelector('[name = item]')).value;   //this: form tag, preferred over global search
    const item = {
        text,   //ES6 shorthand 
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    //save to local storage! Need to stringify first!
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();   //clear all form entries

    console.log(item);
    
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

function toggleDone(e){
    console.log(e.target);
    //check if target matches
    const el = e.target;
    if(!e.target.matches('input')){
        return;
    }
    const index = el.dataset.index;
    items[index].done = !items[index].done; //depends on implementation
    //save into local storage
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}



addItems.addEventListener('submit', addItem);

populateList(items, itemsList);


//event delegation
//listen on parent container instead of children (target)
itemsList.addEventListener('click', toggleDone);
