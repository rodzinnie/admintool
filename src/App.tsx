import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  Home,
  About
} from './components/pages'

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            <Outlet />
          </div>
        }
      >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
