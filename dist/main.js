class PostgresqlDB {
    saveData(data) {
        console.log(`PostgresqlDB saved data: ${JSON.stringify(data)}`);
    }
}
class MySQLDB {
    saveData(data) {
        console.log(`MySQLDB saved data: ${JSON.stringify(data)}`);
    }
}
// Bank Account
class BankAccount {
    constructor(database) {
        this.database = database;
    }
    saveData(data) {
        this.database.saveData(data);
    }
}
// Application
class Application {
    constructor(bankAccount) {
        this.bankAccount = bankAccount;
    }
    saveData(data) {
        this.bankAccount.saveData(data);
    }
}
// Main Function
function main() {
    // Database
    const database = new PostgresqlDB();
    // Bank Account
    const bankAccount = new BankAccount(database);
    // Application
    const application = new Application(bankAccount);
    application.saveData({
        name: 'GOL D. Axura',
        email: 'axura@gmail.com',
    });
}
main();
