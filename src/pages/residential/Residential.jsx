import './residential.css'
import BgImage from '../../images/residential_kv.jpg'
import Header from '../../components/Header'

const Residential = () => {
  return (
    <>
      <Header title="RESIDENTIAL" image={BgImage}></Header>
      <div className="divider"></div>
    </>
  )
}

export default Residential