import './producttile.scss'

const ProductTile = ({img, desc}) => {
    return(
        <div className='tile'>
            <div className='tile-svg'>
                <img alt='tile' src={img} />
            </div>
            <div className='tile-desc'>
                {desc}
            </div>
        </div>
    )
}

export default ProductTile