import Header from '../../components/Header'
import './about.css'
import BgImage from '../../images/about_us_kv.jpg'
import Service1 from '../../images/service-1.jpg'
import Service3 from '../../images/service-3.jpg'
import Service2 from '../../images/service-2.jpg'
import Service4 from '../../images/service-4.jpg'

const About = () => {
  return (
    <>
      <Header title="ABOUT US" image={BgImage}></Header>

      <div className="section about-us">
        <div className='about-us-discription'>
        <p>Incorporated in 2012, <span className='text-red'>IF</span>FI Design is a boutique interior design firm that has successfully delivered numerous projects, in both residential and commercial arenas. You can be certain of the best service and industry know-how as our team’s expertise spans over 5 decades of experience in the Interior Design industry. Additionally, we are associated with GARDE, a global Interior Design company headquartered in Tokyo.</p>
        <p><span className='text-red'>IF</span>FI Design offers a one-stop solution, providing both design and build services. While our speciality lies in our kitchen cabinet and wardrobe systems, we also pride ourselves in our professional services where we take you through the entire design process – from developing the initial concepts to site execution – while ensuring that your investment becomes your greatest source of pride and comfort.</p>
        </div>
      </div>

      <div className="section-title">
        <p><span className='text-red'>Our</span> Service</p>
      </div>

      <div className='section service-1'>
        <img src={Service1}  className='service-1-Image'/>
        <div className="service__content--right">
          <div className='service__title--right'>Residential Interior Design & Renovation</div>
          <div className="divider"></div>
          <div className="service__description--right">Whether it is building from the ground up or enhancing an existing living space, our approach to residential designs is very much tailored to each client’s tastes and desires. We help you align your ideas and budget to what is practically possible, plan out a work schedule and finally, deliver a finished product of quality craftsmanship and alluring aesthetics.</div>
        </div>
      </div>


      <div className='section service-2'>
        <div className="service__content--left">
          <div className='service__title--left'>Specialist in Kitchen & Wardrobe Systems</div>
          <div className="divider1"></div>
          <div className="service__description--left">When it comes to turning kitchens or bedrooms into functional spaces, look no further than IFFI Design. Our vast experience in innovative kitchen and wardrobe systems promises top-notch quality materials coupled with smart designs for your storage spaces. Efficient yet elegant, we help you best plan your kitchen and wardrobe spaces without compromising your desired designs.</div>
        </div>
        <img src={Service2}  className='service-2-Image'/>
        <div className="service__content--left__mobile">
          <div className='service__title--left'>Specialist in Kitchen & Wardrobe Systems</div>
          <div className="divider1"></div>
          <div className="service__description--left">When it comes to turning kitchens or bedrooms into functional spaces, look no further than IFFI Design. Our vast experience in innovative kitchen and wardrobe systems promises top-notch quality materials coupled with smart designs for your storage spaces. Efficient yet elegant, we help you best plan your kitchen and wardrobe spaces without compromising your desired designs.</div>
        </div>
      </div>



      <div className='section service-3'>
        <img src={Service3}  className='service-3-Image'/>
        <div className="service__content--right">
          <div className='service__title--right'>Commercial Retail Design & Renovation</div>
          <div className="divider"></div>
          <div className="service__description--right">The ambience of a commercial space should reflect the brand’s identity, be it a restaurant, hotel, show gallery, retail space or even an event hall. With attention to details and understanding of our clients’ branding, we ensure that business owners can continue take care of what’s important and leave the complex planning and design process to us.</div>
        </div>
      </div>

      <div className='section service-4'>
        <div className="service__content--left">
          <div className='service__title--left'>Design Concept Consultation</div>
          <div className="divider1"></div>
          <div className="service__description--left">You’ve got an idea, but don’t know how to develop it further. Talk to us and we will help you further develop that seed of an idea into a full fledge design concept. With a hands-on approach while listening to each of your requirements, we will take you through a structured consultation process to get you one step closer to your vision. Inspire us with your ideas and we’ll design your dream.</div>
        </div>
        <img src={Service4}  className='service-4-Image'/>
        <div className="service__content--left__mobile">
          <div className='service__title--left'>Design Concept Consultation</div>
          <div className="divider1"></div>
          <div className="service__description--left">You’ve got an idea, but don’t know how to develop it further. Talk to us and we will help you further develop that seed of an idea into a full fledge design concept. With a hands-on approach while listening to each of your requirements, we will take you through a structured consultation process to get you one step closer to your vision. Inspire us with your ideas and we’ll design your dream.</div>
        </div>
      </div>

    </>
  )
}

export default About