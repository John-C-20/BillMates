import "./styles/index.scss";
import "./styles/reset.scss";
import "./styles/modal.scss";
import Guest from "./scripts/guest";
import Item from "./scripts/item";
import * as Modal from "./scripts/modals";

export const currentState = {
    items: [],
    guests: [],
    subtotal: 0.00,
    tip: 0.00,
    tax: 0.00,
    total: 0.00
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
    addGuestToTable(guest)
}

function addItemToBill(item){
    const itemList = document.querySelector("table#items") 
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="left" id="item-name">
    ${item.name}
    </td>
    <td class="right" id="item-price">
    $${Number(item.price).toFixed(2)}      
    </td> 
    `
    itemList.appendChild(tr)
    
    currentState.subtotal += Number(item.price)
    const subtotal = document.querySelector(".subtotal > td.right") 
    console.log(subtotal)
    console.log(currentState.subtotal)
    subtotal.innerHTML = `$${currentState.subtotal.toFixed(2)}`
}

function addGuestToTable(guest){
    const list = document.querySelector("div.content#users") 
    const div = document.createElement("div")
    div.className = "box"
    div.id = "user"
    div.innerHTML = `
        <div class="header row" id="users">${guest.name}</div>
        <div class="content" id="users">
            <table id="users">
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>
            </table>
        </div>
        <div class="footer" id="users">
            <table>
                <tr class="subtotal">
                    <td>Subtotal</td>
                    <td class="right">$0.00</td>
                </tr>

                <tr class="tip">
                    <td>Tip</td>
                    <td class="right">$0.00</td>
                </tr>
                <tr class="tax">
                    <td>Tax</td>
                    <td class="right">$0.00</td>
                </tr>
                <tr class="total">
                    <td>Total</td>
                    <td class="right">$0.00</td>
                </tr>
            </table>
        </div>
    `
    list.appendChild(div)
}

// window.currentState = currentState
