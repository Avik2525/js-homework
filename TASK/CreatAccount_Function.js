function CreateAccount(accountHolder, accountNumber) {
    return {
        accountHolder: accountHolder,
        accountNumber: accountNumber,
        balance: 0,

        deposit: function(amout){
            if(amout < 0) {
                console.log("error");
            } 
            this.balance += amout;
        },

        withdraq: function(amout) {
            if(amout <= 0){
                console.log("error");
            }
            this.balance -= amout;
        },

        getBalance: function() {
            return this.balance;
        }
    }
}

function Bank() {
    return {
        account: [],

        addAccount: function(account){
            if(account) {
                this.account.push(account);
            }
        },
        findAccount: function(accountNumber) {
            for(let acc of this.account){
                if(acc.accountNumber === accountNumber){
                    return acc;
                }
            }
        },

        totalBalance: function() {
            let total = 0;
            for (let acc of this.account) {
                total += acc.getBalance();
            }
            return total;
        } 
    }
}

const bank = Bank();

const acc1 = CreateAccount("Avik", "001");
const acc2 = CreateAccount("Anna", "002");

acc1.deposit(500);
acc2.deposit(1000);

bank.addAccount(acc1);
bank.addAccount(acc2);

const found = bank.findAccount("001");
console.log(found.accountHolder);

console.log(bank.totalBalance());