import { Outlet } from 'react-router-dom'
import { NavBar } from '../../common'

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default SharedLayout
