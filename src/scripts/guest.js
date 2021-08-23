export default class Guest {
    constructor(name) {
        this.name = name;
        this.items = [];  
        this.subtotal = 0;
        this.tip = 0;
        this.tax = 0;
    }

    get total() {
        return Number(this.subtotal) + Number(this.tip) + Number(this.tax) 
    }
}
