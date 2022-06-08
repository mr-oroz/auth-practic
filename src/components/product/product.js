import ProductItem from "../product_item/product_item";
import './product.css';



const Product = ({data , increment, decrement}) => {
    // console.log(increment, decrement)
    return (
        <div className="product">
            {
                data.map((element, index) => {
                    return <ProductItem
                    {...element}
                    key={index}
                    increment={increment}
                    decrement={decrement}/>
                })
            }
        </div>
    )
}

export default Product;