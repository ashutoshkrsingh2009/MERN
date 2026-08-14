
function ProductCard({name,price,image,onSale}) {

  return (
    <div>
        <img src={image} alt="" />
        <div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default ProductCard