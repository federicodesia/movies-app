import { Route, Routes } from 'react-router-dom';
import { Wrapper, Content, RoutesWrapper } from './style';
import SideDrawer from '../components/side-drawer';
import NavBar from '../components/nav-bar';
import HomeRoute from '../pages/home';
import FriendsDrawer from '../components/friends-drawer';
import { ThemeProvider } from 'styled-components';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { lightTheme, darkTheme } from '../styles/themes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <TooltipProvider>
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

          <FriendsDrawer />
        </Wrapper>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App