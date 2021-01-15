import { useState } from 'react'
import './contact.scss'
import SiteHeader from '../../components/SitesHeader/SiteHeader.component'
import ContactUsForm from '../../components/Contact-us-components/ContactForm/ContactUsForm.component'
import ContactSectionHeader from '../../components/Contact-us-components/ContactSectionHeader/ContactSectionHeader.component'
import ContactMap from '../../components/Contact-us-components/ContactMap/ContactMap.component'
import CustomButton from '../../components/CustomButton/CustomButton.component'
import RequestConfirm from '../../components/Contact-us-components/requestConfirm/RequestConfirm.component'

const Contact = () => {

  const [sender, setSender] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [requestStatus, changeRequestStatus] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://cryptic-tor-49247.herokuapp.com/sendmail', {
                  method: "POST",
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'}, 
                  body: JSON.stringify({
                    sender: sender,
                    email: email,
                    message: message
                  })
                })
      const data = await response.json();
      changeRequestStatus(data.status)
    } catch {
      changeRequestStatus('fail')
    } finally {
      setSender('')
      setEmail('')
      setMessage('')
    }

  }

  const handleChange = event => {
    const targetName = event.target.name
    if(targetName === 'sender') {
      setSender(event.target.value)
    }else if(targetName === 'email') {
      setEmail(event.target.value)
    } else if(targetName === 'message') {
      setMessage(event.target.value)
    }
  }

  return (
    <div id='section' className='contact'>
      <SiteHeader siteHeader={'CONTACT US'}/>
      <div className='contact-first-row'>
        <div className='company-data'>
        <ContactSectionHeader sectionTitle={'CONTACT DETAILS'} />
          <div className='contact-details'>
            <div className='data'>
              <div className='data-header'>Contact number</div>
              <p>+48 697 003 008</p>
            </div>
            <div className='data'>
              <div className='data-header'>Address</div>
              <p>Bp.Dominika 43a</p>
              <p>83-200 Starogard Gdański, Poland</p>
            </div>
            <div className='data'>
              <div className='data-header'>E-mail</div>
              <p>biuro@urbanbin.pl</p>
            </div>
          </div>
        </div>
        <div className='google-map'>
          <ContactSectionHeader sectionTitle={'LOCALIZATION'} />
          <ContactMap />
        </div>
      </div>
      <ContactSectionHeader sectionTitle={'SEND US A MESSAGE'} />
      <div className='contact-second-row-mail-form' onSubmit={handleSubmit}>
        <ContactUsForm type='text' name='sender' value={sender} label='Name/Company' handleChange={handleChange} required/>
        <ContactUsForm type='email' name='email' value={email} label='E-mail' handleChange={handleChange} required/>
        <ContactUsForm type='textarea' name='message' value={message} label='Your Message' handleChange={handleChange} required/>
        <CustomButton name='Send' type='submit' method={handleSubmit}/>
        {
        requestStatus === 'success' ? 
          <RequestConfirm title={'Message Sent'}/>
        :
          requestStatus === 'fail'?
            <RequestConfirm title={'Message not sent'}/>
          :
            null
      }
      </div>
    </div>
  );
}

export default Contact;
