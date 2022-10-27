import './project.css'
import Next from '../../images/next.png'
import Pervious from '../../images/previous.png'
import BgImage from '../../images/key-visual.LUMI.jpg'
import Header from '../../components/Header'
import Img01 from '../../images/01.LUMI.jpg'
import Img02 from '../../images/02.LUMI.jpg'
import Img03 from '../../images/03.LUMI.jpg'
import Img04 from '../../images/04.LUMI.jpg'
import Img05 from '../../images/05.LUMI.jpg'
import Img06 from '../../images/06.LUMI.jpg'
import Img07 from '../../images/07.LUMI.jpg'
import Img08 from '../../images/08.LUMI.jpg'
import Img09 from '../../images/09.LUMI.jpg'
import Img10 from '../../images/10.LUMI.jpg'
import Img11 from '../../images/11.LUMI.jpg'
import Img12 from '../../images/12.LUMI.jpg'
import Img13 from '../../images/13.LUMI.jpg'
import { Link } from 'react-router-dom'



const ProjectThird = () => {
  return (
    <>
      <div className="Project">
        <div className='Project__info'>
          <h1>Condominium</h1>
          <h2>LUMI Tropicana Residence</h2>
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
      </div>

      <div className='navigator'>

        <Link to='/ProjectSecond'>
          <div className='navigator__btn--previous'>
            <img src={Pervious} alt="" className='btn--previous' />
            <div className="navigator__description_left">
              <h1 className='navigator__description'>PERVIOUS PROJECT</h1>
              <h2 className='navigator__title'>Bandar Sri Damansara</h2>
            </div>
          </div>
        </Link>

        <Link to='/ProjectFourth'>
          <div className='navigator__btn--next'>
            <div className="navigator__description_right">
              <h1 className='navigator__description'>NEXT PROJECT</h1>
              <h2 className='navigator__title'>Semi-D Tinta Residence</h2>
            </div>
            <img src={Next} alt="" className='btn--next' />
          </div>
        </Link>

      </div>


    </>
  )
}

export default ProjectThird