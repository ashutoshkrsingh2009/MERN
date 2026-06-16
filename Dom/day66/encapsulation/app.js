// encapsultion 

// class bankaccount{
//     constructor(username,bal)
//     {
//         this.username=username
//         this.balance=bal
//     }
// }
// const user=new bankaccount("ashu",999)
// console.log(user);
// user.balance=99999999999
// console.log(user);


class bankaccount{
    #balance
    #pin
    constructor(username,bal,pin)
    {
        this.username=username
        this.#balance=bal
        this.#pin=pin
    }

    // getter 
    getBalance()
    {
        console.log(this.#balance);
    }

    // setter
    setBalance(pin,amount)
    {
        if(this.#pin != pin)
        {
            console.log("invalid pin"); 
            return
        }
        this.#balance= this.#balance+amount
        console.log(`amount deposited and total balance:${this.#balance}`);
    }

    withdraw(pin,amount)
    {
       if(this.#pin != pin)
        {
        console.log("invalid pin"); 
        return
        }
        if(this.#balance<amount)
        {
            console.log(`insufficient fund and total available balance is :${this.#balance}`);
            return
            
        }
        this.#balance= this.#balance+-amount
        console.log(`amount withdraw and total available balance is :${this.#balance}`);
    }

}
const user=new bankaccount("ashu",500,1234)
console.log(user);
user.getBalance()
user.setBalance(1234,1000)
user.withdraw(1234,1500)
