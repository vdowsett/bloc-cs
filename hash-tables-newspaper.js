// 8. Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data.

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

class Newspaper extends Hashtable {

    constructor(storage, limit, count) {
        super(storage, limit, count);
    }

	promptPublisher() {
		let publisher = prompt('Enter newspaper publisher');
		// let publisher = "The Herald"
        return publisher;
    }

    promptPublicationDate() {
		let publicationDate = prompt('Enter newspaper publication date MM/DD/YY');
		// let publicationDate = "01/01/18"
        return publicationDate;
    }

    promptContent() {
		let content = prompt('Enter newspaper content');
		// let content = "abcdefg"
        return content;
	}
	
	setKey() {

		let key = this.promptPublisher() + " " + this.promptPublicationDate();

		return key;
	}

    setValue() {

        let value = this.promptContent();

        return value;
	}

	lookup() {
	
	let key = this.setKey();
	let value = this.setValue();

	super.lookup(key);

	}

	add() {
	
		let key = this.setKey();
		let value = this.setValue();
	
		super.add(key);
	
		}


};

let newspaper = new Newspaper ([], 10, 0);

newspaper.lookup();

newspaper.add();

newspaper.print();