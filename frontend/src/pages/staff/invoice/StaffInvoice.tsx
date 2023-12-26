import { Box, Typography, Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function StaffInvoice() {
  const navigate = useNavigate();

  return (
    <Box display='flex' p={2} flexDirection='column' gap={2} height='100vh'>
      <Typography variant='h3' color='text'>
        Quản lý phí
      </Typography>

      <Divider />

      <Box>
        <Button variant='contained' onClick={() => navigate('/staff/invoice/add')}>
          Tạo khoản thu
        </Button>
      </Box>
    </Box>
  );
}
