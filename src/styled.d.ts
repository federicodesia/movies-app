import styled from "styled-components"

declare module 'styled-components' {
    export interface DefaultTheme {
        primaryColor: string
        onlineColor: string
        starColor: string,

        backgroundColor: string
        tooltipBackgroundColor: string
        progressBackgroundColor: string
        
        separatorColor: string
        switchBackgroundColor: string
        fallbackColor: string
        iconColor: string
        titleColor: string
        textColor: string
        lightTextColor: string

        outlineButton: {
            borderColor: string
            hoverColor: string
        }

        menu: {
            backgroundColor: string
            hoverColor: string
            activeColor: string
            activeHoverColor: string
            backdropColor: string
        }
    }
}