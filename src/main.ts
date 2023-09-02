// Database
interface Database {
  saveData(data: any): void;
}

class PostgresqlDB implements Database {
  saveData(data: any): void {
    console.log(`PostgresqlDB saved data: ${JSON.stringify(data)}`);
  }
}

class MySQLDB implements Database {
  saveData(data: any): void {
    console.log(`MySQLDB saved data: ${JSON.stringify(data)}`);
  }
}

// Bank Account
class BankAccount {
  constructor(private database: Database) {}

  saveData(data: any) {
    this.database.saveData(data);
  }
}

// Application
class Application {
  
  constructor(private bankAccount: BankAccount) {} 

  saveData(data: any) {
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
  application.saveData(
    {
      name: 'GOL D. Axura',
      email: 'axura@gmail.com',
    }
  )

}

main();