import './productitemdata.scss'

const ProductItemData = ({ productDetails }) => {
    return (
        <div className='details-container'>
            <div className='details-header'>Technical details card</div>
            {
                productDetails.map(({type, content},index) => {
                    return (
                        <div className='data'>
                            <div key={index} className='data-header'>{type}:</div>
                            {
                                content.map((element,index) => {
                                    return <span key={index}>- {element}</span>
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


{/* <div className='data'>
<div className='data-header'>Capacity</div>
<span>- Nominal capacity (L) - 120</span>                  
</div>
<div className='data'>
<div className='data-header'>Dimensions</div>
</div>
<div className='data'>
<div className='data-header'>Mass</div>
</div>
<div className='data'>
<div className='data-header'> Material and construction</div>
</div>
<div className='data'>
<div className='data-header'>Anti-corrosion protection and color</div>
</div>
<div className='data'>
<div className='data-header'>Material and construction</div>
</div>
<div className='data'>
<div className='data-header'>Available Colours</div>
</div>
<div className='data'>
<div className='data-header'>Sticker</div>
</div> */}