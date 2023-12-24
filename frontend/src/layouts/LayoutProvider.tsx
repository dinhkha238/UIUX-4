import { Box, Divider } from '@mui/material';
import { ReactNode } from 'react';

interface LayoutProviderProps {
  navbar: ReactNode;
  children: ReactNode;
}

export default function LayoutProvider({ navbar, children }: LayoutProviderProps) {
  return (
    <Box display='flex' height='100vh'>
      <Box width='20%'>{navbar}</Box>

      <Divider orientation='vertical' />

      <Box width='80%'>{children}</Box>
    </Box>
  );
}
