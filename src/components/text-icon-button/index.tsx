import { ReactNode } from "react"
import { IconContext } from "react-icons"
import { useTheme } from "styled-components"
import { StyledButton, StyledOutlineButton, RightSpace } from "./style"

interface TextIconButtonProps {
    icon: ReactNode
    iconSize?: string
    iconColor?: 'primary' | string
    text: string
}

const Content = ({ icon, iconSize = '12px', iconColor, text }: TextIconButtonProps) => {
    const theme = useTheme()
    
    return <>
        <IconContext.Provider value={{
            color: iconColor === 'primary' ? theme.primaryColor : iconColor,
            size: iconSize
        }}>
            {icon}
        </IconContext.Provider>
        {text}
        <RightSpace iconSize={iconSize} />
    </>
}

export const TextIconButton = (props: TextIconButtonProps) => {
    return <StyledButton>
        <Content {...props} />
    </StyledButton>
}

export const OutlineTextIconButton = (props: TextIconButtonProps) => {
    return <StyledOutlineButton>
        <Content {...props} />
    </StyledOutlineButton>
}