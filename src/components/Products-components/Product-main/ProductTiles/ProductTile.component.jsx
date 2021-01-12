import './producttile.scss'

const ProductTile = ({img, desc}) => {
    return(
        <div class='tile'>
            <div className='tile-svg'>
                <img src={img} />
            </div>
            <div className='tile-desc'>
                {desc}
            </div>
        </div>
    )
}

export default ProductTile