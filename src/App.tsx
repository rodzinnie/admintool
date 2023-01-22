import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Home, About } from './components/pages'
import SharedLayout from './components/pages/SharedLayout'
import UserProfile from './components/pages/UserProfile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/user' element={<UserProfile />} />
      </Route>
    </Routes>
  )
}

export default App
