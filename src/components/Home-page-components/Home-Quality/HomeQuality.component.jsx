import './homequality.scss'
import qualityBg from '../../../assets/Home/HomeQuality/breakbg2.jpg'

const HomeQuality = () => {
    return (
        <div className='home-quality' style={{
            background: `url(${qualityBg}) center center no-repeat fixed`,
            backgroundSize:'cover'
        }}> 
            <div className='home-quality-container'>
                <div className='home-quality-content'>Only the highest quality products</div>
            </div>
        </div>
    )
}

export default HomeQuality