import { AiOutlineMenu, AiOutlineMessage } from "react-icons/ai"
import { FiBell } from "react-icons/fi"

import { Wrapper, Options, DotIconWrapper } from "./style"
import { IconContext } from "react-icons"
import { DotIndicator } from "../../styles/dot-indicator"
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
import { Column, Row } from "../../styles/styles"
import { toggleThemeMode } from "../../redux/slices/theme-slice"
import { Switch } from "../switch"
import { ProfileImage } from "../../styles/profile-image"

const NavBar = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => ({
        user: state.user.user,
        themeMode: state.theme.mode
    }));

    const { user, themeMode } = state
    const { photoURL } = user ?? {}

    const breakpoints = {
        downLg: useMediaQuery(down('lg'))
    }

    return <IconContext.Provider value={{ size: '20px' }}>
        <Wrapper>
            {
                breakpoints.downLg
                    ? <AiOutlineMenu onClick={() => dispatch(toggleSideDrawer())} />
                    : <div />
            }

            {
                user === null
                    ? <TextButton onClick={() => dispatch(login())}>Login</TextButton>
                    : <Options>
                        <DotIconWrapper>
                            <FiBell />
                            <DotIndicator isActive={true} />
                        </DotIconWrapper>

                        <DotIconWrapper>
                            <AiOutlineMessage />
                            <DotIndicator isActive={true} />
                        </DotIconWrapper>

                        <DropdownMenu
                            side='bottom'
                            align='end'
                            trigger={
                                <CircleImageButton>
                                    <img src={photoURL ?? ''} />
                                </CircleImageButton>
                            }
                            content={
                                <Column gap='16px'>
                                    <Row gap='16px'>
                                        <ProfileImage src={photoURL ?? ''} />
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
                    </Options>
            }
        </Wrapper>
    </IconContext.Provider>
}

export default NavBar