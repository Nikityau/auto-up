import React, {useContext} from 'react';
import {ThemeContext} from "../../../app/provider/with-theme";
import cn from "classnames";

const ThemeProvider = ({children}:React.PropsWithChildren) => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={cn(
            'app',
            `theme_${theme}`
        )}>
            {children}
        </div>
    );
};

export default ThemeProvider;