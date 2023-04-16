import { FC, useContext } from "react";
import { ThemeContext } from '../../contexts/theme-context';
import "./styles.scss"

const ThemeButton: FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
    };

    return(
        <button className="theme-button" onClick={handleThemeChange}>
            {theme === 'light' ? 
            <span className="material-symbols-outlined">dark_mode</span> :
            <span className="material-symbols-outlined">light_mode</span>
        }
        </button>
    );
}

export default ThemeButton;