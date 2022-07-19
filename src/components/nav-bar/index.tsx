import { AiOutlineMessage } from "react-icons/ai"
import { FiBell } from "react-icons/fi"

import { Wrapper, Options, DotIconWrapper } from "./style"
import { IconContext } from "react-icons"
import { DotIndicator } from "../../styles/dot-indicator"

const NavBar = () => {
    return <IconContext.Provider value={{size: '20px'}}>
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