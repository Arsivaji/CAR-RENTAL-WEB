import React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function ThemeToggle({ toggleTheme, themeMode }) {
  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}

export default ThemeToggle;
