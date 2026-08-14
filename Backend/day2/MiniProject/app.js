const fs=require("fs")
const[a,b,operation,filename,data]= process.argv

try {
    if(!operation || !filename){
    throw new Error("PLEASE ENTER OPERATION AND FILE NAME");
    
}

switch(operation)
{

    case "create":
      if(!data)
      {
        throw new Error("please enter some data")
      }
      else
      {
             fs.writeFileSync(filename,data)
             console.log("file created sucessfully");
             
             break
      }
    case "read":
        const val=fs.readFileSync(filename,"utf-8")
        console.log(val); 
        break
    case "update":
        if(!data)
        {
            throw new Error("please enter some data")
        }
        else
        {
           fs.appendFileSync(filename,data)
           break
        }
    case "delete":
    
    default:

}
    
} catch (error) {
   console.log(error.message);
}

