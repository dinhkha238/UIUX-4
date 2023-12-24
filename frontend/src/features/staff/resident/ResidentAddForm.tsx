import { Autocomplete, Button, TextField, Grid } from '@mui/material';

import { useEffect, useState } from 'react';

import axios from 'axios';

import dayjs from 'dayjs';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { viVN } from '@mui/x-date-pickers/locales';

import cities from '../../../assets/cities';
import genders from '../../../assets/genders';

const ResidentAddForm = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const fetchBuildings = async () => {
      const response = await axios.get('http://localhost:3000/buildings');
      setBuildings(
        response.data.map((building) => ({
          label: building.name,
          id: building.id,
          apartments: building.Apartments,
        })),
      );
    };

    fetchBuildings();
  }, []);

  useEffect(() => {
    // Set the default value for the Autocomplete after buildings data is fetched
    if (buildings.length > 0) {
      formik.setFieldValue('building', buildings[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buildings]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      birthday: dayjs(),
      gender: genders[0],
      email: '',
      phone: '',
      city: cities[0],
      district: '',
      subdistrict: '',
      building: '',
      apartment: '',
    },
    validationSchema: yup.object({
      firstName: yup.string().required('Họ không được để trống'),
      lastName: yup.string().required('Tên không được để trống'),
      birthday: yup.date().required('Ngày sinh không được để trống'),
      email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
      phone: yup
        .string()
        .test('isNumber', 'Số điện thoại không hợp lệ', (value) => {
          return Number.isInteger(Number(value));
        })
        .min(9, 'Số điện thoại có ít nhất 9 chữ số')
        .max(11, 'Số điện thoại có nhiều nhất 11 chữ số')

        .required('Số điện thoại không được để trống'),
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

  console.log(formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} justifyContent='flex-end'>
        <Grid item xs={6}>
          <TextField
            onChange={formik.handleChange('lastName')}
            value={formik.values.lastName}
            fullWidth
            label='Họ'
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={formik.handleChange('firstName')}
            value={formik.values.firstName}
            fullWidth
            label='Tên'
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>

        <Grid item xs={6}>
          <DatePicker
            editableDateInputs={false}
            value={formik.values.birthday}
            onChange={(newValue) => {
              formik.setFieldValue('birthday', newValue);
            }}
            label='Ngày sinh'
            orientation='landscape'
            localeText={viVN.components.MuiLocalizationProvider.defaultProps.locale}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            disableClearable
            value={formik.values.gender}
            onChange={(event, newValue) => {
              formik.setFieldValue('gender', newValue);
            }}
            renderInput={(params) => <TextField {...params} label='Giới tính' />}
            fullWidth
            options={genders}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            value={formik.values.phone}
            onChange={formik.handleChange('phone')}
            fullWidth
            label='Số điện thoại'
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={formik.handleChange('email')}
            value={formik.values.email}
            fullWidth
            label='Email'
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>

        <Grid item xs={12}>
          <Autocomplete
            disableClearable
            value={formik.values.city}
            onChange={(event, newValue) => {
              formik.setFieldValue('city', newValue);
            }}
            renderInput={(params) => <TextField {...params} label='Thành phố' />}
            fullWidth
            options={cities}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            onChange={formik.handleChange('district')}
            value={formik.values.district}
            fullWidth
            label='Quận'
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            onChange={formik.handleChange('subdistrict')}
            value={formik.values.subdistrict}
            fullWidth
            label='Phường'
          />
        </Grid>

        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            disableClearable
            value={formik.values.building}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(event, newValue) => {
              formik.setFieldValue('building', newValue);
            }}
            renderInput={(params) => <TextField {...params} label='Chung cư' />}
            fullWidth
            options={buildings}
          />
        </Grid>

        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            disableClearable
            value={formik.values.building}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(event, newValue) => {
              formik.setFieldValue('building', newValue);
            }}
            renderInput={(params) => <TextField {...params} label='Căn hộ' />}
            fullWidth
            options={buildings}
          />
        </Grid>
        {/*<Grid item xs={6}>
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
                </Grid>*/}

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
