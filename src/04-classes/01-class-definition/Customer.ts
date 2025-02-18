class Customer {
  firstName: string = "";
  lastName: string = "";
  constructor(firstname: string, lastName: string) {
    this.firstName = firstname;
    this.lastName = lastName;
  }
}

let customer = new Customer("Bharti", "Taneja");

console.log(customer.firstName);
console.log(customer.lastName);
