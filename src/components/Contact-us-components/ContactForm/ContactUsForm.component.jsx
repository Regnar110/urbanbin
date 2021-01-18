import './contactusform.scss'

const ContactUsForm = ({label, type, handleChange,  ...otherProps}) => {
    return (
        <div className='mail-form'>
            {
                type === 'textarea' ? 
                <div className='mail-form-textarea'>
                    <label className='mail-input-textarea-label'>{label}</label>
                    <textarea className='mail-input-textarea' type={type} onChange={handleChange} {...otherProps}/>
                </div>
                :            
                <div className='mail-form-group'>
                    <input className='mail-input' onChange={handleChange} {...otherProps} required/>
                    <label className={`${otherProps.value.length ? 'shrink' : ''} mail-input-label`}>{label}</label>
                </div>
            }
        </div>
    )
}

export default ContactUsForm