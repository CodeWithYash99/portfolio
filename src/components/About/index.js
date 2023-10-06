import './index.css'

const About = () => {
  return (
    <div className='about-container'>
        <img className='about-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__B30STPXajThA1uP5mbZVZRL_tz8RxWRmw&usqp=CAU' alt='about' />
        
        <div className='about-description-container'>
            <h2 className='about-heading'>About Me</h2>
            <p className='about-description'>
                My name is Yashwanth Kumar Rangu, and I am currently looking for a job in Frontend React Development. 
                I have 2 years of experience working as a Frontend React developer. I have a bachelor's degree 
                in Electronics and Communication. People find me to be an upbeat, self-motivated team player 
                with excellent communication skills.
                <br /><br />
                I am a dedicated person with a family of four. I enjoy reading, and the knowledge and 
                perspective that my reading gives me have strengthened my teaching skills and presentation 
                abilities.
            </p>
        </div>
    </div>
  )
}

export default About