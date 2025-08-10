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
        Object.assign(this, Printer);
    }
}

const oldPrinter = new OldPrinter();
oldPrinter.print("My Document.pdf");
