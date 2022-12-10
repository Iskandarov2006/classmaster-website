import { Route, Routes } from 'react-router-dom'
import Index from './personal-portfolio-html-template'
import CourseParams from './personal-portfolio-html-template/paramsPage/CourseParams'
import MentorParams from './personal-portfolio-html-template/paramsPage/MentorParams'

import './style.css'
function App() {
  return (
    <div className='context'>
      <div className='contextchild'>

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/course/:id' element={<CourseParams /> } />
      </Routes>
      </div>
    </div>
  )
}

export default App