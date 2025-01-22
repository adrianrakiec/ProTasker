import { useState, useEffect } from 'react';

export const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return localStorage.getItem('theme') === 'dark' || false;
	});

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [isDarkMode]);

	const toggleTheme = () => setIsDarkMode(prev => !prev);
	
	return { isDarkMode, toggleTheme };
};
