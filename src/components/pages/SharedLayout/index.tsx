import { Outlet } from 'react-router-dom'
import NavBar from '../../common/NavBar'
import { Main } from './index.styles'

const SharedLayout = () => {
  return (
    <Main>
      <NavBar />
      <Outlet />
    </Main>
  )
}

export default SharedLayout
