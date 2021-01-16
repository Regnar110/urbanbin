import './homeheader.scss'
const HomeHeader = ({header}) => {
    return (
        <div className='home-header'>
            <h2>{header}</h2>
        </div>
    )
}

export default HomeHeader;
