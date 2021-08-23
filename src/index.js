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
    Modal.addItemModal(currentState)
    document.querySelector("button#submit").addEventListener("click", saveItem);
});

document.querySelector("button#users").addEventListener("click", () => {
    Modal.addGuestModal()
    document.querySelector("button#submit").addEventListener("click", saveUser);
});

document.querySelector("button#tip").addEventListener("click", () => {
    Modal.addTipModal()
    document.getElementById("tip15").addEventListener("click", Modal.toggleCustomTip)
    document.getElementById("tip18").addEventListener("click", Modal.toggleCustomTip)
    document.getElementById("tip20").addEventListener("click", Modal.toggleCustomTip)
    document.getElementById("tip-custom").addEventListener("click", Modal.toggleCustomTip)
    document.querySelector("button#submit").addEventListener("click", saveTip);
});

function saveItem(e) {
    e.preventDefault();
    const form = document.querySelector("form")
    console.log(form)
    const formData = new FormData(form)
    const itemName = formData.get("item-name")
    const itemPrice = formData.get("item-price")
    const guest = formData.get("item-guest")
    const item = new Item(itemName, itemPrice)
    console.log(item)
    currentState.items.push(item)
    Modal.closeModal()
    console.log(currentState)
    addItemToBill(item)
    addItemToGuest(item, guest)
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

function saveTip(e) {
    e.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form)
    const tipRate = formData.get("tip-rate");
    const tipAmt = formData.get("tip-amount");
    console.log(formData)
    if (tipRate === "custom") { splitCustomTip(tipAmt) }
    else { applyTipRate(tipRate) };
    Modal.closeModal();
}

function splitCustomTip(tipAmt) {
    console.log(tipAmt)
};

function applyTipRate(tipRate) {
    console.log(tipRate)
    tipRate = parseFloat(tipRate) / 100.0
    console.log(tipRate)
    console.log(currentState.subtotal)
    currentState.tip = Number(currentState.subtotal) * (tipRate)
    console.log(currentState.tip)

    const tip = document.querySelector(".tip > td.right")
    tip.innerHTML = `$${currentState.tip.toFixed(2)}`
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

function addItemToGuest(item, guest) {
    const user = currentState.guests.find(u => u.name == guest)
    user.items.push(item)
    const guestBill = document.querySelector(`.${guest}`)
    const tr = document.createElement("tr")
    tr.innerHTML = `
    <td class="left" id="item-name">
        ${item.name}
    </td>
    <td class="right" id="item-price">
        $${Number(item.price).toFixed(2)}      
    </td> 
    `
    guestBill.appendChild(tr)

    let subtotal = 0 
    user.items.forEach( item => subtotal += Number(item.price) )
    console.log(subtotal)
    const subtotalEl = document.querySelector(`.subtotal.${guest} > td.right`)
    subtotalEl.innerHTML = `$${subtotal.toFixed(2)}`

}

function addGuestToTable(guest){
    const list = document.querySelector("div.content#users") 
    const div = document.createElement("div")
    div.className = "box"
    div.id = "user"
    div.innerHTML = `
        <div class="header row" id="users">${guest.name}</div>
        <div class="content" id="user">
            <table class="${guest.name}" id="users ${guest.name}">
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>
            </table>
        </div>
        <div class="footer" id="user">
            <table>
                <tr class="subtotal ${guest.name}" >
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
