import Header from '../../components/Header'
import './about.css'
import BgImage from '../../images/about_us_kv.jpg'

const About = () => {
  return (
    <>
      <Header title="ABOUT US" image={BgImage}></Header>
      <div className="divider"></div>
    </>
  )
}

export default About