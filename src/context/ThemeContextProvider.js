import { useReducer } from 'react'
import  ThemeContext  from './ThemeContext'
import {theme } from './ThemeContext'

const defaultState = {
    darkMode: false,
}

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkMode: !state.darkMode
            }

            case "TEST":
                return {
                    ...state,
                    test: action.payload,
                }

        default:
            return state;
    }
}

const ThemeContextProvider = (props) => {


    const [themeState, dispatch] = useReducer(themeReducer, theme)


    const toggleTheme = () => {
        dispatch({
            type: "TOGGLE_DARK_MODE",
        })
    
    }
    const tester = (str) => {
        dispatch({
            type: "TEST", 
            payload: str
        })
    }


    const themeContext = {
    
        darkMode: themeState.darkMode,
        colors: themeState.colors,
        themeContainerWidth: themeState.themeContainerWidth,
        themeShadows: themeState.themeShadows,
        themeButtonRadiuses: themeState.themeButtonRadiuses,
        themeFontSize: themeState.themeFontSize,
        themeFontFamily: themeState.themeFontFamily,
        themeTransition: themeState.themeTransition,
        themeBreakPoints: themeState.themeBreakPoints,
        test: themeState.test,
        toggleTheme,
        tester, 
      

    }





    return (
        <ThemeContext.Provider value={themeContext}>
            {props.children}
        </ThemeContext.Provider>
    )
};

export default ThemeContextProvider