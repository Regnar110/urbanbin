import './productitemloading.scss'
import SyncLoader from "react-spinners/SyncLoader";

const ProductItemLoading = () => {
    return (
        <div className='product-loading'>
                <p>Please wait, we are loading your product</p>
                <SyncLoader color={"#2a31f2a4"} loading={true} size={15}/>
        </div>
    )
}

export default ProductItemLoading;