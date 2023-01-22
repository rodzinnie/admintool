import { SideBar } from '../../common'
import { Content } from '../../layouts'
import { StyledHome } from '../Home/index.styles'

const Home = () => {
  return (
    <StyledHome>
      <SideBar />
      <Content />
    </StyledHome>
  )
}

export default Home
