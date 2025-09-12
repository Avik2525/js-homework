const Printer = {
    print(doc) {
        console.log("Printing:", doc);
    }
};

const Fax = {
    fax(doc){
        console.log("Faxing:", doc);
    }
};

const Scanner = {
    scan(doc){
        console.log("scaning:", doc);
    }
};


class OldPrinter {
    constructor() {
        Object.assign(this, Fax);
    }
}

const oldPrinter = new OldPrinter();
oldPrinter.fax("My Document.pdf");

