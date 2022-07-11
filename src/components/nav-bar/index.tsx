import { AiOutlineMessage } from "react-icons/ai"
import { FiBell } from "react-icons/fi"

import { Wrapper, Options, DotIconWrapper } from "./style"
import { IconContext } from "react-icons"
import { DotIndicator } from "../../styles/dot-indicator"
import { useContext } from "react"
import { ThemeContext } from "styled-components"

const NavBar = () => {
    const themeContext = useContext(ThemeContext)
    
    return <IconContext.Provider value={{
        size: '20px',
        color: themeContext.iconColor
    }}>
        <Wrapper>
            <div>

            </div>

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