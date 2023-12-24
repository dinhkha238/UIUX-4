import { Button, TextField, Grid, Select, FormControl, InputLabel, MenuItem } from '@mui/material';

import { useEffect, useState } from 'react';

import { Snackbar, Alert } from '@mui/material';

import axios from 'axios';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useLocation } from 'react-router-dom';

function extractBuilding(buildings) {
  return buildings.map((building) => {
    return {
      id: building.id,
      name: building.name,
    };
  });
}

const ApartmentUpdateForm = () => {
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      id: location.state.id,
      name: location.state.name,
      size: location.state.size,
      building: location.state.buildingId,
    },
    validationSchema: yup.object({
      name: yup.string().required('Tên căn hộ không được để trống'),
      size: yup.number().required('Kích cỡ căn hộ không được để trống'),
      building: yup.string().required('Chung cư không được để trống'),
    }),

    onSubmit: async (values) => {
      try {
        await axios.put('http://localhost:3000/apartments', {
          ApartmentId: values.id,
          name: values.name,
          size: values.size,
          BuildingId: values.building,
        });

        setSnackbarOpen(true);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const fetchBuildings = async () => {
      const response = await axios.get('http://localhost:3000/buildings');
      setBuildings(extractBuilding(response.data));
    };

    fetchBuildings();
  }, []);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  function handleSnackbarClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity='success' sx={{ width: '100%' }}>
          Cập nhật căn hộ thành công
        </Alert>
      </Snackbar>
      <Grid container spacing={2} justifyContent='flex-end'>
        <Grid item xs={6}>
          <TextField
            label='Tên căn hộ'
            fullWidth
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Kích cỡ căn hộ'
            fullWidth
            type='number'
            error={formik.touched.size && Boolean(formik.errors.size)}
            helperText={formik.touched.size && formik.errors.size}
            name='size'
            value={formik.values.size}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={0}>
          <Button variant='contained' color='primary' type='submit'>
            Cập nhật căn hộ
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ApartmentUpdateForm;
