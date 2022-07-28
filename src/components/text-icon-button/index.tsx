import { ReactNode } from "react"
import { StyledButton, StyledOutlineButton, RightSpace } from "./style"

interface TextIconButtonProps {
    icon: ReactNode
    iconSize?: string
    text: string
}

export const TextIconButton = ({ icon, iconSize = '1em', text }: TextIconButtonProps) => {
    return <StyledButton>
        {icon}
        {text}
        <RightSpace iconSize={iconSize} />
    </StyledButton>
}

export const OutlineTextIconButton = ({ icon, iconSize = '1em', text }: TextIconButtonProps) => {
    return <StyledOutlineButton>
        {icon}
        {text}
        <RightSpace iconSize={iconSize} />
    </StyledOutlineButton>
}