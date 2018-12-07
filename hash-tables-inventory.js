// 7. Build a system that allows a store owner to track their store's inventory using a hash table for storage.

var hash = (string, max) => {
    var hash = 0;
    var l = string.length;
    for (var i = 0; i < l; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
};

class Hashtable {

    constructor(storage, limit, count) {
        this.storage = storage;
        this.limit = limit;
        this.count = count;
    }

    print() {
        console.log(this.storage);
        console.log(this.limit);
    }

    add(key, value) { //add new key value pair

        var index = hash(key, this.limit);

        if (this.storage[index] === undefined) {
            this.storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (var i = 0; i < this.storage[index].lenght; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value]);
            }
        }

    }

    lookup(key) { //lookup key return value

        var index = hash(key, this.limit);

        console.log(index);

        if (this.storage[index] === undefined) {
            let item;
            return item = undefined;

        } else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }

    }

};

class Inventory extends Hashtable {

    constructor(storage, limit, count) {
        super(storage, limit, count);
    }

    promptSKU(key) {
        key = prompt('Enter Item SKU number');
        return key;
    }

    promptDescription() {
        let description = prompt('Enter Item description');
        console.log("setting description to object: " + description);

        return description;
    }

    promptCount() {
        let itemCount = prompt('Enter Item count');
        console.log("setting itemCount to object: " + itemCount);

        return itemCount;
    }

    setValue() {

            this.promptDescription();
            this.promptCount();

        let value = {
            itemDescription: this.description,
            itemCount: this.count
        }

        console.log("setting value to object: " + value);

        return value;
    }

    lookup() {

        let key = this.promptSKU();

        super.lookup(key);

        if (super.item === undefined) {
            let value = this.setValue();
            super.add(key, value);
            console.log("Added new item ");

        } else {
            console.log("Found item in table");
            return;
        }
    }

};

let inventory = new Inventory([], 10, 0);

inventory.lookup();

