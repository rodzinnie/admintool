import { SideBar } from '../../common'
import { MainLayout } from '../../layouts'
import { StyledHome } from './index.styles'

const Home = () => {
  return (
    <StyledHome>
      <SideBar />
      <MainLayout />
    </StyledHome>
  )
}

export default Home
