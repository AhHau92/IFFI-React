// import Header from './Header'
import BgImage from '../images/home_kv.jpg'
import './mainheader.css'
import RedI from '../images/red-i.png'
import RedF from '../images/red-f.png'
import WhiteF from '../images/white-f.png'
import WhiteI from '../images/white-i.png'
import ExpImage from '../images/experience.jpg'
import HlImage0 from '../images/cover0.jpg'
import HlImage1 from '../images/cover1.jpg'
import HlImage2 from '../images/cover2.jpg'
import Modal from './Modal'
import Modal__2 from './Modal__2'
import Modal__3 from './Modal__3'

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";




const MainHeader = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openModal__2, setOpenModal__2] = useState(false)
  const [openModal__3, setOpenModal__3] = useState(false)


  return (
    <>
      <div className="MainHeader">
        <header className='main__header'>
          <img src={BgImage} alt="" className='main__header-BgImage' />
          <div className="animation-background"></div>
          <div className="animation-logo">
            <img src={RedI} alt="RedI" className='animation-logo_image animation-logo__image--i' />
            <img src={RedF} alt="RedF" className='animation-logo_image animation-logo__image--f' />
            <img src={WhiteF} alt="WhiteF" className='animation-logo_image animation-logo__image--f' />
            <img src={WhiteI} alt="WhiteI" className='animation-logo_image animation-logo__image--i' />
          </div>
        </header>
        <div className="divider"></div>

        <div className="index section">
          <div className="index-title">
            Innovating Your Interiors,
            <br />
            Designing Your Dreams
          </div>
          <div className="index-discription">
            <p>At IFFI Design, we believe in enriching people’s lives by creating spaces inspired by their own aspirations and experiences. We want to understand the needs, wishes and desires of each client in order to impact-fully use architecture and design to address each aspiration.</p>
            <p>Bringing together avant-garde and classic elements, our creations breathe both form and function that is innovative yet marked with a timeless charm. Through our work we strive to share our passion with our clients.</p>
          </div>
        </div>

        <div className="experience">
          <img src={ExpImage} alt="" />
          <div className="experience__content-desktop">


            <div className="experience__block">
              <div className="experience__title">
                <span className='empahasize'>10</span> years
              </div>
              <div className="experience__description">
                since IFFI Design was incorporated in 2012
              </div>
            </div>

            <div className="experience__block">
              <div className="experience__title">
                <span className='empahasize'>60</span> years
              </div>
              <div className="experience__description">
                of combined experience in the Interior Design industry.
              </div>
            </div>

            <div className="experience__block">
              <div className="experience__title">
                <span className='empahasize'>106</span> projects
              </div>
              <div className="experience__description">
                <p>successful completed and delivered</p>
              </div>
            </div>

          </div>
        </div>

        <Swiper className="experience-mobile"
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}>
          <SwiperSlide className="experience__swiper">
            <div className="experience__block-mobile">
              <div className="experience__title-mobile">10 years</div>
              <div className="experience__description-mobile">since IFFI Design was incorporated in 2012</div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='experience__swiper'>
            <div className="experience__block-mobile">
              <div className="experience__title-mobile">60 years</div>
              <div className="experience__description-mobile">of combined experience in the Interior Design industry.</div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='experience__swiper'>
            <div className="experience__block-mobile">
              <div className="experience__title-mobile">106 projects</div>
              <div className="experience__description-mobile">successful completed and delivered</div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="section--highlight">
          <div className="wrapper">
            <div className="project-left" >
              <div className="project__overlay" onClick={() => setOpenModal(true)}>

                <div className="highlight__info">
                  <div className="highlight__category">Bungalow</div>
                  <div className="highlight__name">Laman Villa - Klang</div>
                </div>
                <img src={HlImage0} alt="" className='project1' />
                <div className="divider project1_divider"></div>
              </div>
            </div>


            <div className='project_right'>
              <div className="project__overlay" onClick={() => setOpenModal__2(true)}>

                <div className="highlight__info">
                  <div className="highlight__category">Bungalow</div>
                  <div className="highlight__name">Mines Resort City</div>
                </div>
                <img src={HlImage1} alt="" className='project2' />
                <div className="divider project2_divider"></div>
              </div>

              <div className="project__overlay" onClick={() => setOpenModal__3(true)}>
                <div className="highlight__info">
                  <div className="highlight__category">Terrace</div>
                  <div className="highlight__name">Puteri 12 - Bandar Puteri Puchong</div>
                </div>
                <img src={HlImage2} alt="" className='project3' />
                <div className="divider project3_divider"></div>
              </div>

            </div>
          </div>
        </div>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
        <Modal__2 open={openModal__2} onClose={() => setOpenModal__2(false)} />
        <Modal__3 open={openModal__3} onClose={() => setOpenModal__3(false)} />




      </div>
    </>
  )
}

export default MainHeader