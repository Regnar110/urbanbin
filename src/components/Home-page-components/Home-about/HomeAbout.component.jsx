import './homeabout.scss';
import HomeHeader from '../Home-header/HomeHeader.component'
import CustomButton from '../../CustomButton/CustomButton.component'

const HomeAbout = () => {
    return(
        <div className='home-about'>
        <HomeHeader header={'Briefly about us'}/>
        <div className='home-about-content'>
            <p>
                The company was established by combining experienced producers "GUZMET" and "MARKMET" operating on the market for over 30 years.
                Specialization of the management staff, production, modern machinery and the company's mission are the factors that allowed for the introduction of high-quality containers with high aesthetic and operational values.
                Since 2000, we have been systematically increasing the range of the offered containers and today we offer a full package to meet the needs of the market.
            </p>
        </div>
        <CustomButton name={'Company'} UrlLink='/company'/>
        </div>
    )
}

export default HomeAbout