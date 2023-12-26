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
} from '@mui/material';

export default function StaffInvoiceAdd() {
  return (
    <Box display='flex' p={2} flexDirection='column' gap={2} height='100vh'>
      <Typography variant='h3' color='text'>
        Tạo khoản thu
      </Typography>

      <Divider />

      <Typography variant='h5' color='text'>
        Thông tin khoản thu
      </Typography>

      <Box display='flex' flexDirection='column'>
        <FormControl>
          <FormLabel id='demo-radio-buttons-group-label'>Khoản thu theo</FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='female'
            name='radio-buttons-group'
          >
            <FormControlLabel value='oneTime' control={<Radio />} label='Một lần' />
            <FormControlLabel value='monthly' control={<Radio />} label='Tháng' />
            <FormControlLabel value='quarterly' control={<Radio />} label='Quý' />
            <FormControlLabel value='yearly' control={<Radio />} label='Năm' />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
