import './productitemloading.scss'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const ProductItemLoading = () => {
    return (
        <div className='product-loading'>
                <p>Please wait, we are loading your product</p>
                <ClipLoader color={"#2a31f2a4"} loading={true} size={300}/>
                <p class='small'>If loading takes more than 30 seconds, check your internet connection or contact us to report the problem.</p>
        </div>
    )
}

export default ProductItemLoading;