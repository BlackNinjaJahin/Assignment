


//Creating  a BankAccount class
class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
   // Creating deposit and withdraw methods
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance - amount >= 0) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`
Account Number: ${this.accountNumber}
Owner Name: ${this.ownerName}
Balance: $${this.balance}
        `);
    }
}


//Create two instances of the BankAccount class
let account1 = new BankAccount(1001, "Abdullah Al Mahdi", 500);
let account2 = new BankAccount(2002, "Ahmed", 1000);



account1.deposit(100);
account1.withdraw(50);
account1.displayAccountInfo();

account2.deposit(500);
account2.withdraw(200);
account2.displayAccountInfo();
