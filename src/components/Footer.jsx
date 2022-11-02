import './footer.css'
import Logo from '../images/logo.jpg'
import {FaWhatsapp} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="divider"></div>
      <div className="footer__container">
          

        <div className="footer__left">
          <div className='footer__left_img'>
              <img src={Logo} className='footer_left_Logo' alt='footer'/>
            </div>

          <div className="footer__company-name">
            <span className='text-red'>IF</span>FI DESIGN sdn. bhd.
          </div>

          <div className="footer__items">
           <div className='footer__title'>Contact Us</div>
           <div className="footer__description">
            <b>T&nbsp;&nbsp;</b>
            +6018 210 4678
           </div>
          </div>

          <div className="footer__items">
           <div className='footer__title'>E-mail</div>
           <div className="footer__description">info@iffi.com.my</div>
          </div>

          <div className="footer__items">
           <div className='footer__title'>Address</div>
           <div className="footer__description">11-2, No. 8, Jalan Anggerik Vanilla Be 31/be, Kota Kemuning, Seksyen 31, 40460 Shah Alam, Selangor, Malaysia.</div>
          </div>

        </div>
        <div className="footer__right">
          <div className='footer__right_img'>
           <img src={Logo} className='footer_right_Logo' alt='footer'/>
          </div>
          <div className="footer__social-media">
            <a href="#jacascript"><FaWhatsapp /></a>
            <a href="#jacascript"><BsInstagram /></a>
            <a href="#jacascript"><FaFacebookF /></a>

          </div>
          <div className="footer__copy-right">
              © 2021 <b>IFFI DESIGN</b> SDN. BHD. (1005091-D).x
              <br />
              All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer