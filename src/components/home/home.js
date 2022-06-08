import "./home.css"
import Product from '../product/product'

const Home = ({data, decrement, increment}) => {
    // console.log(increment, decrement)

    return(
        <div>
            <Product data={data} 
            decrement={decrement} 
            increment={increment}/>
        </div>
    )
}


export default Home;