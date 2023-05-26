const crypto = require("crypto");

// The basic properties of a transaction will be the amount, senderPublicKey, and recieverPublicKey
class Transaction {
    constructor(amount, senderPublicKey, recieverPublicKey) {
        this.amount - amount;
        this.senderPublicKey = senderPublicKey;
        this.recieverPublicKey = recieverPublicKey;
    }

    //Convert the object of the class into a string so as to convert it into a hash
    toString() {
        return JSON.stringify(this);
    }
}

class Block{
    constructor(previousHash, transaction, timestamp = Date.now()){
        this.previousHash = previousHash;
        this.transaction = transaction;
        this.timestamp = timestamp;
    }

    getHash() {
        const json = JSON.stringify(this);
        const hash = crypto.createHash("SHA256");
        hash.update(json).end();
        const hex = hash.digest("hex");
        return hex;
    }

    toString() {
        JSON.stringify(this);
    }
}

class Chain {
    static instance = new Chain();

    constructor() {
        this.chain = [new Block("", new Transaction(100, "temp", "temp"))];
    }

    getpreviousBlockHash(){
        return this.chain[this.chain.length - 1].getHash();
    }

    insertBlock(transaction, senderPublicKey, sig){
        const verify = crypto.createVerify("SHA256");
        verify.update(transaction.toString());
        const isValid = verify.verify(senderPublicKey, sig);
        if(isValid) {
            const block = new Block(this.getpreviousBlockHash(), transaction);
            console.log("Block added", block.toString());
            this.chain.push(block);
        }
    }
}

class Wallet{
    constructor(){
        const keys = crypto.generateKeyPairSync("rsa", {
            modulusLength: 2048,
            publicKeyEncoding: {type: "spki", format: "pem"},
            privateKeyEncoding: {type: "pkc8", format: "pem"},
        })
        this.privateKey = keys.privateKey;
        this.publicKey = keys.publicKey;
    }

    send(amount, recieverPublicKey){
        const transaction = new Transaction(
            amount,
            this.publicKey,
            recieverPublicKey
        );
        const shaSign = crypto.createSign("SHA256");

        shaSign.update(transaction.toString()).end();

        const signature = shaSign.sign(this.privateKey);
        Chain.instance.insertBlock(transaction, this.publicKey, signature);
    }
}