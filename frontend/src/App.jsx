import { ThemeProvider } from '@emotion/react';

import { CssBaseline } from '@mui/material';
import theme from './theme/theme';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes/routes';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { viVN } from '@mui/x-date-pickers/locales';

const router = createBrowserRouter(routes);

function App() {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={viVN.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
