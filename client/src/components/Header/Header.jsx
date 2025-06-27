import './Header.css'
import Logo from '../../assets/miffy.png'
import AccountIcon from '../../assets/AccountIcon.png'
import CartIcon from '../../assets/CartIcon.png'

function Header() {
  return (
    <>
      <div className='Header'>
        <div className="Hstyle">
          <img className="Slogo" src={Logo} alt="Logo"></img>
          <p className='Sname'> 🧶 Miffyiffy Store</p>
        </div>

        <div className="icons">
          <img className='pfp'src={AccountIcon} alt="Account" />
          <img className='cart'src={CartIcon} alt="Cart" />
        </div>
      </div >
    </>
  );
}
export default Header