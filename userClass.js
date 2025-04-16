class user {
    constructor (userID, name, age, ...other) { // Other param should be a table
        this.userID = userID;
        this.name = name;
        this.age = age;
        this.other = other;
    }

    debug() {
        console.log(`User: ${this.userID} successfully connected to the server`);
    }

    introduce() {
        console.log(`Hello! ${this.name} How are you doing?`);
    }

    otherThings() {
        console.log(`I heard you like to do stuff like: ${this.other}`);
    }
}