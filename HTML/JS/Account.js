
export class Account {
    name;
    password;
    country;
    phone;
    address;
    birthdate;
    email;
    paymentMethod;
    numofpurchases;
    boughtProducts;
    constructor(user){
        user.name =this.name;
        user.password =this.password;
        user.country =this.country;
        user.phone =this.phone;
        user.address =this.address;
        user.birthdate =this.birthdate;
        user.email =this.email;
    }
    get name() {
        return this.name;
    }
    set name(value) {
        this.name = value;
    }
    get password() {
        return this.password;
    }
    set password(value) {
        this.password = value;
    }
    get country() {
        return this.country;
    }
    set country(value) {
        this.country = value;
    }
    get phone() {
        return this.phone;
    }
    set phone(value) {
        this.phone = value;
    }
    get address() {
        return this.address;
    }
    set address(value) {
        this.address = value;
    }
    get birthdate() {
        return this.birthdate;
    }
    set birthdate(value) {
        this.birthdate = value;
    }
    get email() {
        return this.email;
    }
    set email(value) {
        this.email = value;
    }
    get paymentMethod() {
        return this.paymentMethod;
    }
    set paymentMethod(value) {
        this.paymentMethod = value;
    }
    get numofpurchases() {
        return this.numofpurchases;
    }
    set numofpurchases(value) {
        this.numofpurchases = value;
    }
    get boughtProducts() {
        return this.boughtProducts;
    }
    set boughtProducts(value) {
        this.boughtProducts = value;
    }
    buyproduct(product){
        this.boughtProducts.push(product);
        this.numofpurchases++;
    }
}
function key(value) {
    let sum = value.map(char => char.charCodeAt(0))
    .reduce((current, previous) => previous + current)
    return sum;
}
export var users = [];
export function addUser(user){
users[key(user.email)](new Account(user));
}
export function removeUser(email) {
    users.splice(key(email), 1);
}
export function getUser(email){
    if(users[key(email)]!= undefined)
    return users[key(email)];
    else return ("{username} not found");
}
export function getUsers(){
    users.fi
}
export function userExists(email){
    if(users[key(email)]!=undefined)
    return true;
    else return false;
}
export function validateData(email,password){
if(userExists(email)){
    if(users[key(email)].password==password)
    return 1;
    else return 0;
}
else return -1;
}