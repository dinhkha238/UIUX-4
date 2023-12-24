import { Button, TextField, Grid, Select, FormControl, InputLabel, MenuItem } from '@mui/material';

import { useEffect, useState } from 'react';

import axios from 'axios';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { viVN } from '@mui/x-date-pickers/locales';

const ResidentAddForm = () => {
  const [buildings, setBuildings] = useState([]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      size: '',
      building: 1,
      apartment: '',
      gender: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Tên căn hộ không được để trống'),
      size: yup.number().required('Kích cỡ căn hộ không được để trống'),
      building: yup.string().required('Chung cư không được để trống'),
    }),

    onSubmit: async (values) => {
      try {
        await axios.post('http://localhost:3000/apartments', {
          name: values.name,
          size: values.size,
          BuildingId: values.building,
        });

        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    const fetchBuildings = async () => {
      const response = await axios.get('http://localhost:3000/buildings');
      setBuildings(response.data);
    };

    fetchBuildings();
  }, []);

  console.log(buildings);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} justifyContent='flex-end'>
        <Grid item xs={6}>
          <TextField fullWidth label='Họ' />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label='Tên' />
        </Grid>

        <Grid item xs={6}>
          <DatePicker
            label='Ngày sinh'
            orientation='landscape'
            localeText={viVN.components.MuiLocalizationProvider.defaultProps.locale}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='gender-select-label'>Giới tính</InputLabel>
            <Select
              labelId='gender-select-label'
              id='gender-select'
              label='Giới tính'
              value={formik.values.gender}
              onChange={formik.handleChange('gender')}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
            >
              {['Nam', 'Nữ'].map((gender, index) => {
                return (
                  <MenuItem key={index} value={gender}>
                    {gender}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='country-select-label'>Đất nước</InputLabel>
            <Select
              labelId='country-select-label'
              id='country-select'
              label='Đất nước'
              value={formik.values.country}
              onChange={formik.handleChange('country')}
              error={formik.touched.country && Boolean(formik.errors.country)}
            >
              {['Việt Nam', 'Thái Lan', 'Trung Quốc', 'Singapore'].map((gender, index) => {
                return (
                  <MenuItem key={index} value={gender}>
                    {gender}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='city-select-label'>Thành phố</InputLabel>
            <Select
              labelId='city-select-label'
              id='city-select'
              label='Thành phố'
              value={formik.values.city}
              onChange={formik.handleChange('city')}
              error={formik.touched.city && Boolean(formik.errors.city)}
            >
              {['Hà Nội', 'Bắc Ninh'].map((gender, index) => {
                return (
                  <MenuItem key={index} value={gender}>
                    {gender}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth label='Số điện thoại' />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label='Email' />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='building-select-label'>Chung cư</InputLabel>
            <Select
              labelId='building-select-label'
              id='building-select'
              label='Chung cư'
              value={formik.values.building}
              onChange={formik.handleChange('building')}
              error={formik.touched.building && Boolean(formik.errors.building)}
            >
              {buildings.map((building) => {
                return (
                  <MenuItem key={building.id} value={building.id}>
                    {building.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='building-select-label'>Căn hộ</InputLabel>
            <Select
              labelId='building-select-label'
              id='building-select'
              label='Căn hộ'
              value={formik.values.apartment}
              onChange={formik.handleChange('apartment')}
              error={formik.touched.apartment && Boolean(formik.errors.apartment)}
            >
              {buildings.length !== 0 &&
                buildings
                  .find((building) => building.id === formik.values.building)
                  .Apartments.map((apartment) => {
                    return (
                      <MenuItem key={apartment.id} value={apartment.id}>
                        {apartment.name}
                      </MenuItem>
                    );
                  })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={0}>
          <Button variant='contained' color='primary' type='submit'>
            Thêm cư dân
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ResidentAddForm;
