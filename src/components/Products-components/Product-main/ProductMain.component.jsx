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
        desc: 'CHIP identification possible (RFID)'
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
            <p>URBANBIN containers are intended for the storage and transport of various types of waste.
            They are made of high-quality galvanized sheet metal, additionally reinforced with numerous embossments, ensuring high rigidity and aesthetics of the containers.
            The components of the structure are joined by welding and braze welding.
            
All containers are protected against corrosion by powder coating, in accordance with the colors of selective waste collection or according to individual customer needs, architecture and style (e.g. loft).</p>
            <p>
            The lids of the containers have reinforcement embossing, are tiltable and have handles for opening and transport.
            The bottoms of the containers are separated from the ground and additionally protected with anti-corrosive rubber glued in, which insulates the container from the ground, ensuring its quiet operation and aesthetics.
            All containers are equipped with wheels that facilitate their easy movement.
            </p>
            </div>
        </div>
    )
}

export default ProductMain;