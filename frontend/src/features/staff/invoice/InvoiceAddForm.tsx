import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
  Box,
  Grid,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
} from '@mui/material';

import { NumericFormat, NumericFormatProps } from 'react-number-format';

import { useFormik } from 'formik';
import React, { useEffect } from 'react';

import {
  GetBuildingsResponse,
  getBuildings,
  GetBuildingsResponseElement,
} from '../../../api/building/getBuildings';

import { getInvoices } from '../../../api/invoice/getInvoices';
import { Invoice } from '../../../api/invoice/types';

import { CreateInvoiceApartmentRequest } from '../../../api/invoice-apartment/createInvoiceApartment';
import dayjs, { Dayjs } from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers';

import * as yup from 'yup';
import InvoiceApartmentTable from './InvoiceApartmentTable';

type InvoiceApartmentAddFormProps = {
  InvoiceId: number | undefined;
  ApartmentIds: number[];
  description: string;
  amount: number;
  startDate: Dayjs;
  endDate: Dayjs;
};

function toCreateInvoiceApartmentRequest(
  values: InvoiceApartmentAddFormProps,
): CreateInvoiceApartmentRequest {
  // @ts-ignore
  return {};
}

export default function InvoiceAddForm() {
  const [invoiceTypes, setInvoiceTypes] = React.useState<Invoice[]>([]);

  useEffect(() => {
    async function fetchInvoiceTypes() {
      const res = await getInvoices();
      setInvoiceTypes(res);
    }

    fetchInvoiceTypes();
  }, []);

  const formik = useFormik<InvoiceApartmentAddFormProps>({
    initialValues: {
      InvoiceId: 1,
      ApartmentIds: [],
      description: '',
      amount: 0,
      startDate: dayjs(),
      endDate: dayjs(),
    },
    validationSchema: yup.object<InvoiceApartmentAddFormProps>({
      InvoiceId: yup.number().required(),
      ApartmentIds: yup.array().required(),
      description: yup.string().required('Mô tả không được để trống'),
      amount: yup
        .number()
        .required('Số tiền không được để trống')
        .moreThan(0, 'Số tiền phải lớn hơn 0'),
      startDate: yup
        .date()
        .required()
        .max(yup.ref('endDate'), 'Ngày bắt đầu phải nhỏ hơn hoặc bằng ngày kết thúc'),
      endDate: yup
        .date()
        .required()
        .min(yup.ref('startDate'), 'Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box display='flex' flexDirection='column' gap={2} height={1}>
      <Grid container spacing={2} justifyContent='flex-end'>
        <Grid item xs={12}>
          <Typography variant='h5' color='text'>
            Thông tin khoản thu
          </Typography>
        </Grid>

        <Grid item xs={6}>
          {invoiceTypes.length !== 0 && (
            <FormControl fullWidth>
              <InputLabel id='invoice-select-label'>Loại khoản thu</InputLabel>
              <Select
                label='Loại khoản thu'
                value={formik.values.InvoiceId}
                onChange={(event) => {
                  formik.setFieldValue('InvoiceId', event.target.value);
                }}
              >
                {invoiceTypes.map((invoice) => (
                  <MenuItem key={invoice.id} value={invoice.id}>
                    {invoice.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Số tiền'
            type='number'
            InputProps={{
              endAdornment: 'đ',
            }}
            error={!!formik.errors.amount}
            helperText={formik.errors.amount}
            value={formik.values.amount}
            onChange={formik.handleChange('amount')}
          />
        </Grid>

        <Grid item xs={6}>
          <DatePicker
            value={formik.values.startDate}
            onChange={(newValue) => {
              formik.setFieldValue('startDate', newValue);
            }}
            label='Ngày bắt đầu'
            orientation='landscape'
            slotProps={{ textField: { fullWidth: true, contentEditable: false } }}
          />
        </Grid>

        <Grid item xs={6}>
          <DatePicker
            value={formik.values.endDate}
            onChange={(newValue) => {
              formik.setFieldValue('endDate', newValue);
            }}
            label='Ngày kết thúc'
            orientation='landscape'
            slotProps={{ textField: { fullWidth: true, contentEditable: false } }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Mô tả'
            value={formik.values.description}
            onChange={formik.handleChange('description')}
            error={!!formik.errors.description}
            helperText={formik.errors.description}
          />
        </Grid>
      </Grid>

      <Box flex={1} display='flex' flexDirection='column' gap={2}>
        <Typography variant='h5' color='text'>
          Các căn hộ áp dụng
        </Typography>

        <InvoiceApartmentTable formik={formik} />

        <Box alignSelf='end'>
          <Button
            onClick={() => {
              console.log(formik.values);
              formik.handleSubmit();
            }}
            variant='contained'
          >
            Tạo khoản phí
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
