import React, { useContext } from 'react';
import ThemeContext from '../context/Theme';

const BtnTheme = () => {
    const {theme,themeToggle}=useContext(ThemeContext)
    return (
        <div className={theme ? 'css-dark fa-moon':'css-light fa-sun'} onClick={themeToggle}>
            {theme ?<i className="fa-solid fa-sun"></i>:<i className="fa-solid fa-moon"></i>}
        </div>
    );
};

export default BtnTheme;