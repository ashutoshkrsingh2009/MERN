



import { useEffect } from 'react'
import { useState } from 'react'

const Product = () => {
    const[data, setData] = useState([])



    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((r) => {
            return r.json()
        })
        .then((d) => {
            setData(d.products)
        })
    }, [])

  return (
    <div>
        {
            data.length > 0 ? (
                data.map((item) => {
                    return <h1>{item.title}</h1>
                })
            ) : (
                <h1>Loading...</h1>
            )
        }
    </div>
  )
}

export default Product