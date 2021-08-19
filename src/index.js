import "./styles/index.scss";
import "./styles/reset.scss";
import "./styles/modal.scss";
import Guest from "./scripts/guest";
import Item from "./scripts/item";
import * as Modal from "./scripts/modals";

export const currentState = {
    items: [],
    guests: []
}

document.querySelector("button#items").addEventListener("click", () => {
    Modal.addItemModal()
    document.querySelector("button#submit").addEventListener("click", saveItem);
});

document.querySelector("button#users").addEventListener("click", () => {
    Modal.addGuestModal()
    document.querySelector("button#submit").addEventListener("click", saveUser);

});

function saveItem(e) {
    e.preventDefault();
    const form = document.querySelector("form")
    console.log(form)
    const formData = new FormData(form)
    const itemName = formData.get("item-name")
    const itemPrice = formData.get("item-price")
    const item = new Item(itemName, itemPrice)
    console.log(item)
    currentState.items.push(item)
    Modal.closeModal()
    console.log(currentState)
    addItemToBill(item)
}

function saveUser(e) {
    e.preventDefault();
    const form = document.querySelector("form")
    console.log(form)
    const formData = new FormData(form)
    const guestName = formData.get("guest-name")
    const guest = new Guest(guestName)
    console.log(guest)
    currentState.guests.push(guest)
    Modal.closeModal()
    console.log(currentState)
}

// function update(){
//     // for each item in currentState.items, update the bill
//     currentState.items.forEach(item => (
//         addItemToBill(item)
//     ))
//     // for each guest in guest, create a bill for them and update the guest section
// }

function addItemToBill(item){
    const itemList = document.querySelector("ul.content") 
    const li = document.createElement('li')
    li.className = "item"
    li.innerHTML = `
        <div>
        ${item.name}
        </div>
        <div>
        ${item.price}      
        </div> 
    `
    itemList.appendChild(li)
}


// window.currentState = currentState
