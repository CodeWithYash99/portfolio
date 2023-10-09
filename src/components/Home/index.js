import Navbar from '../Navbar'
import About from '../About'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'

import './index.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />

      <div id='home' className='home-profile-container'>
        <div className='profile-container'>
          <h1 className='profile-headding'>Hey, I am <br />
            <span className='profile-name'>Yashwanth Kumar Rangu</span>
          </h1>
          <p className='profile-role'>I am a Front-End React Developer</p>
        </div>
        <img className='profile-image' src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-banner-img.png' alt='profile' />
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home