import { ThemeProvider } from '@emotion/react';

import { CssBaseline } from '@mui/material';
import theme from './theme/theme';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes/routes';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import 'dayjs/locale/vi';

const router = createBrowserRouter(routes);

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='vi'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
