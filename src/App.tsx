import { Navbar } from './components/Navbar';

function App() {
	return (
		<>
			<Navbar toggleTheme={() => console.log('toogle')} isDarkMode={true} />
		</>
	);
}

export default App;
