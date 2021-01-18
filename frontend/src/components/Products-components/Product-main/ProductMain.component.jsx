import './productmain.scss'
import ProductTile from './ProductTiles/ProductTile.component'
import material from '../../../assets/Products/product-main/tiles/material.svg'
import construction from '../../../assets/Products/product-main/tiles/construction.svg'
import compatible from '../../../assets/Products/product-main/tiles/compatible.svg'
import chip from '../../../assets/Products/product-main/tiles/chip.svg'
import noflame from '../../../assets/Products/product-main/tiles/non-flammable.svg'
import wastecollection from '../../../assets/Products/product-main/tiles/wastecollection.svg'

const productTiles = [
    {
        img: material,
        desc: 'Metal galvanized containers, powder coated according to the RAL palette'
    },
    {
        img: construction,
        desc: 'Reinforced structure'
    },
    {
        img: compatible,
        desc: 'Containers compatible with all devices on the municipal market (DIN 30700)'
    },
    {
        img: chip,
        desc: 'CHIP identification possible'
    },
    {
        img: noflame,
        desc: 'Containers are non-flammable'
    },
    {
        img: wastecollection,
        desc: 'Containers for selective waste collection'
    },
]

const ProductMain = () => {
    return (
        <div className='product-main'>
            <div className='product-tiles'>
                {
                    productTiles.map(({img, desc}, index) => {
                        return <ProductTile key={index} img={img} desc={desc} />
                    })
                }
            </div>
            <div className='gradient-break'/>
            <div className='about-products'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </div>
        </div>
    )
}

export default ProductMain;