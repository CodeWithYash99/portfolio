import NavbarSmall from '../NavbarSmall'
import NavbarMedium from '../NavbarMedium'
import NavbarLarge from '../NavbarLarge'

import './index.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <NavbarSmall />
      <NavbarMedium />
      <NavbarLarge />
    </div>
  )
}

export default Navbar