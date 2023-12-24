import { createTheme, PaletteMode } from '@mui/material';

import { viVN } from '@mui/material/locale';
import { viVN as dataGridVN } from '@mui/x-data-grid';

const themeOptions = {
  palette: {
    mode: 'light' as PaletteMode,
    primary: {
      main: '#9A4056',
    },
    secondary: {
      main: '#F50057',
    },
    error: {
      main: '#F44336',
    },
  },
  viVN,
  dataGridVN,
};

const theme = createTheme(themeOptions);

export default theme;
