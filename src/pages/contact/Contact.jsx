import './contact.css'
import BgImage from '../../images/contact_us.jpg'
import Header from '../../components/Header'
import { FaWhatsapp } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <Header title="CONTACT US" image={BgImage}></Header>
      <div className="section contact-us">
        <h1><span className='text-red'>Get </span>In Touch</h1>

        <div className="contact-us__contact">TEL +6018 210 4678</div>
        <div className="contact-us__social">
          <a href=""><FaWhatsapp /></a>
          <a href=""><BsInstagram /></a>
          <a href=""><FaFacebookF /></a>
        </div>
      </div>
      <div className="contact-us__map">
        <div className="map">
          <iframe  allowFullScreen loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63749.370697829516!2d101.537191!3d3.0040430000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb30db890451b%3A0x5d549ce7e6556b!2sIFFI%20Design%20Sdn%20Bhd!5e0!3m2!1sen!2sus!4v1636019862251!5m2!1sen!2sus" />
        </div>
      </div>
    </>
  )
}

export default Contact