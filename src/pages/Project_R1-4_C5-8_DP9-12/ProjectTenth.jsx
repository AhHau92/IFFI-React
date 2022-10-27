import './project.css'
import Next from '../../images/next.png'
import Pervious from '../../images/previous.png'
import BgImage from '../../images/key-visual.SempurnaJaya.jpg'
import Header from '../../components/Header'
import Img01 from '../../images/01.SempurnaJaya.jpg'
import Img02 from '../../images/02.SempurnaJaya.jpg'
import Img03 from '../../images/03.SempurnaJaya.jpg'
import Img04 from '../../images/04.SempurnaJaya.jpg'
import Img05 from '../../images/05.SempurnaJaya.jpg'
import Img06 from '../../images/06.SempurnaJaya.jpg'
import Img07 from '../../images/07.SempurnaJaya.jpg'
import Img08 from '../../images/08.SempurnaJaya.jpg'
import Img09 from '../../images/09.SempurnaJaya.jpg'
import Img10 from '../../images/10.SempurnaJaya.jpg'
import Img11 from '../../images/11.SempurnaJaya.jpg'
import Img12 from '../../images/12.SempurnaJaya.jpg'
import Img13 from '../../images/13.SempurnaJaya.jpg'
import Img14 from '../../images/14.SempurnaJaya.jpg'
import Img15 from '../../images/15.SempurnaJaya.jpg'
import { Link } from 'react-router-dom'

const ProjectTenth = () => {
  return (
    <>
    <div className="Project">
      <div className='Project__info'>
        <h1>Terrace</h1>
        <h2>Taman Sempurna Jaya - Semenyih</h2>
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
    </div>

    <div className='navigator'>

      <Link to='/ProjectNinth'>
        <div className='navigator__btn--previous'>
          <img src={Pervious} alt="" className='btn--previous' />
          <div className="navigator__description_left">
            <h1 className='navigator__description'>PERVIOUS PROJECT</h1>
            <h2 className='navigator__title'>Taman Sempurna Damai - Semenyih</h2>
          </div>
        </div>
      </Link>


      <Link to='/ProjectEleventh'>
        <div className='navigator__btn--next'>
          <div className="navigator__description_right">
            <h1 className='navigator__description'>NEXT PROJECT</h1>
            <h2 className='navigator__title'>Seventeen Residences - Petaling Jaya</h2>
          </div>
          <img src={Next} alt="" className='btn--next' />
        </div>
      </Link>

    </div>


  </>
  )
}

export default ProjectTenth