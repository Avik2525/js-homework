class PaymentMethod {
    pay(amout) {
        throw new Error("pay() petq e irakanacvi jarangi klasum");
    }
}

class CreditCardPayment extends PaymentMethod {
    pay(amout){
        console.log(`Paid ${amout} with credit card.`);
    }
}

class PayPalPayment extends PaymentMethod {
    pay(amout) {
        console.log(`Paid ${amout} with credit card.`);
    }
}

class PaymentProcessor {
    process(paymentMethod, amout) {
        
        paymentMethod.pay(amout);
    }
}