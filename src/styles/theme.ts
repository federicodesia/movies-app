import { createGlobalStyle, DefaultTheme } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
  }
`

const general = {
    primaryColor: '#D81F26',
    onlineColor: '#B5EDB3',
    shadows: {
        xs: 'rgba(0, 0, 0, 0.03) 0px 8px 24px',
        sm: 'rgba(0, 0, 0, 0.1) 0px 8px 24px'
    }
}

export const lightTheme: DefaultTheme = {
    ...general,
    backgroundColor: '#FAFBFF',
    tooltipBackgroundColor: 'white',
    progressBackgroundColor: 'rgba(0, 0, 0, 0.08)',
    starColor: '#FFA235',

    switchBackgroundColor: 'rgba(0, 0, 0, 0.75)',
    fallbackColor: 'rgba(0, 0, 0, 0.12)',
    separatorColor: 'rgba(0, 0, 0, 0.1)',
    iconColor: '#304455',
    titleColor: '#304455',
    textColor: 'rgba(0, 0, 0, 0.75)',
    lightTextColor: 'rgba(0, 0, 0, 0.65)',

    outlineButton: {
        borderColor: 'rgba(0, 0, 0, 0.2)',
        hoverColor: 'rgba(0, 0, 0, 0.05)'
    },

    menu: {
        backgroundColor: '#FEFEFF',
        hoverColor: `${general.primaryColor}14`,
        activeColor: `${general.primaryColor}1F`,
        activeHoverColor: `${general.primaryColor}29`,
        backdropColor: 'rgba(0, 0, 0, 0.16)'
    }
}

export const darkTheme: DefaultTheme = {
    ...general,
    backgroundColor: '#16171B',
    tooltipBackgroundColor: '#0E0E0E',
    progressBackgroundColor: 'rgba(255, 255, 255, 0.05)',
    starColor: '#FFC83D',

    switchBackgroundColor: 'rgba(255, 255, 255, 0.1)',
    fallbackColor: 'rgba(255, 255, 255, 0.08)',
    separatorColor: 'rgba(255, 255, 255, 0.08)',
    iconColor: 'white',
    titleColor: 'white',
    textColor: 'rgba(255, 255, 255, 0.65)',
    lightTextColor: 'rgba(255, 255, 255, 0.5)',

    outlineButton: {
        borderColor: 'rgba(255, 255, 255, 0.25)',
        hoverColor: 'rgba(255, 255, 255, 0.03)'
    },

    menu: {
        backgroundColor: '#131317',
        hoverColor: `${general.primaryColor}08`,
        activeColor: `${general.primaryColor}0D`,
        activeHoverColor: `${general.primaryColor}14`,
        backdropColor: 'rgba(0, 0, 0, 0.35)'
    }
}