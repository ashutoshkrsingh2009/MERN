const api="https://dummyjson.com/quotes"
const container=document.getElementById("main")

fetch(api)
.then((responce)=>{
    return responce.json() 
})
.then((data)=>{

    for(let item of data.quotes)
    {
      const card=document.createElement("article")

      const id=document.createElement("h2")
      id.innerText=item.id +"."
      container.append(id)

      const quote=document.createElement("h3")
      quote.innerText=item.quote
      container.append(quote)

      const author=document.createElement("h1")
      author.innerText=item.author
      container.append(author)

    }
    
})

