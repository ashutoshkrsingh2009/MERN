const api="https://dummyjson.com/todos"
const container=document.getElementById("main")

fetch(api)
.then((responce)=>{
    return responce.json() 
})
.then((data)=>{

    for(let item of data.todos)
    {
      const card=document.createElement("article")

      const id=document.createElement("h2")
      id.innerText=item.id +"."
      container.append(id)

      const todo=document.createElement("h2")
      todo.innerText=item.todo
      container.append(todo)

      const complete=document.createElement("h2")
      complete.innerText=item.completed
      container.append(complete)

      const userid=document.createElement("h2")
      userid.innerText=item.userId 
      container.append(userid)      

    }
    
})