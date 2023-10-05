import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {RiHomeHeartFill, RiLightbulbFill, RiContactsBook2Fill} from 'react-icons/ri'
import {FcAbout} from 'react-icons/fc'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose, AiFillProject} from 'react-icons/ai'

import './index.css'

const NavbarMedium = () => {
  const [hamburger, setHamburger] = useState(false)

  const onClickMenu = () => {
    setHamburger((prevHamburger) => !prevHamburger)
  }

  return (
    <div className='md-navbar-container'>
      <div className='md-nav-brand-container'>
        <h1 className='md-nav-brand'>PORTFOLIO.</h1>
        {hamburger ? 
          <><AiOutlineClose className='md-close-icon' onClick={onClickMenu} /></> 
          : 
          <><GiHamburgerMenu className='md-hamburger-icon' onClick={onClickMenu} /></>
        }
      </div>

      {hamburger &&       
        <Navbar className='md-nav-items-container'>
          <Nav.Item className='md-nav-item'>
            <RiHomeHeartFill className='md-nav-icon' />
            <Nav.Link href="/home" className='md-item'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className='md-nav-item'>
            <FcAbout className='md-nav-icon' />
            <Nav.Link className='md-item'>About</Nav.Link>
          </Nav.Item>
          <Nav.Item className='md-nav-item'>
            <RiLightbulbFill className='md-nav-icon' />
            <Nav.Link className='md-item'>Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item className='md-nav-item'>
            <AiFillProject className='md-nav-icon' />
            <Nav.Link className='md-item'>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item className='md-nav-item'>
            <RiContactsBook2Fill className='md-nav-icon' />
            <Nav.Link className='md-item'>Contact</Nav.Link>
          </Nav.Item>
        </Navbar>
      }
    </div>
  )
}

export default NavbarMedium