import {useEffect} from 'react'
// import axios from "axios";

function Home() {
    // const [product, setProduct] = useState([]);
    // const [products, setProducts] = useState([]);
    // const [user, setUser] = useState([]);
    //
    // useEffect(() => {
    //     async function fetchProductData() {
    //         try {
    //             const response = await axios.get('http://localhost:5000/api/v1/products');
    //             console.log(response.data.products)
    //             setProducts(response.data.products);
    //         } catch (error) {
    //             console.error('Error fetching product data:', error);
    //         }
    //     }
    //
    //     fetchProductData().catch((e) => console.error(e));
    // }, []);

    useEffect(() => {
        return () => {
            effect
        };
    }, [input]);



    return (
        <>
            <h1>Hello</h1>


            {/*<div>*/}
            {/*    {products.map(product => (*/}
            {/*        <div key={product.id} className={"card"}>*/}
            {/*            <p>Name: {product.name}</p>*/}
            {/*            <p>Desc: {product.description}</p>*/}
            {/*            <p>User:{product.user}</p>*/}
            {/*            <p>Price: {product.price}</p>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </>
    )
}

export default Home
