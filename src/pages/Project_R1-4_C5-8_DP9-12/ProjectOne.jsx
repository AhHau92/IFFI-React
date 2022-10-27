import './project.css'
import Next from '../../images/next.png'
import Pervious from '../../images/previous.png'
import BgImage from '../../images/key-visual_KLCC.jpg'
import Header from '../../components/Header'
import Img01 from '../../images/01.KLCC.jpg'
import Img02 from '../../images/02.KLCC.jpg'
import Img03 from '../../images/03.KLCC.jpg'
import Img04 from '../../images/04.KLCC.jpg'
import Img05 from '../../images/05.KLCC.jpg'
import Img06 from '../../images/06.KLCC.jpg'
import Img07 from '../../images/07.KLCC.jpg'
import Img08 from '../../images/08.KLCC.jpg'
import Img09 from '../../images/09.KLCC.jpg'
import Img10 from '../../images/10.KLCC.jpg'
import Img11 from '../../images/11.KLCC.jpg'
import Img12 from '../../images/12.KLCC.jpg'
import Img13 from '../../images/13.KLCC.jpg'
import Img14 from '../../images/14.KLCC.jpg'
import Img15 from '../../images/15.KLCC.jpg'
import Img16 from '../../images/16.KLCC.jpg'
import Img17 from '../../images/17.KLCC.jpg'
import Img18 from '../../images/18.KLCC.jpg'
import Img19 from '../../images/19.KLCC.jpg'
import Img20 from '../../images/20.KLCC.jpg'
import Img21 from '../../images/21.KLCC.jpg'
import Img22 from '../../images/22.KLCC.jpg'
import Img23 from '../../images/23.KLCC.jpg'
import { Link } from 'react-router-dom'

const ProjectOne = () => {

  return (
    <>
      <div className="Project">
        <div className='Project__info'>
          <h1>Residential</h1>
          <h2>The Oval - KLCC</h2>
        </div>
        <Header image={BgImage}></Header>
      </div>

      <div className="divider"></div>

      <div className="Album__image">
        <img src={Img01} alt="" />
        <img src={Img02} alt="" />
        <img src={Img03} alt="" />
        <img src={Img04} alt="" />
        <img src={Img05} alt="" />
        <img src={Img06} alt="" />
        <img src={Img07} alt="" />
        <img src={Img08} alt="" />
        <img src={Img09} alt="" />
        <img src={Img10} alt="" />
        <img src={Img11} alt="" />
        <img src={Img12} alt="" />
        <img src={Img13} alt="" />
        <img src={Img14} alt="" />
        <img src={Img15} alt="" />
        <img src={Img16} alt="" />
        <img src={Img17} alt="" />
        <img src={Img18} alt="" />
        <img src={Img19} alt="" />
        <img src={Img20} alt="" />
        <img src={Img21} alt="" />
        <img src={Img22} alt="" />
        <img src={Img23} alt="" />
      </div>

      <div className='navigator'>

        <Link to='/ProjectFourth'>
          <div className='navigator__btn--previous'>
            <img src={Pervious} alt="" className='btn--previous' />
            <div className="navigator__description_left">
              <h1 className='navigator__description'>PERVIOUS PROJECT</h1>
              <h2 className='navigator__title'>Semi-D Tinta Residence</h2>
            </div>
          </div>
        </Link>


        <Link to='/ProjectSecond'>
          <div className='navigator__btn--next'>
            <div className="navigator__description_right">
              <h1 className='navigator__description'>NEXT PROJECT</h1>
              <h2 className='navigator__title'>Bandar Sri Damansara</h2>
            </div>
            <img src={Next} alt="" className='btn--next' />
          </div>
        </Link>

      </div>


    </>
  )
}

export default ProjectOne