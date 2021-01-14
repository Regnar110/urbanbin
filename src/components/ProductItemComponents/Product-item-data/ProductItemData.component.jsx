import './productitemdata.scss'
import ProductItemModal from '../ProductItemModal/ProductItemModal.component'

const ProductItemData = ({ productDetails }) => {
    return (
        <div className='details-container'>
            <div className='details-header'>Technical details</div>
            {
                productDetails.map(({type, content, button},index) => {
                    return (
                        <div key={index} className='data'>
                            <div  className='data-header'>{type}</div>
                            {
                                button? (
                                    <div className='buttons'>
                                    {
                                        button.map(({text, image}, index) => {
                                            return <div key={index} className='buttons'><ProductItemModal index={index} text={text} image={image}/></div>
                                        })
                                    }
                                    </div>
                                )
                                :
                                content.map((element, index) => {
                                    return (
                                        <span key={index}>- {element}</span>
                                    )
                                })
  
                            }                
                        </div>
                    )
                }) 
            }
        </div>
    )
}

export default ProductItemData;
