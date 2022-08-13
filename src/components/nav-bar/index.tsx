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

const NavBar = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user);
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

                        <CircleImageButton>
                            <img src={photoURL ?? ''} />
                        </CircleImageButton>

                        <TextButton onClick={() => dispatch(logout())}>Logout</TextButton>
                    </Options>
            }
        </Wrapper>
    </IconContext.Provider>
}

export default NavBar