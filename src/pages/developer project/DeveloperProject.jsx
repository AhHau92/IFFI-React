import Header from '../../components/Header'
import BgImage from '../../images/developer-project_kv.jpg'
import { Link } from 'react-router-dom'
import Cover1 from '../../images/cover.DP.1.jpg'
import Cover2 from '../../images/cover.DP.2.jpg'
import Cover3 from '../../images/cover.DP.3.jpg'
import Cover4 from '../../images/cover.DP.4.jpg'



const DeveloperProject = () => {

  return (
    <>
      <Header title="DEVELOPER PROJECT" image={BgImage}></Header>
      <div className="divider"></div>
      <div className="section section-product">
        <p>Working with property developers, we have been tasked to plan, design and put together the interiors of the homes they have built on large scale projects basis. Converting empty shells into cosy and habitable homes that are ready for new homeowners to move in, we have been involved with several notable projects within the Klang Valley, Seremban and Iskandar Malaysia.</p>
      </div>

      <div className="image-section">
        <div className="inner__wrapper">
          <div className="project">
            <Link to='/ProjectNinth'>
            <div className="project-first">
              
              <div className="project-info">
                <div className="project__category">Terrace</div>
                <div className="project__name">Taman Sempurna Damai - Semenyih</div>
                </div>
              
              <img src={Cover1} className='cover1' />
              <div className="divider project1__divider"></div>
            </div>
            </Link>

            <Link to='/ProjectTenth'>
            <div className="project-second">

              <div className="project-info">
                <div className="project__category">Terrace</div>
                <div className="project__name">Taman Sempurna Jaya - Semenyih</div>
              </div>

              <img src={Cover2} className='cover2' />
              <div className="divider project2__divider"></div>
              </div>
            </Link>
            <Link to='/ProjectEleventh'>
            <div className="project-third">
              <div className="project-info">
                <div className="project__category">Condomium</div>
                <div className="project__name">Seventeen Residences - Petaling Jaya</div>
              </div>
              <img src={Cover3} className='cover3' />
              <div className="divider project3__divider"></div>
            </div>
            </Link>
            <Link to='/ProjectTwelfth'>
            <div className="project-fourth">
              <div className="project-info">
                <div className="project__category">Condominium</div>
                <div className="project__name">Teega Suites - Nusajaya Johor</div>
              </div>
              <img src={Cover4} className='cover4' />
              <div className="divider project4__divider"></div>
            </div>
            </Link>
          </div>
        </div>
      </div>
      

    </>
  )
}

export default DeveloperProject