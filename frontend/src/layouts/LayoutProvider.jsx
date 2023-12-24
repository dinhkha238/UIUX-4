import { Box, Divider } from '@mui/material';

export default function LayoutProvider({ navbar, children }) {
  return (
    <Box display='flex' height='100vh'>
      <Box width='20%'>{navbar}</Box>

      <Divider orientation='vertical' />

      <Box width='80%'>{children}</Box>
    </Box>
  );
}
