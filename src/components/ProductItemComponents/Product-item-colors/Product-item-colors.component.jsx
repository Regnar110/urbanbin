import './productitemcolors.scss'

const ProductItemColors = ({ handleColorClick }) => {

    const colors = [
        {color: 'black'},
        {color: 'blue'},
        {color: 'green'},
        {color: 'yellow'},
        {color: 'violet'},
        {color: 'gray'},
        {color: 'pink'},
        {color: 'brown'},
        {color: 'red'},
        {color: 'black'},
        {color: 'violet'},
        {color: 'pink'},
        {color: 'brown'},
        {color: 'green'},

    ]

    return (
        <div className='colors-container'>
            {
                colors.map(({ color }, index) => {
                    return <div key={index} onClick={() => {
                        handleColorClick(color)
                    }} className='color' style={{backgroundColor: `${color}`}}>
                        {index}
                    </div>
                })
            }
        </div>
    )
}

export default ProductItemColors