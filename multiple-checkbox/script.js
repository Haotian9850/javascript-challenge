const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.table(checkboxes);

let lastChecked;    //will be reassigned

function handleCheck(e){
    console.log(e); //testing

    //check if shift key is held
    //and check if chekced

    let inBetween = false;

    if(e.shiftKey && this.checked){
        //fill all checkboxes in between
        //loop through all checkboxes
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox == this || checkbox == lastChecked){
                inBetween = !inBetween; //need to go both ways!
            }

            if(inBetween){
                //fill
                checkbox.checked = true;
            }
        });
    }   

    lastChecked = this;
    
}


//get click event
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));