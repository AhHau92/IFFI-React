import Header from '../../components/Header'
import BgImage from '../../images/commercial_kv.jpg'
import { Link } from 'react-router-dom'
import Cover1 from '../../images/cover.C.1.jpg'
import Cover2 from '../../images/cover.C.2.jpg'
import Cover3 from '../../images/cover.C.3.jpg'
import Cover4 from '../../images/cover.C.4.jpg'



const Commercial = () => {
  return (
    <>
      <Header title='COMMERCIAL' image={BgImage}></Header>
      <div className="divider"></div>
      <div className="section section-product">
        <p>Design flows throughout our lives within the home and beyond. Our space planning and interior design work in the commercial sphere are aimed to elate the vibe and culture of the company or brand. Whether it is for an F&B outlet or show gallery, our clients have found that proper and inspirational design for their space helps them communicate their brand message to their customers better.</p>
      </div>

      <div className="image-section">
        <div className="inner__wrapper">
          <div className="project">
            <Link to='/ProjectFifth'>
              <div className="project-first">

                <div className="project-info">
                  <div className="project__category">Sales Gallery</div>
                  <div className="project__name">PJ Midtown</div>
                </div>

                <img src={Cover1} className='cover1' />
                <div className="divider project1__divider"></div>
              </div>
            </Link>
            <Link to='/ProjectSixth'>
              <div className="project-second">
                <div className="project-info">
                  <div className="project__category">Retail</div>
                  <div className="project__name">TCBY Yogurt</div>
                </div>

                <img src={Cover2} className='cover2' />
                <div className="divider project2__divider"></div>
              </div>
            </Link>

            <Link to='/ProjectSeventh'>

              <div className="project-third">

                <div className="project-info">
                  <div className="project__category">Retail</div>
                  <div className="project__name">Aurora Spa & Salon</div>
                </div>

                <img src={Cover3} className='cover3' />
                <div className="divider project3__divider"></div>

              </div>
            </Link>


            <Link to='/ProjectEighth'>

              <div className="project-fourth">
                
                <div className="project-info">
                  <div className="project__category">Sales Gallery</div>
                  <div className="project__name">JW Sales Gallery</div>
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

export default Commercial