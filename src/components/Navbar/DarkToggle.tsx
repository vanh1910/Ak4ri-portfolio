import { useState,useEffect } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const useDarkMode = (): [boolean, (value: boolean) => void] => {
    const [isDarkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined'){
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme){
                return savedTheme === 'dark';
            }

            const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return preferDark;
        }
        return false;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode){
            root.classList.add('dark');
            localStorage.setItem('theme','dark');
        }
        else{
            root.classList.remove('dark');
            localStorage.setItem('theme','light');
        }
    })
    return [isDarkMode,setDarkMode];
}



const DarkToggle = () => {
    const [isDarkMode, setDarkMode] = useDarkMode();
    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
    };

    return(
        <div
            className={`
                m-auto p-2
                w-10 h-10 rounded-full
                bg-gray-100 hover:bg-gray-200 
                border border-gray-200 
                dark:bg-gray-800 dark:hover:bg-gray-700 
                dark:border-gray-700
                transition-all duration-300 ease-in-out
                focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
            `}
            aria-label={isDarkMode ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
        >
            <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={25}
                moonColor="#f1c40f"
                sunColor="#f39c12"
            />
        </div>
    )
}

export default DarkToggle;