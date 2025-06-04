import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
    const [lightMode, setLightMode] = useState(false);
    
    useEffect(() => {
        if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
            enableLightMode();
        } else {
            disableLightMode();
        }
    }, []);

    const toggleLightMode = () => {
        if (lightMode) {
            disableLightMode();
        } else {
            enableLightMode();
        }
    };
    
    const enableLightMode = () => {
        document.documentElement.classList.add('light');
        localStorage.theme = 'light';
        setLightMode(true);    
    }
    
    const disableLightMode = () => {
        document.documentElement.classList.remove('light');
        localStorage.theme = 'dark';
        setLightMode(false);    
    }
    
    return (
        <button 
            onClick={toggleLightMode}
            className="p-2 rounded-full border border-cyan hover:bg-darkerCyan dark:hover:bg-darkerCyan transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan dark:focus:ring-darkerCyan"
            aria-label={lightMode ? 'Switch to dark mode' : 'Switch to light mode'}
        >
            {lightMode ? (
                <FiMoon className="w-5 h-5 text-darkerCyan" /> // Changed to darkerCyan in light mode
            ) : (
                <FiSun className="w-5 h-5 text-cyan" /> // Kept cyan in dark mode
            )}
        </button>
    )
}

export default DarkModeToggle;