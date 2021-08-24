window.onclick = e => {
    // close modal by clicking anywhere on the modal screen
    if (e.target.matches('.modal-screen')) {
        closeModal();
    }
}

export function closeModal() {
    const el = document.querySelector('.modal')
    el.parentNode.removeChild(el)
}

export function addItemModal(props) {
    // verifications: 
    // item must belong to a guest 
    // const options = props.guests.map( guest => `<option value="${guest.name}">${guest.name}</option>`) 
    const options = props.guests.map( guest => 
        `
        <div>
        <input type="checkbox" name="item-guests" id="checkbox-${guest.name}" value="${guest.name}">
        <label for="item-guest">${guest.name}</label>
        </div>
        `) 
    console.log("options", ...options)
    const div = document.createElement('div');
    div.className = "modal";
    div.innerHTML = `
        <div class="modal-screen">
        </div>
        <div class="modal-form">
            <form>
                <div id="item-name">
                    <label for="item-name">Item Name</label>
                    <input type="text" id="item-name" name="item-name" required>
                </div>
                <div id="item-price">
                    <label for="item-price">Price</label>
                    <input type="text" id="item-price" name="item-price" required>
                </div>
                <div id="item-guests">
                    Assign to guest(s): 
                    <div></div>
                    <div></div>
                    ${options.join("")}
                </div>

              <button id="submit"">Add Item</button>

            </form>
        </div>
              `
            //   <label for="item-guest">Assign to guest</label>
            //   <select id="item-guest" name="item-guest">
            //       ${options}
            //   </select>
    document.body.appendChild(div)
    document.querySelector("input#item-name").focus()
}

export function addGuestModal(props) {
    // verifications: 
    // name must start with a letter 
    // names must be unique 
    const div = document.createElement('div');
    div.className = "modal";
    div.innerHTML = `
        <div class="modal-screen">
        </div>
        <div class="modal-form">
            <form>
                <div id="guest-name">
                    <label for="guest-name">Guest Name</label>
                    <input type="text" id="guest-name" name="guest-name" value="guest${props.guests.length+1}" placeholder="Enter guest name" required>
                </div>
                <button id="submit"">Add Guest</button>
            </form>
        </div>
    `
    document.body.appendChild(div)
    document.querySelector("input#guest-name").focus()
}

export function addTipModal() {
    const div = document.createElement('div');
    div.className = "modal";
    div.innerHTML = `
        <div class="modal-screen">
        </div>
        <div class="modal-form">
            <form>
                <div id="tip-rate">
                    <div>Select Tip Rate</div>
                    <input type="radio" id="tip15" name="tip-rate" value="15%">
                    <label for="tip15">15%</label>
                    <input type="radio" id="tip18" name="tip-rate" value="18%">
                    <label for="tip18">18%</label>
                    <input type="radio" id="tip20" name="tip-rate" value="20%">
                    <label for="tip20">20%</label>
                    <input type="radio" id="tip-custom" name="tip-rate" value="custom">
                    <label for="tip-custom">Custom Amount</label>
                    <input type="text" id="tip-amount" name="tip-amount" placeholder="Enter custom amount" disabled> 
                </div>
    
                <div>
                    <button id="submit"">Add Tip</button>
                </div>
            </form>
        </div>
    `
    document.body.appendChild(div)
}

export function toggleCustomTip(){
    var selected = document.getElementById("tip-custom");
    var customAmt = document.getElementById("tip-amount");
    customAmt.disabled = selected.checked ? false : true 
    if (!customAmt.disabled) { customAmt.focus() };
}

export function addTaxModal() {
    const div = document.createElement('div');
    div.className = "modal";
    div.innerHTML = `
        <div class="modal-screen">
        </div>
        <div class="modal-form">
            <form>
                <div id="tax-amount">
                    <label for="tax-amount">Calculate Tax</label>
                    <input type="text" id="tax-amount" name="tax-amount" placeholder="Enter tax amount" required>
                </div>
    
                <div>
                    <button id="submit"">Add Tax</button>
                </div>
            </form>
        </div>
    `
    document.body.appendChild(div)
}