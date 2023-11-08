{
  // block starts
  {
    // block starts
    /* access modifier */
    class BankAccount {
      public readonly id: number;
      public readonly name: string;
      protected _balance: number;

      constructor(id: number, name: string, _balance: number) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
      }

      addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }

      private getBalance() {
        return this._balance;
      }

      getHiddenMethod() {
        return this.getBalance();
      }
    }

    // Creation of Student class
    class StudentAccount extends BankAccount {
      test() {}
    }

    const goribAccount = new BankAccount(111, "Mr. go", 1000);

    goribAccount.addDeposit(100);
    console.log(goribAccount.getHiddenMethod());

    // block ends
  }

  // block ends
}
