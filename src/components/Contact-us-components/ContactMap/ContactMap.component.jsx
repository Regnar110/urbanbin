import './contactmap.scss'

const ContactMap = () => {
    return (
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe title='google-map' id="gmap_canvas" src="https://maps.google.com/maps?q=biskupa%20Konstantyna%20Dominika%2043,%2083-250%20Starogard%20Gda%C5%84ski,%20Polska&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
            </div>
        </div>
    )
}

export default ContactMap;