import { useParams } from 'react-router-dom'

const ProductOne = () => {

    let { productId } = useParams();

    return (
        <div>Product Id:  {productId}</div>
    )
}

export default ProductOne;