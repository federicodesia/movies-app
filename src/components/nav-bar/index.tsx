import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"
import { AiOutlineMessage } from "react-icons/ai"
import { FiBell } from "react-icons/fi"

import { Wrapper, Options, DotIconWrapper, Dot } from "./style"
import { IconContext } from "react-icons"

const NavBar = () => {
    return <IconContext.Provider value={{ color: 'white', size: '20px' }}>
        <Wrapper>
            <div>

            </div>

            <Options>
                <DotIconWrapper>
                    <FiBell />
                    <Dot isActive={true} />
                </DotIconWrapper>

                <DotIconWrapper>
                    <AiOutlineMessage />
                    <Dot isActive={true} />
                </DotIconWrapper>
            </Options>
        </Wrapper>
    </IconContext.Provider>
}

export default NavBar