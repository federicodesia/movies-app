import { ReactNode, useRef } from "react"
import useOnClickOutside from "../../hooks/use-on-click-outside"
import { BackdropWrapper, ContentWrapper } from "./style"

interface SideDrawerProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

const SideDrawer = ({ isOpen, onClose, children }: SideDrawerProps) => {
    const contentRef = useRef(null);
    useOnClickOutside(contentRef, () => {
        if(isOpen) onClose()
    })

    return <BackdropWrapper isOpen={isOpen}>
        <ContentWrapper isOpen={isOpen} ref={contentRef}>
            {children}
        </ContentWrapper>
    </BackdropWrapper>
}

export default SideDrawer