document.querySelector("button#items").addEventListener("click", addItemModal);
document.querySelector("button#users").addEventListener("click", addGuestModal);

window.onclick = e => {
    // close modal by clicking anywhere on the modal screen
    if (e.target.matches('.modal-screen')) {
        closeModal();
    }
}

function closeModal() {
    const el = document.querySelector('.modal')
    el.parentNode.removeChild(el)
}

function addItemModal() {
    const div = document.createElement('div');
    div.className = "modal";
    div.innerHTML = `
        <div class="modal-screen">
        </div>
        <div class="modal-form">
            <form>
            </form>
        </div>
    `
    document.body.appendChild(div)
}
function addGuestModal() {
    const div = document.createElement('div');
    div.className = "modal";
    div.innerHTML = `
        <div class="modal-screen">
        </div>
        <div class="modal-form">
            <form>
            </form>
        </div>
    `
    document.body.appendChild(div)
}

const itemModal = () => {

}