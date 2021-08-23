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

document.querySelector("button#tax").addEventListener("click", () => {
    Modal.addTaxModal()
    document.querySelector("button#submit").addEventListener("click", saveTax);
})

document.querySelector("button#calculate").addEventListener("click", calculate);

function saveItem(e) {
    e.preventDefault();
    const form = document.querySelector("form")
    const formData = new FormData(form)
    const itemName = formData.get("item-name")
    const itemPrice = formData.get("item-price")
    const guests = formData.getAll("item-guests")
    const itemQty = guests.length
    const item = new Item(itemName, Number(itemPrice * 1.0)/itemQty)
    for (let i = 0; i < itemQty; i++) {
        currentState.items.push(item)
        addItemToBill(item)
    }
    guests.forEach( guest => addItemToGuest(item, guest))
    Modal.closeModal()
}

function saveUser(e) {
    e.preventDefault();
    const form = document.querySelector("form")
    const formData = new FormData(form)
    const guestName = formData.get("guest-name")
    const guest = new Guest(guestName)
    currentState.guests.push(guest)
    Modal.closeModal()
    addGuestToTable(guest)
}

function saveTip(e) {
    e.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form)
    const tipRate = formData.get("tip-rate");
    const tipAmt = Number(formData.get("tip-amount"));
    if (tipRate === "custom") { splitCustomTip(tipAmt) }
    else { applyTipRate(tipRate) };
    Modal.closeModal();
}

function saveTax(e){
    e.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form)
    const taxAmt = Number(formData.get("tax-amount"));
    splitTax(taxAmt)
    Modal.closeModal();
}

function splitTax(taxAmt) {
    currentState.tax = Number(taxAmt)
    const tax = document.querySelector(".tax > td.right")
    tax.innerHTML = `$${currentState.tax.toFixed(2)}`

    currentState.guests.forEach(guest => {
        const ratio = guest.subtotal * 1.0 / currentState.subtotal
        const tax = (taxAmt * ratio).toFixed(2)
        guest.tax = tax 
        const guestTax = document.querySelector(`.tax.${guest.name} > td.right`)
        guestTax.innerHTML = `$${guest.tax}`
    })
}

function splitCustomTip(tipAmt) {
    currentState.tip = Number(tipAmt)
    const tip = document.querySelector(".tip > td.right")
    tip.innerHTML = `$${currentState.tip.toFixed(2)}`

    currentState.guests.forEach(guest => {
        const ratio = guest.subtotal * 1.0 / currentState.subtotal 
        const tip = (tipAmt * ratio).toFixed(2)
        guest.tip = tip 
        const guestTip = document.querySelector(`.tip.${guest.name} > td.right`)
        guestTip.innerHTML = `$${guest.tip}`
    })
};

function applyTipRate(tipRate) {
    tipRate = parseFloat(tipRate) / 100.0
    currentState.tip = Number(currentState.subtotal) * (tipRate)
    const tip = document.querySelector(".tip > td.right")
    tip.innerHTML = `$${currentState.tip.toFixed(2)}`

    currentState.guests.forEach(guest => {
        guest.tip = (guest.subtotal * tipRate).toFixed(2)
        const guestTip = document.querySelector(`.tip.${guest.name} > td.right`)
        guestTip.innerHTML = `$${guest.tip}` 
    })
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

    user.subtotal = 0
    user.items.forEach( item => user.subtotal += Number(item.price) )
    const subtotalEl = document.querySelector(`.subtotal.${guest} > td.right`)
    subtotalEl.innerHTML = `$${user.subtotal.toFixed(2)}`

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

                <tr class="tip ${guest.name}">
                    <td>Tip</td>
                    <td class="right">$0.00</td>
                </tr>
                <tr class="tax ${guest.name}">
                    <td>Tax</td>
                    <td class="right">$0.00</td>
                </tr>
                <tr class="total ${guest.name}">
                    <td>Total</td>
                    <td class="right">$0.00</td>
                </tr>
            </table>
        </div>
    `
    list.appendChild(div)
}

function calculate(e) {
    e.preventDefault();
    currentState.total = currentState.subtotal + currentState.tip + currentState.tax
    const total = document.querySelector(".total > td.right")
    total.innerHTML = `$${currentState.total.toFixed(2)}`

    currentState.guests.forEach(guest => {
        const guestTotal = document.querySelector(`.total.${guest.name} > td.right`)
        guestTotal.innerHTML = `$${guest.total.toFixed(2)}`
    })
}

// window.currentState = currentState
