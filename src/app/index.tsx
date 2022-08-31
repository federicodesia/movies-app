import { Route, Routes } from 'react-router-dom';
import { Wrapper, Content } from './style';
import HomePage from '../pages/home';
import FriendsDrawer from '../components/friends-drawer';
import { ThemeProvider } from 'styled-components';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { lightTheme, darkTheme } from '../styles/themes';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleSideDrawer } from '../redux/slices/movies-slice';
import MoviePage from '../pages/movie';
import useMediaQuery from '../hooks/use-media-query';
import { up } from '../styles/breakpoints';
import LeftMenu from '../components/left-menu';
import SideDrawer from '../components/side-drawer';

function App() {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector((state) => state.themeReducer.mode)

  const isSideDrawerOpen = useAppSelector((state) => state.moviesReducer.isSideDrawerOpen)
  const closeSideDrawer = () => dispatch(toggleSideDrawer())

  const breakpoints = {
    upLg: useMediaQuery(up('lg'))
  }

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <TooltipProvider>
        <Wrapper>
          {
            breakpoints.upLg
              ? <LeftMenu />
              : <SideDrawer isOpen={isSideDrawerOpen} onClose={closeSideDrawer}>
                <LeftMenu showCloseIcon={true} onClose={closeSideDrawer} />
              </SideDrawer>
          }

          <Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:id" element={<MoviePage />} />
            </Routes>
          </Content>

          {
            breakpoints.upLg && <FriendsDrawer />
          }
        </Wrapper>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App