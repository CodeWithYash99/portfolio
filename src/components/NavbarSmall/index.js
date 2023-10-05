import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {RiHomeHeartFill, RiLightbulbFill, RiContactsBook2Fill} from 'react-icons/ri'
import {FcAbout} from 'react-icons/fc'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose, AiFillProject} from 'react-icons/ai'

import './index.css'

const NavbarSmall = () => {
  const [hamburger, setHamburger] = useState(false)

  const onClickMenu = () => {
    setHamburger((prevHamburger) => !prevHamburger)
  }
  
  return (
    <div className='sm-navbar-container'>
      <div className='sm-nav-brand-container'>
        <h1 className='sm-nav-brand'>PORTFOLIO.</h1>
        {hamburger ? 
          <><AiOutlineClose className='sm-close-icon' onClick={onClickMenu} /></> 
          : 
          <><GiHamburgerMenu className='sm-hamburger-icon' onClick={onClickMenu} /></>
        }
      </div>

      {hamburger &&       
        <Navbar className='sm-nav-items-container'>
          <Nav.Item className='sm-nav-item'>
            <RiHomeHeartFill className='sm-nav-icon' />
            <Nav.Link href="/home" className='sm-item'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className='sm-nav-item'>
            <FcAbout className='sm-nav-icon' />
            <Nav.Link className='sm-item'>About</Nav.Link>
          </Nav.Item>
          <Nav.Item className='sm-nav-item'>
            <RiLightbulbFill className='sm-nav-icon' />
            <Nav.Link className='sm-item'>Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item className='sm-nav-item'>
            <AiFillProject className='sm-nav-icon' />
            <Nav.Link className='sm-item'>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item className='sm-nav-item'>
            <RiContactsBook2Fill className='sm-nav-icon' />
            <Nav.Link className='sm-item'>Contact</Nav.Link>
          </Nav.Item>
        </Navbar>
      }
    </div>
  )
}

export default NavbarSmall