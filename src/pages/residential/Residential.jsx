import BgImage from '../../images/residential_kv.jpg'
import Header from '../../components/Header'
import Cover1 from '../../images/cover.R.1.jpg'
import Cover2 from '../../images/cover.R.2.jpg'
import Cover3 from '../../images/cover.R.3.jpg'
import Cover4 from '../../images/cover.R.4.jpg'
import { Link } from 'react-router-dom'



const Residential = () => {
  return (
    <>
      <Header title="RESIDENTIAL" image={BgImage}></Header>
      <div className="divider"></div>
      <div className="section section-product">
        <p>"A house is made of walls and beams; a home is built with love and dreams." This rings true in our work, turning our clients’ dreams into reality, each home unique and special to its owner. From bedrooms to kitchens, living rooms to lounges, homes are where our bread and butter lies, and our expertise expressed.</p>
        <p>Whether it is retrofitting a timeless classic terrace house or elevating a luxury condominium to the pinnacle of style and modernity, our designs exude the aspirations of our clients for their homes.</p>
      </div>

      
      <div className="image-section">
        <div className="inner__wrapper">
          <div className="project">
            <Link to='/projectOne'>
            <div className="project-first">
              <div className="project-info">
                <div className="project__category">Penthouse</div>
                <div className="project__name">The Oval KLCC</div>
                </div>
                <img src={Cover1}  alt='cover' className='cover1' />
              <div className="divider project1__divider"></div>
            </div>
            </Link>
            <Link to='/ProjectSecond'>
            <div className="project-second">
              <div className="project-info">
                <div className="project__category">Terrace</div>
                <div className="project__name">Bandar Sri Damansara</div>
                </div>
              <img src={Cover2} className='cover2' alt='cover'/>
              <div className="divider project2__divider"></div>
            </div>
            </Link>
            <Link to='/ProjectThird'>
            <div className="project-third">
              <div className="project-info">
                <div className="project__category">Condominium</div>
                <div className="project__name">LUMI Tropicana Residence</div>
                </div>
              <img src={Cover3} className='cover3' alt='cover'/>
              <div className="divider project3__divider"></div>
            </div>
            </Link>
            <Link to='/ProjectFourth'>
            <div className="project-first">
              <div className="project-info">
                <div className="project__category">Semi-D</div>
                <div className="project__name">Tinta Residence - Alam Impian</div>
                </div>
              <img src={Cover4} className='cover4' alt='cover' />
              <div className="divider project4__divider"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Residential