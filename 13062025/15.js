let user = {
    name: "Mamikon",
    age: 44,

    address: {
        city: "Sevan",
        zip: 9078,

        gat: {
            lat: 40.54321,
            lng: 50.12345,
        }
    }
};


const {
    address: {
        city,
        zip,

        gat: {lat, lng}
    }
} = user;


console.log(city);
console.log(zip);
console.log(lat);
console.log(lng);