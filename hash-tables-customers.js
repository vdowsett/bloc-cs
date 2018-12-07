// Build a system that allows a sales associate to enter a customer's name, address, and phone number into the system and look up customers using their phone numbers. Store this information in a hash table.

var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };

class CustomerInfo {

    constructor(storage, limit, count) {
     this.storage = storage;
     this.limit = limit;
     this.count = count;
    }

      print() {
          console.log(this.storage);
          console.log(this.limit);
      }
  
      add(key, value) { //add new customers
          
          var index = hash(key, this.limit);
  
          if (this.storage[index] === undefined) {
            this.storage[index] = [
                  [key, value]
              ];
          } else {
              var inserted = false;
              for ( var i = 0; i < this.storage[index].lenght; i++ ) {
                  if ( this.storage[index][i][0] === key ) {
                    this.storage[index][i][1] = value;
                      inserted = true;
                  }
              }
              if (inserted === false) {
                this.storage[index].push([key, value]);
              }
          }
  
      }
  
      lookup(key) {

        var key = prompt('Search for customer by phone number ###-###-####');
          
          var index = hash(key, this.limit);

          console.log(index);
  
          if (this.storage[index] === undefined) {
              
              console.log("Customer not found, please create new customer");
              
              let name = prompt('Enter customer name');
              let address = prompt('Enter customer address');
              
              let value = {
                name: name,
                address: address
              }
              
              this.add(key, value);

          } else {
              for ( var i = 0; i < this.storage[index].lenght; i++ ) {
                  if (this.storage[index][i][0] === key) {
                      let customerDetails = this.storage[index][i][1];
                      console.log("Customer: " + customerDetails)
                      return customerDetails;
                  }
              }
          }
  
      }
  
    };
  
        //create function that takes input of phone:
        // if phone number = existing key then return info
        //else and sets phone to value of key, and asks for name and address turns into object called value, and then insert into above has table
  
let customer = new CustomerInfo( [], 10, 0 );
 
customer.print();

customer.lookup();

customer.print();