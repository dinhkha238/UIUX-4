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
import { LineChart } from '@mui/x-charts';
import { DatePicker } from '@mui/x-date-pickers';
import React from 'react';
import { useState, useEffect } from 'react';

export const StatisticResident = () => {
  const [uData, setUData] = useState([] as number[]);
  const [pData, setPData] = useState([] as number[]);
  const [xLabels, setXLabels] = useState([] as string[]);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });
  const [selectType, setSelectedType] = useState('');
  const [selectTime, setSelectedTime] = useState('');
  const [openError, setOpenError] = React.useState(false);
  const [openWait, setOpenWait] = React.useState(false);

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
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };
  const handleButtonClick = () => {
    if (!selectType || !selectTime) {
      setOpenError(true);
      return;
    }
    setOpenWait(true);
    const fetchRequests = async () => {
      setUData([1000, 2000, 3000]);
      setPData([2400, 1398, 9800]);
      setXLabels(['Tháng 1', 'Tháng 2', 'Tháng 3']);
      setOpenWait(false);
    };

    fetchRequests();
  };
  return (
    <div>
      <Grid container style={{ paddingLeft: 20 }}>
        <h1>Thống kê dân cư</h1>
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
      {uData.length > 0 && (
        <Grid container xs={12}>
          <LineChart
            width={chartSize.width}
            height={chartSize.height}
            series={[
              { data: pData, label: 'Cư dân vào' },
              { data: uData, label: 'Cư dân ra' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
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
