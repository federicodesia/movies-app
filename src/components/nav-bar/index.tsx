import { AiOutlineMenu, AiOutlineMessage } from "react-icons/ai"
import { FiBell } from "react-icons/fi"

import { Wrapper, DotIconWrapper, StyledDotIndicator, SearchBarSuggestionsArea } from "./style"
import { IconContext } from "react-icons"
import useMediaQuery from "../../hooks/use-media-query"
import { down } from "../../styles/breakpoints"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { toggleSideDrawer } from "../../redux/slices/movies-slice"
import { CircleImageButton, TextButton } from "../../styles/button"
import { login, logout } from "../../redux/slices/user-slice"
import { DropdownMenu } from "../dropdown-menu"
import { DropdownItem, DropdownRightSlot, DropdownSeparator } from "../dropdown-menu/style"
import { Text, Title } from "../../styles/text"
import { HiOutlineLogout } from "react-icons/hi"
import { MdOutlineDarkMode } from "react-icons/md"
import { Column, Container, Row } from "../../styles/styles"
import { toggleThemeMode } from "../../redux/slices/theme-slice"
import { Switch } from "../switch"
import { ProfileImg } from "../../styles/profile-image"
import SearchBar from "../search-bar"

interface NavBarProps {
    showSearchBar: boolean
}

const NavBar = ({ showSearchBar }: NavBarProps) => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => ({
        user: state.userReducer.user,
        themeMode: state.themeReducer.mode
    }));

    const { user, themeMode } = state
    const { photoURL } = user ?? {}

    const breakpoints = {
        downLg: useMediaQuery(down('lg')),
        downSm: useMediaQuery(down('sm'))
    }

    return <IconContext.Provider value={{ size: '20px' }}>
        <Wrapper>
            {
                breakpoints.downLg && <Container flex={0}>
                    <AiOutlineMenu onClick={() => dispatch(toggleSideDrawer())} />
                </Container>
            }

            <SearchBarSuggestionsArea>
                <Row gap='24px' justifyContent='space-between' alignItems='center'>
                    {
                        showSearchBar ? <SearchBar /> : <div />
                    }

                    {
                        user === null
                            ? <TextButton onClick={() => dispatch(login())}>Login</TextButton>
                            : <Row alignItems='center' gap='24px'>

                                {
                                    !breakpoints.downSm && <DotIconWrapper>
                                        <FiBell />
                                        <StyledDotIndicator isActive={true} />
                                    </DotIconWrapper>
                                }

                                {
                                    !breakpoints.downSm && <DotIconWrapper>
                                        <AiOutlineMessage />
                                        <StyledDotIndicator isActive={true} />
                                    </DotIconWrapper>
                                }

                                <DropdownMenu
                                    side='bottom'
                                    align='end'
                                    trigger={
                                        <CircleImageButton>
                                            <ProfileImg src={photoURL} alt={user.displayName} altType='initials' />
                                        </CircleImageButton>
                                    }
                                    content={
                                        <Column gap='16px'>
                                            <Row gap='16px'>
                                                <ProfileImg src={photoURL} alt={user.displayName} altType='initials' />
                                                <Column gap='4px'>
                                                    <Title>{user.displayName}</Title>
                                                    <Text>{user.email}</Text>
                                                </Column>
                                            </Row>
                                            <DropdownSeparator />

                                            <Column>
                                                <DropdownItem onSelect={() => dispatch(toggleThemeMode())}>
                                                    <MdOutlineDarkMode />
                                                    <Text>Dark mode</Text>
                                                    <DropdownRightSlot>
                                                        <Switch checked={themeMode === 'dark'} />
                                                    </DropdownRightSlot>
                                                </DropdownItem>

                                                <DropdownItem onSelect={() => dispatch(logout())}>
                                                    <HiOutlineLogout />
                                                    <Text>Logout</Text>
                                                </DropdownItem>
                                            </Column>
                                        </Column>
                                    } />
                            </Row>
                    }
                </Row>
            </SearchBarSuggestionsArea>
        </Wrapper>
    </IconContext.Provider>
}

export default NavBar