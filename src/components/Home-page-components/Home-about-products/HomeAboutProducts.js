import './homeaboutproducts.scss'
import HomeHeader from '../Home-header/HomeHeader.component'

const HomeAboutProducts = () => {
    return (  
        <div className='home-about-products'> 
            <HomeHeader header={'What distinguishes our products?'} />
            <div className='hap-first-row'>
                <div className='hap-first-data'>
                    <h1>
                        High endurance
                    </h1>
                    <div className='data'>
                        <span>&#x276D;  From 120 to 550kg</span>
                        <span>&#x276D;  Compared to plastic rubbish bins, our containers are perfect for selective ash collection</span> 
                    </div>
                </div>
                <div className='hap-second-data'>
                    <h1>
                        Non-flammable
                    </h1>
                    <div className='data'>
                        <span>Which prevents the spread of fire in...</span>
                        <span>&#x276D;  Paintshop's</span>
                        <span>&#x276D;  Petrol station's</span>
                        <span>&#x276D;  Garbage enclosure's / bin shelters</span>
                        <span>&#x276D;  Other places susceptible to fire</span>
                    </div>
                </div>
            </div>
            <div className='hap-second-row'>
                <div className='hap-first-data'>
                    <h1>
                        Durability
                    </h1>
                    <div className='data'>
                        <span>&#x276D;  From 12 to 15 years...</span>
                        <span>&#x276D;  Which is confirmed by operation by municipal companies in ash collection</span>  
                    </div>
                </div>
                <div className='hap-second-data'>
                    <h1>
                        Ease of recycling
                    </h1>
                    <div className='data'> 
                        <span>&#x276D;  Product is 100% recyclable</span>
                        <span>&#x276D;  Possibility of regeneration and change of purpose</span>
                        <span>&#x276D;  The containers fit perfectly into the operation of the Circular Economy System</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutProducts