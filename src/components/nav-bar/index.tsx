import { AiOutlineMenu, AiOutlineMessage } from "react-icons/ai"
import { FiBell } from "react-icons/fi"

import { Wrapper, Options, DotIconWrapper } from "./style"
import { IconContext } from "react-icons"
import { DotIndicator } from "../../styles/dot-indicator"
import useMediaQuery from "../../hooks/use-media-query"
import { down } from "../../styles/breakpoints"
import { useAppDispatch } from "../../redux/hooks"
import { toggleSideDrawer } from "../../redux/slices/movies-slice"

const NavBar = () => {
    const dispatch = useAppDispatch()
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

            <Options>
                <DotIconWrapper>
                    <FiBell />
                    <DotIndicator isActive={true} />
                </DotIconWrapper>

                <DotIconWrapper>
                    <AiOutlineMessage />
                    <DotIndicator isActive={true} />
                </DotIconWrapper>
            </Options>
        </Wrapper>
    </IconContext.Provider>
}

export default NavBar