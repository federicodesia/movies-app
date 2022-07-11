import { DefaultTheme } from "styled-components"

const general = {
    primaryColor: '#D81F26',
    onlineColor: '#B5EDB3'
}

export const lightTheme: DefaultTheme = {
    ...general,
    backgroundColor: '#FAFBFF',
    tooltipBackgroundColor: 'white',

    iconColor: '#304455',
    titleColor: '#304455',
    textColor: 'rgba(0, 0, 0, 0.75)',
    lightTextColor: 'rgba(0, 0, 0, 0.65)',

    menu: {
        backgroundColor: '#FEFEFF',
        hoverColor: `${general.primaryColor}14`,
        activeColor: `${general.primaryColor}1F`,
        activeHoverColor: `${general.primaryColor}29`,
    }
}

export const darkTheme: DefaultTheme = {
    ...general,
    backgroundColor: '#16171B',
    tooltipBackgroundColor: '#0E0E0E',

    iconColor: 'white',
    titleColor: 'white',
    textColor: 'rgba(255, 255, 255, 0.65)',
    lightTextColor: 'rgba(255, 255, 255, 0.5)',

    menu: {
        backgroundColor: '#131317',
        hoverColor: `${general.primaryColor}08`,
        activeColor: `${general.primaryColor}0D`,
        activeHoverColor: `${general.primaryColor}14`,
    }
}