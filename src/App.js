import { Route, Routes } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Nav from './Pages/Nav/Nav'
function App() {
  return (
    <div className='context'>
      <div className='contextchild'>
        <Nav />
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </div>
    </div>
  )
}

export default App