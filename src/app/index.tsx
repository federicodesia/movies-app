import { Route, Routes } from 'react-router-dom';
import { Wrapper, Content, RoutesWrapper } from './style';
import SideDrawer from '../components/side-drawer';
import NavBar from '../components/nav-bar';
import HomeRoute from '../pages/home';
import FriendsDrawer from '../components/friends-drawer';
import { ThemeProvider } from 'styled-components';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { lightTheme, darkTheme } from '../styles/themes';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useEffect } from 'react';
import { fetchGenres, fetchPopularMovies } from '../redux/slices/movies-slice';

function App() {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector((state) => state.theme.mode)

  useEffect(() => {
    dispatch(fetchGenres())
    dispatch(fetchPopularMovies())
  }, [dispatch])

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
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