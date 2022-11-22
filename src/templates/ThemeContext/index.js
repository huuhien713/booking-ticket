import React, { useState } from 'react';

import { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ( {children} ) => {

    const [theme, setTheme] = useState('lightTheme');

    const toggleTheme = () => {
        setTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme');
    }
    const store = {
        theme, toggleTheme
    }

    return (
        <ThemeContext.Provider value={store}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;