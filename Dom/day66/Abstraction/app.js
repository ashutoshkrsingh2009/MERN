/// abstraction

class car{
    constructor(n)
    {
        this.name=n
    }

startCar()
{
    this.#injectFuel()
    this.#ignitefuel()
}

#injectFuel()
{
    console.log("fuel injected"); 
}

#ignitefuel()
{
    console.log("fuel ignited");
    
}

}
const mycar=new car("bmw")
mycar.startCar()