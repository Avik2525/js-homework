class StorageProvider {
    constructor(){
        if (this.constructor === StorageProvider){
            throw new Error("Error");
        }
    }
    upload() {
        throw new Error("Error1");
    }

    download() {
        throw new Error("Error2");
    }
}

class LocalStorageProvider extends StorageProvider {
    upload(file) {
        console.log(`${file} fayln verbernvec`);
    }

    download(filename) {
        console.log(`${filename} fayln nerbernvec`);
    }
}

class CloudStorageProvider extends StorageProvider {
    upload(file) {
        console.log(`${file} fayln verbernvec`);
    }

    download(filename) {
        console.log(`${filename} fayln nerbernvec`);
    }
}

function userStorage(provider) {
    if(typeof provider.upload !== 'function'){
        throw new Error("error");
    }

    if (typeof provider.download !== 'function') {
        throw new Error("Error");
    }

    console.log("Ameninch barehajox ancel e");
    return provider;
}

const local = new LocalStorageProvider();
const cloud = new CloudStorageProvider();

userStorage(local).upload("data.txt");
userStorage(local).download("data.txt");

userStorage(cloud).upload("image.png");
userStorage(cloud).download("image.png");