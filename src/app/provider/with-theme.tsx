import React, {useState} from 'react';
import {FType} from "../../shared/helpers/types/f-types";

type Theme = 'light' | 'dark'

interface ITheme {
    theme: Theme,
    switchTheme: FType<void, void>
}

export const ThemeContext = React.createContext<ITheme>(null)

const WithTheme = ({children}: React.PropsWithChildren) => {

    const [theme, setTheme] = useState<Theme>(() => {
        const userTheme = localStorage.getItem('user-theme') as Theme

        return userTheme || 'light'
    })

    const switchTheme = () => {
        setTheme(prev => {
            if(prev == 'light') {
                localStorage.setItem('user-theme', 'dark')
                return 'dark'
            }

            localStorage.setItem('user-theme', 'light')
            return 'light'
        })
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            switchTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default WithTheme;