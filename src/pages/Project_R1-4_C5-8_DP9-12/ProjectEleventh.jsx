import './project.css'
import Next from '../../images/next.png'
import Pervious from '../../images/previous.png'
import BgImage from '../../images/key-visual.PetalingJaya.jpg'
import Header from '../../components/Header'
import Img01 from '../../images/01.PetalingJaya.jpg'
import Img02 from '../../images/02.PetalingJaya.jpg'
import Img03 from '../../images/03.PetalingJaya.jpg'
import Img04 from '../../images/04.PetalingJaya.jpg'
import { Link } from 'react-router-dom'


const ProjectEleventh = () => {
  return (
    <>
    <div className="Project">
      <div className='Project__info'>
        <h1>Condominium</h1>
        <h2>Seventeen Residences - Petaling Jaya</h2>
      </div>
      <Header image={BgImage}></Header>
    </div>

    <div className="divider"></div>

    <div className="Album__image">
      <img src={Img01} alt="" />
      <img src={Img02} alt="" />
      <img src={Img03} alt="" />
      <img src={Img04} alt="" />
    </div>

    <div className='navigator'>

      <Link to='/ProjectTenth'>
        <div className='navigator__btn--previous'>
          <img src={Pervious} alt="" className='btn--previous' />
          <div className="navigator__description_left">
            <h1 className='navigator__description'>PERVIOUS PROJECT</h1>
            <h2 className='navigator__title'>Taman Sempurna Jaya - Semenyih</h2>
          </div>
        </div>
      </Link>


      <Link to='/ProjectTwelfth'>
        <div className='navigator__btn--next'>
          <div className="navigator__description_right">
            <h1 className='navigator__description'>NEXT PROJECT</h1>
            <h2 className='navigator__title'>Teega Suites - Nusajaya Johor</h2>
          </div>
          <img src={Next} alt="" className='btn--next' />
        </div>
      </Link>

    </div>


  </>
  )
}

export default ProjectEleventh