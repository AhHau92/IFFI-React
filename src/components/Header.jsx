

const Header = ({title, image}) => {
  return (
    <header className='header'>
      <div className="header__container">
        <div className="header__container-bg">
          <img src={image} alt="Header Backgroud" />
        </div>
        <div className="header__content">
          <h2>{title}</h2>
        </div>
      </div>
    </header>
  )
}

export default Header