import { Route, Routes } from 'react-router-dom';
import { Wrapper, Content, RoutesWrapper } from './style';
import SideDrawer from '../components/side-drawer';
import NavBar from '../components/nav-bar';
import HomeRoute from '../routes/home';

function App() {
  return (
    <Wrapper>
      <SideDrawer />

      <Content>
        <NavBar />

        <RoutesWrapper>
          <Routes>
            <Route path="/" element={<HomeRoute />} />
          </Routes>
        </RoutesWrapper>
      </Content>
    </Wrapper>
  )
}

export default App