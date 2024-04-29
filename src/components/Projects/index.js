import './index.css'

const projectsList = [
  {
    id: 1,
    projectTitle: "Fact About Number",
    altText: "fact-about-number-img",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSl3pwjdWlFVc1_EEX0lWo-YNXf-M0Q9oPQ&usqp=CAU",
    projectUrl: "https://codewithyash99.github.io/fact-about-number/",
  },
  {
    id: 2,
    projectTitle: "Credit Card Control",
    altText: "credit-card-control-img",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdn1aqD6jLwMJJNEJY8Q9tr6o8lKFrhHITHE8-byqJt4QX-WDSy3sCfMEeONgRruV_w4Q&usqp=CAU",
    projectUrl: "https://codewithyash99.github.io/credit-card-control/",
  },
  {
    id: 3,
    projectTitle: "Cat Light",
    altText: "cat-light-img",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXBGjfNZsq9HyhARksimzDKUp_Z5fdkO94g&usqp=CAU",
    projectUrl: "https://codewithyash99.github.io/cat-light/",
  },
  {
    id: 4,
    projectTitle: "Weather App",
    altText: "weather-img",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnziI5gASHSbdDtSUFuWGZEd2grSjVmu9D4A&usqp=CAU",
    projectUrl: "https://codewithyash99.github.io/weather-app/",
  },
];

const Projects = () => {
  return (
    <div className='projects-container p-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='projects-heading'>Projects</h1>
          </div>

          <div className='projects-card-container'>
            {projectsList.map((eachProject) => (
              <div className='project-card col-12 col-md-6 col-lg-4 mb-4' key={eachProject.id}>
                <a href={eachProject.projectUrl} target="_blank" rel="noreferrer">
                  <img className='project-image' src={eachProject.imgUrl} alt={eachProject.altText} />
                </a>
                <h1 className='project-title text-center'>{eachProject.projectTitle}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects