import './sidepopup.scss';
import poland from '../../assets/poland.svg'

const SidePopUpBar = () => {

    const popUpsArray = [
        {
            content1: '+48 697 003 008 (ENG)',
            content2: '+48 500 430 017 (PL)',
            faIcon: 'fas fa-phone fa-2x'
        },
        {
            content1: 'Bp. Dominika 43',
            content2: '83-200 Starogard Gdański',
            image: poland
        },
        {
            content1: 'urbanbin.biuro@gmail.com',
            faIcon: 'fas fa-at fa-2x'
        }
    ]

    return(
        <div className='side-bars-container'>
            {
                popUpsArray.map(({content1, content2, image, faIcon}, index) => {
                    return (
                        <div key={index} className='side-bar'>
                            <div className='hidden'>
                                <p>{content1}</p>
                                <p>{content2}</p>
                            </div>
                            <div className='visible'>
                                {
                                    image ? 
                                        <img alt='popup' src={image} />
                                    :
                                        faIcon ? 
                                            <i className={faIcon}/>
                                        :
                                        null
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default SidePopUpBar;