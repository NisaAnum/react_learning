import React from 'react';
import useTheme from '../contexts/Theme';

const ToggleButton = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const handleToggleBtn = (e) => {
    const themeModeStatus = e.currentTarget.checked;
    if (themeModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="flex items-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            onChange={handleToggleBtn}
            checked={themeMode === 'dark'}
          />
          <div className="block w-10 h-6 bg-gray-400 rounded-full"></div>
          <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${themeMode === 'dark' ? 'transform translate-x-4' : ''}`}></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">Toggle Theme</div>
      </label>
    </div>
  );
};

export default ToggleButton;
