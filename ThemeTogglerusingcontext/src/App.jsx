import { useEffect, useState } from 'react'
import './App.css'
import  {Themeprovider} from './contexts/Theme'
import Card from './components/card'
import ToggleButton from './components/ToggleButton'

function App() {
  const [themeMode, setTheme] = useState('light');

  const darkTheme = () => {
    setTheme('dark');
  };

  const lightTheme = () => {
    setTheme('light');
  };

  useEffect(() => {
    const cardElement = document.querySelector('.card');
    if (cardElement) {
      cardElement.classList.remove('dark', 'light');
      cardElement.classList.add(themeMode);
    }
  }, [themeMode]);

  return (
    <Themeprovider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="mb-4">
          <ToggleButton />
        </div>
        <Card />
      </div>
    </Themeprovider>
  );
}

export default App;
