class CreateAccount {
    #balanc;
    constructor(accountHolder, accountNumber){
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.#balanc = 0;
    }
    deposit(amount){
        if (amount < 0){
            console.log("Error");
            return;
        }
        this.#balanc += amount;
    }

    withdraw(amount){
        if (amount <= 0){
            console.log("Error");
            return ;
        }
        this.#balanc -= amount;
    }

    getBalance(){
        return this.#balanc;
    }
}

class Bank {
    constructor(){
        this.account = [];
    }
    addAccount(account){
        if(account){
            this.account.push(account);
        }
    }
    findAccount(accountNumber) {
        for (let acc of this.account){
            if(acc.accountNumber === accountNumber){
                return acc;
            }
        }
    }
    totalBalance(){
        let total = 0;
        for (let acc of this.account){
            total+= acc.getBalance();
        }
        return total;
    }
}

const bank = new Bank();

const acc1 = new CreateAccount("Jonsn", "001");
const acc2 = new CreateAccount("Vernon", "002");

acc1.deposit(2500);
acc2.deposit(2500);

bank.addAccount(acc1);
bank.addAccount(acc2);

const found = bank.findAccount("002");
console.log(found.accountHolder);

console.log(bank.totalBalance());