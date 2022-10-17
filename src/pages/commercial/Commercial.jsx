import './commercial.css'
import Header from '../../components/Header'
import BgImage from '../../images/commercial_kv.jpg'


const Commercial = () => {
  return (
    <>
      <Header title='COMMERCIAL' image={BgImage}></Header>
      <div className="divider"></div>
    </>
  )
}

export default Commercial