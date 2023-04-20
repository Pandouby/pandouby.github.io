import { FC, useContext } from "react";
import { ThemeContext } from '../../contexts/theme-context';
import "./styles.scss"
import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md'

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
            <MdLightMode className="theme-icon" /> :
            <MdOutlineDarkMode className="theme-icon" />
        }
        </button>
    );
}

export default ThemeButton;