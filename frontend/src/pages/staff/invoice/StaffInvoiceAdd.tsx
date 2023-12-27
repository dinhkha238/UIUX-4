import {
  Box,
  Typography,
  Divider,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

import InvoiceAddForm from '../../../features/staff/invoice/InvoiceAddForm';

export default function StaffInvoiceAdd() {
  return (
    <Box display='flex' p={2} flexDirection='column' gap={2} height='100vh'>
      <Typography variant='h3' color='text'>
        Tạo khoản thu
      </Typography>

      <Divider />

      <Box flex={1}>
        <InvoiceAddForm />
      </Box>
    </Box>
  );
}
