import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route exact path='/portfolio' element={<Home />} />
        <Route path='*' />
      </Routes>
    </div>
  )
}

export default App