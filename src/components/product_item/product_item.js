import './product_item.css'


const ProductItem = (props) => {
    const {title, img, description, count, price, discount,  increment, decrement} = props
    return(
            <div className="card">
                <img src={img} alt=""/>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className='group'>
                    <button onClick={increment}>-</button>
                    <span>Count{count}</span>
                    <button onClick={decrement}>+</button>
                </div>
                <p>{price}</p>
                <p>{discount}</p>
            </div>
    )
}

export default ProductItem