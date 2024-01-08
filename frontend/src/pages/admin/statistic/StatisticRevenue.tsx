import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  Typography,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { DatePicker } from '@mui/x-date-pickers';
import { getInvoices } from '../../../api/invoice/getInvoices';
import { Invoice } from '../../../api/invoice/types';
import { number } from 'yup';

export const StatisticRevenue = () => {
  const [pData, setPData] = useState([] as number[]);
  const [xLabels, setXLabels] = useState([] as string[]);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });
  const [selectFee, setSelectedFee] = useState('');
  const [selectType, setSelectedType] = useState('');
  const [selectTime, setSelectedTime] = useState('');
  const [openError, setOpenError] = React.useState(false);
  const [openWait, setOpenWait] = React.useState(false);
  const [listFee, setListFee] = useState([] as Invoice[]);
  useEffect(() => {
    const updateSize = () => {
      setChartSize({
        width: window.innerWidth * 0.8, // Set the width based on your requirements
        height: window.innerHeight * 0.8, // Set the height based on your requirements
      });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  useEffect(() => {
    const fetchRequests = async () => {
      const response = await getInvoices();
      setListFee(response);
    };

    fetchRequests();
  }, []);
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };
  const handleButtonClick = () => {
    if (!selectFee || !selectType || !selectTime) {
      setOpenError(true);
      return;
    }
    setOpenWait(true);
    const fetchRequests = async () => {
      const response = await getInvoices();
      setPData([2400, 1398, 9800]);
      setXLabels(['Tháng 1', 'Tháng 2', 'Tháng 3']);
      setOpenWait(false);
    };

    fetchRequests();
  };
  return (
    <div>
      <Grid container style={{ paddingLeft: 20 }}>
        <h1>Thống kê phí</h1>
      </Grid>
      <Grid container style={{ padding: '0 20px 20px 20px' }}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='select-label-1'>Chọn loại phí</InputLabel>
            <Select
              labelId='select-label-1'
              id='select-1'
              value={selectFee}
              label='Chọn loại phí'
              onChange={(e) => setSelectedFee(e.target.value)}
            >
              {listFee.map((fee) => (
                <MenuItem value={fee.id}>{fee.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} style={{ padding: '0 20px 30px 20px' }}>
          <FormControl fullWidth>
            <InputLabel id='select-label-2'>Thống kê theo</InputLabel>
            <Select
              labelId='select-label-2'
              id='select-2'
              value={selectType}
              label='Thống kê theo'
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <MenuItem value='month'>Tháng</MenuItem>
              <MenuItem value='year'>Năm</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <DatePicker
            label='Chọn thời gian bắt đầu'
            onChange={(newValue: any) => setSelectedTime(newValue)}
            views={selectType === 'month' ? ['year', 'month'] : ['year']}
          />
        </Grid>

        <Grid item xs={3} style={{ padding: 10 }}>
          <Button variant='contained' color='primary' onClick={handleButtonClick}>
            Tạo thống kê
          </Button>
        </Grid>
      </Grid>
      {pData.length > 0 && (
        <Grid container xs={12}>
          <BarChart
            series={[{ data: pData, label: 'Doanh thu', id: 'pvId' }]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
            width={chartSize.width}
            height={chartSize.height}
          />
        </Grid>
      )}
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          Vui lòng chọn đầy đủ thông tin
        </Alert>
      </Snackbar>
      <Modal
        open={openWait}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Grid container>
          <Grid item xs={12} style={{ textAlign: 'center', padding: 300, color: '#fff' }}>
            <Typography variant='h5'>Đang tạo thống kê...</Typography>
            <CircularProgress />
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};
