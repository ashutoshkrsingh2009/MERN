// inheritance 
// single inheritance

class parent{
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
   
   sayhii(){
    console.log("nameste");
    
   }
}

let p1= new parent("sanjeev",60)
console.log(p1);

class child extends parent{
    constructor(name,age,mobile)
    {
        super(name,age)
        this.mobile=mobile
    }
    sayhii(){
        console.log('ram ram tau');
        
    }
}
let c1= new child("anku",34,"APPLE")
console.log(c1);

class grandchild extends child{
    constructor(name,age,mobile,cycle)
    {
        super(name,age,mobile)
       this.cycle=cycle
    }
}
let gc=new grandchild("naman",15,"moto","bmw")
console.log(gc);


gc.sayhii()
c1.sayhii()
