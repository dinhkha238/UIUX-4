import { Box, Button, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ResidentTable from '../../../features/staff/resident/ResidentTable';

export default function StaffResident() {
  const navigate = useNavigate();

  return (
    <Box display='flex' p={2} flexDirection='column' gap={2} height='100vh'>
      <Typography variant='h3' color='text'>
        Quản lý cư dân
      </Typography>

      <Divider />

      <Box>
        <Button
          variant='contained'
          onClick={() => {
            navigate('/staff/resident/add');
          }}
        >
          Thêm cư dân
        </Button>
      </Box>

      <Box flex={1}>
        <ResidentTable />
      </Box>
    </Box>
  );
}
