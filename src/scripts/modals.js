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
    const options = props.guests.map( guest => `<option value="${guest.name}">${guest.name}</option>`) 
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
              <div id="item-guest">
                    <label for="item-guest">Assign to guest</label>
                    <select id="item-guest" name="item-guest">
                        ${options}
                    </select>
                </div>
                <div>
                    <button id="submit"">Add Item</button>
                </div>
            </form>
        </div>
    `
    document.body.appendChild(div)
}

export function addGuestModal() {
    const div = document.createElement('div');
    div.className = "modal";
    div.innerHTML = `
        <div class="modal-screen">
        </div>
        <div class="modal-form">
            <form>
                <div id="guest-name">
                    <label for="guest-name">Guest Name</label>
                    <input type="text" id="guest-name" name="guest-name" value="Untitled" required>
                </div>
    
                <div>
                    <button id="submit"">Add Guest</button>
                </div>
            </form>
        </div>
    `
    document.body.appendChild(div)
}